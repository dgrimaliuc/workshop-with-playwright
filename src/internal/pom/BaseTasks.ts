import type { Page } from "@playwright/test";

export abstract class BaseTasks {
  constructor(protected page: Page) {}
}
