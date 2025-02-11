import { BasePage } from "./BasePage";
import { BaseTasks } from "./BaseTasks";

export abstract class BaseSteps extends BaseTasks {
  public abstract readonly ui: BasePage;
}
