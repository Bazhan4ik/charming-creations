

import { redirect } from "@sveltejs/kit"
import type { LayoutData } from "../$types"

export const load: LayoutData = async ({ locals }: { locals: any }) => {
	if(!locals.user) {
		redirect(303, "/login")
	}

	return { user: locals.user, a: "hello!!" }
}
