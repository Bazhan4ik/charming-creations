import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get("session");
	console.log("Handle token: ", token);

	if(token == "bazhan") {
		(event.locals as any).user = { name: "bazhan" };
	}

	return await resolve(event);
}
