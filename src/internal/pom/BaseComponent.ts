import type { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export abstract class BaseComponent extends BasePage {
  constructor(protected readonly root: Locator) {
    super(root.page());
  }

  public getRoot(): Locator {
    return this.root;
  }
}
