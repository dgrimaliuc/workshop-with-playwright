import { defineConfig, devices } from "@playwright/test";
const defaultEnv = "gallery";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
process.env.NODE_ENV = process.env.NODE_ENV ?? defaultEnv;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 35000,
  expect: {
    timeout: 10000,
  },
  testDir: "./src/tests",
  outputDir: "./test-results",
  testMatch: "**.ts",
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: true,
  retries: 0,
  reporter: [["html", { outputFolder: "test-results/playwright-report" }]],
  use: {
    ...devices["Desktop Chrome"],
    trace: "on", // Captures traces for all tests
    screenshot: "only-on-failure", // Saves screenshots
    headless: false,
    ignoreHTTPSErrors: true,
    channel: "chrome",
    contextOptions: {
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    },
    viewport: { width: 1720, height: 980 },
    video: {
      mode: "retain-on-failure",
      size: { width: 1920, height: 1080 },
    },

    actionTimeout: 10000,
    permissions: ["clipboard-read", "clipboard-write"],
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    testIdAttribute: "data-t",
  },

  /* Configure projects */
  projects: [
    {
      name: "gallery",
      use: {
        baseURL: "https://personal-media-gallery.web.app",
      },
      retries: 0,
      metadata: {
        environment: "gallery",
      },
    },
    {
      name: "stream",
      use: {
        baseURL: "https://neon-stream.web.app",
      },
      retries: 0,
      metadata: {
        environment: "stream",
      },
    },
  ],
});
