import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { ProcessEnv } from "../env";

const db = drizzle(ProcessEnv.DATABASE_URL);
