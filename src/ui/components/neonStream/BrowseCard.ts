import { BaseComponent } from "../../../internal/pom";

export class BrowseCard extends BaseComponent {
  public poster = this.root.locator("img[class*=browse-card-poster]");
  public title = this.root.locator("[class*=browse-card_browse-card-info]");
}
