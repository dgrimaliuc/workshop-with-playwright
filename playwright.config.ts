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
  // Timeout for each test in milliseconds. Defaults to 35 seconds.
  timeout: 35000,
  expect: {
    timeout: 10000,
  },
  testDir: "./src/tests",
  outputDir: "./test-results",

  fullyParallel: false,
  forbidOnly: true,
  testMatch: "**.ts",
  // The maximum number of retry attempts given to failed tests.
  retries: 0,
  reporter: "html",
  use: {
    trace: "on", // Captures traces for all tests
    screenshot: "only-on-failure", // Saves screenshots
    headless: false,
    ignoreHTTPSErrors: true,
    viewport: { width: 1720, height: 980 },
    video: {
      // Record video for each test, but remove all videos from successful test runs.
      mode: "retain-on-failure",
      size: { width: 1720, height: 980 },
    },
    actionTimeout: 10000,
    testIdAttribute: "data-t",
  },

  /* Configure projects */
  projects: [
    {
      name: "Pixel 5",
      use: { ...devices["Pixel 5"], baseURL: "https://neon-stream.web.app" },
    },

    {
      name: "iPhone 15 Pro",
      use: {
        ...devices["iPhone 15 Pro"],
        baseURL: "https://neon-stream.web.app",
      },
    },

    // Gallery-specific tests
    {
      name: "gallery",
      testMatch: ["gallery/**.ts"],
      use: {
        channel: "chrome",
        ...devices["Desktop Chrome"],
        baseURL: "https://personal-media-gallery.web.app",
      },
      retries: 0,
      metadata: {
        environment: "gallery",
      },
    },

    // Stream-specific tests
    {
      name: "stream",
      testMatch: ["stream/**.ts"],
      use: {
        channel: "chrome",
        ...devices["Desktop Chrome"],
        baseURL: "https://neon-stream.web.app",
      },
      retries: 0,
      metadata: {
        environment: "stream",
      },
    },
  ],
});
