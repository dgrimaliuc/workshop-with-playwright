type Result<T> = {
  success: true;
  value: T;
  result: boolean;
};

type ErrorResult = {
  success: false;
  error: Error;
  result: false;
};

type ExecutionResult<T> = Result<T> | ErrorResult;

export async function runCatching<T>(code: () => Promise<T>): Promise<ExecutionResult<T>> {
  try {
    const res = await code();
    return { success: true, value: res, result: true && (res as boolean) };
  } catch (error) {
    return { success: false, error, result: false };
  }
}

export async function waitForCondition(
  condition: () => Promise<boolean> | any,
  errorMessage: string = "Timeout waiting for condition",
  timeoutMS = 600,
  maxTimes = 10
) {
  while (!(await runCatching(condition)).result) {
    await sleep(timeoutMS);
    if (--maxTimes === 0) {
      throw new Error(errorMessage);
    }
  }
}

export async function sleep(n: number) {
  return new Promise(resolve => {
    setTimeout(resolve, n);
  });
}

export async function asyncArray<T>(iterator: AsyncIterable<T>) {
  const array: T[] = [];
  for await (const item of iterator as AsyncIterable<T>) {
    array.push(item);
  }
  return array;
}
