import { test as base } from "@playwright/test";

import { App } from "../ui/App";
import { AppTasks } from "../ui/AppTasks.js";
import setupEnv from "../../config";

export { expect } from "./expect";

export const afterAll = base.afterAll.bind(base);
export const afterEach = base.afterEach.bind(base);
export const beforeAll = base.beforeAll.bind(base);
export const beforeEach = base.beforeEach.bind(base);
export const describe = base.describe.bind(base);
export const step = base.step.bind(base);

export const test = base.extend<{
  app: App;
  tasks: AppTasks;
}>({
  app: async ({ page }, use) => use(new App(page)),
  tasks: async ({ page }, use) => use(new AppTasks(page)),
  page: async ({ page, playwright }, use, testInfo) => {
    await use(page);
  },
});

test.beforeAll(async ({}, testInfo) => {
  setupEnv();
});

test.afterEach(async ({ app, page }, testInfo) => {
  // Some code after test
});
