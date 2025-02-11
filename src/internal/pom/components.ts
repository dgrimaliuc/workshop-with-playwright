import type { Locator } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

type Components<T> = { [index: number]: T | undefined } & AsyncIterable<T> & Locator;

export function components<T extends BaseComponent>(
  locator: Locator,
  decorator: (locator: Locator) => T
): Components<T> {
  return new Proxy([], {
    get(_, prop) {
      if (typeof prop === "string" && !Number.isNaN(+prop)) {
        return decorator(locator.nth(+prop));
      }

      if (prop === Symbol.asyncIterator) {
        return async function* () {
          let index = 0;

          while (true) {
            const element = locator.nth(index++);
            const exists = await element.count();

            if (!exists) {
              break;
            }

            yield decorator(element);
          }
        };
      }

      /* eslint-disable */
      const result = Reflect.get(locator, prop, locator);
      return typeof result === "function" ? result.bind(locator) : result;
    },
  }) as unknown as Components<T>;
}
