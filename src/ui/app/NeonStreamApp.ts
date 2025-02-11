import { Page } from "playwright/test";
import { App } from "./App";
import { StreamHomePage } from "../pages/neonStream/StreamHomePage";

export class NeonStreamApp extends App {
  public home: StreamHomePage;

  constructor(protected readonly page: Page) {
    super(page);
    this.initApp();
  }

  initApp(): void {
    this.home = new StreamHomePage(this.page);
  }
}
