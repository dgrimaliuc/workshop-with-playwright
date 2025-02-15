import { BasePage } from "../../../internal/pom";

export class GalleryRegisterPage extends BasePage {
  public emailInput = this.page.getByTestId("email-input");
  public passwordInput = this.page.getByTestId("password-input");
  public submitBtn = this.page.getByTestId("submit-button");
  public registerLink = this.page.getByTestId("register-link");
}
