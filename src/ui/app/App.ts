import { Page } from "@playwright/test";

export abstract class App {
  constructor(protected readonly page: Page) {}

  abstract initApp(): void;
}
