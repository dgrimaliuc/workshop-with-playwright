import { Page } from "@playwright/test";
import { BasePage } from "../../../internal/pom";

export class GalleryLogInPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
