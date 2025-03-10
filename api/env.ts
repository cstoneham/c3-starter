import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const parseEnvVars = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map((err) => err.path).join(", ");
      throw new Error(`❌ Invalid environment variables: ${missingVars}`);
    }
    throw error;
  }
};

export const ProcessEnv = parseEnvVars();
