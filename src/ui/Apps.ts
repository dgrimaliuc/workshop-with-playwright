import { Page } from "@playwright/test";
import { NeonStreamApp } from "./app/NeonStreamApp";
import { GalleryApp } from "./app/GalleryApp";

export class Apps {
  public stream: NeonStreamApp;
  public gallery: GalleryApp;

  constructor(protected readonly page: Page) {
    this.stream = new NeonStreamApp(page);
    this.gallery = new GalleryApp(page);
  }
}
