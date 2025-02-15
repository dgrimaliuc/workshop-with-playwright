import { BasePage } from "../../../internal/pom";

export class GalleryHomePage extends BasePage {
  public searchInput = this.page.getByTestId("search-input");
  public mediaCard = this.page.getByTestId("media-card");
}
