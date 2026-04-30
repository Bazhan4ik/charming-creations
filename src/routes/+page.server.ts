import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
// import { dbClient } from "$lib/server/db"

export const load: PageServerLoad = async () => {

	// const client = await dbClient();

	// const items = await client.db("items").collection("apr28").find({}).toArray();
	const items = [ { name: "My Item" } ];

	if(!items) {
		error(404, "Not found")
	}

	// ObjectId is not POJO
	for(const i of items) {
		delete (i as any)._id;
	}
	delete (items as any)._id;

	return { items };
}

