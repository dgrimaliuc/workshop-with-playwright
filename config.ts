import dotenv from "dotenv";
import path from "path";

export default function setupEnv(): void {
  ["content", "urls", "users"].forEach(configName => {
    dotenv.config({
      path: path.resolve(
        process.cwd(),
        "config",
        `${process.env.NODE_ENV}-configs`,
        `.env.${configName}`
      ),
    });
  });
}
