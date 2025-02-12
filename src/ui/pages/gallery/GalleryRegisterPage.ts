import { Page } from "@playwright/test";
import { BasePage } from "../../../internal/pom";

export class GalleryRegisterPage extends BasePage {
  // Add your selectors here
  constructor(page: Page) {
    super(page);
  }
}
