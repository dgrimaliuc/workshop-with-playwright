import { Page } from "playwright/test";
import { App } from "./App";
import { GalleryHomePage, GalleryLogInPage, GalleryRegisterPage } from "../pages/gallery";

export class GalleryApp extends App {
  public home: GalleryHomePage;
  public logIn: GalleryLogInPage;
  public register: GalleryRegisterPage;

  constructor(protected readonly page: Page) {
    super(page);
    this.initApp();
  }

  initApp(): void {
    this.home = new GalleryHomePage(this.page);
  }
}
