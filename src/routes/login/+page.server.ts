

import { redirect } from "@sveltejs/kit"
import type { LayoutData } from "../$types"

export const load: LayoutData = async ({ locals }: { locals: any }) => {
	return { user: locals.user, a: "hello!!" }
}
