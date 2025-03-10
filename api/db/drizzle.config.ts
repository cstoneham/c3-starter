import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { ProcessEnv } from "../env";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ProcessEnv.DATABASE_URL,
  },
});
