import { BaseComponent, components } from "../../../internal/pom";
import { BrowseCard } from "./BrowseCard";

export class Carousel extends BaseComponent {
  public title = this.root.locator("[class*=carousel-title]");
  public leftArrow = this.root.locator("[class*=controls_arrow_left]");
  public rightArrow = this.root.locator("[class*=controls_arrow_right]");
  public cards = components<BrowseCard>(
    this.root.locator(".scrolling-section > div"),
    locator => new BrowseCard(locator)
  );
}
