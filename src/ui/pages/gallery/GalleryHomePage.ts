import { Page } from "@playwright/test";
import { BasePage } from "../../../internal/pom";

export class GalleryHomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
