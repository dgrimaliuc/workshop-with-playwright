import { Page } from "@playwright/test";

export class App {
  constructor(protected readonly page: Page) {}
}
