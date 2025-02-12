import { test as base } from "@playwright/test";
import { AppTasks } from "../ui/AppTasks.js";
import setupEnv from "../../config";
import { Apps } from "../ui/Apps";
import { BaseActions } from "../ui/utils/BaseActions.js";

export { expect } from "./expect";

export const afterAll = base.afterAll.bind(base);
export const afterEach = base.afterEach.bind(base);
export const beforeAll = base.beforeAll.bind(base);
export const beforeEach = base.beforeEach.bind(base);
export const describe = base.describe.bind(base);
export const step = base.step.bind(base);

export const test = base.extend<{
  app: Apps;
  tasks: AppTasks;
  actions: BaseActions;
}>({
  app: async ({ page }, use) => use(new Apps(page)),
  tasks: async ({ page }, use) => use(new AppTasks(page)),
  actions: async ({ page }, use) => use(new BaseActions(page)),
});

test.beforeEach(async ({ page }) => {
  // Reset the page to the initial state before each test.
  await page.goto("/");
});

test.beforeAll(async ({}, testInfo) => {
  const activeProject = testInfo.project.name;
  console.log(`Running tests for project: [${activeProject}]`);
  process.env.NODE_ENV = activeProject;
  setupEnv();
});
