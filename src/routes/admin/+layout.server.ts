

import { redirect } from "@sveltejs/kit"
import type { LayoutData } from "../$types"

export const load: LayoutData = async ({ locals }: { locals: any }) => {
	console.log("Load locals: ", locals);
	if(!locals.user) {
		redirect(303, "/login")
	}

	return { user: locals.user, a: "hello!!" }
}
