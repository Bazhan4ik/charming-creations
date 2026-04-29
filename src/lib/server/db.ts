import { MONGODB } from "$env/static/private"
import { MongoClient } from "mongodb"


let client: MongoClient;


export async function dbClient(): Promise<MongoClient> {
	if(!client) {
		client = new MongoClient(MONGODB);
	}

	await client.connect();

	return client;
}
