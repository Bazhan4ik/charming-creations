

import { error, redirect } from "@sveltejs/kit"
import type { LayoutData } from "../$types"
import type { Actions } from "./$types"

export const load: LayoutData = async ({ locals }: any) => {
	if(locals.user) {
		redirect(303, "/admin");
	}
	return { user: locals.user, a: "hello!!" }
}


export const actions = {
	default: async ({ request, cookies }) => {
		const rawData = await request.formData();

		const data = verifyLoginData(rawData);
		
		if(!data) {
			error(422, "Bad request");
		}

		const { username, password } = data;

		if(username == "bazhan" && password == "pass") {
			const token = "bazhan";

			cookies.set('session', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: true,
				maxAge: 60 * 60 * 24 * 7 // 1 week
			});

			console.log("PASSED")
			redirect(303, "/admin");
		}

		error(400, "Invalid credentials");
	}
} satisfies Actions

function verifyLoginData(data: FormData) {
	const username = data.get("username")
	if(!username || typeof username != "string") {
		return null
	}
	const password = data.get("password")
	if(!password || typeof password != "string") {
		return null
	}

	return { username, password }
}
