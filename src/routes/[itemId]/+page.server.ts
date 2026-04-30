import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
// import { dbClient } from "$lib/server/db"

// export const load: PageServerLoad = async ({ params }) => {
// 	if(!isValidItemId(params.itemId)) {
// 		error(422, "Bad call")
// 	}
//
// 	const client = await dbClient();
//
// 	const item = await client.db("items").collection("apr28").findOne({ longItemId: params.itemId });
//
// 	if(!item) {
// 		error(404, "Not found")
// 	}
//
// 	// ObjectId is not POJO
// 	delete (item as any)._id;
//
// 	return { ...item };
// }
//
function isValidItemId(id: string): boolean {
	if(!id || typeof id != "string" || id.length == 0) return false;
	return true;
}
