import type { Locator } from "@playwright/test";
import { BaseComponent, components } from "../../../internal/pom";
import { HeroCard } from "./HeroCard";

export class HeroCarousel extends BaseComponent {
  public tabs = this.root.locator("[class*=pagination-wrapper] button[class*=hero-carousel__page]");

  public cards = components<HeroCard>(
    this.root.locator("[class*=hero-card-container]"),
    (locator: Locator) => new HeroCard(locator)
  );

  public activeCard = new HeroCard(
    this.root.locator("[class*=hero-card-container]:not([class*=inactive])")
  );

  public leftArrow = this.root.locator("[class*=arrow-left]");
  public rightArrow = this.root.locator("[class*=arrow-right]");
  public placeholders = this.root.locator("[class*=placeholder]");
}
