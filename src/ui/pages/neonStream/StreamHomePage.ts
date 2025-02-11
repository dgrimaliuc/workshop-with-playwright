import { Page } from "@playwright/test";
import { BasePage, components } from "../../../internal/pom";
import { HeroCarousel } from "../../components/neonStream/HeroCarousel";
import { Carousel } from "../../components/neonStream/Carousel";

export class StreamHomePage extends BasePage {
  public heroCarousel = new HeroCarousel(this.page.locator("[class*=hero-carousel-wrapper]"));

  public carousels = components<Carousel>(
    this.page.locator(".carousel-wrapper"),
    locator => new Carousel(locator)
  );

  constructor(page: Page) {
    super(page);
  }
}
