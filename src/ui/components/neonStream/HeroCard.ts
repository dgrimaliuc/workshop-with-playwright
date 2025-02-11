import { BaseComponent } from "../../../internal/pom";

export class HeroCard extends BaseComponent {
  public title = this.root.locator("a[class*=title]");
  public image = this.root.locator("img[class*=hero-card-picture]");
  public description = this.root.locator("[class*=description]");
  public watchNowButton = this.root.locator("button[class*=watch-now-btn]");
  public addToWatchlist = this.root.getByTestId("not-in-watchlist");
  public removeFromWatchlist = this.root.getByTestId("in-watchlist");
}
