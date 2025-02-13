import { BasePage } from "../../../internal/pom";

export class GalleryLogInPage extends BasePage {
  public emailInput = this.page.getByTestId("email-input");
  // Add your selectors bellow using example above
  public passwordInput = null;
}
