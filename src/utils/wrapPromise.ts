import { SandboxFile } from "./memoizePrompt";

export function wrapPromise(promise: Promise<SandboxFile>) {
  let status: "pending" | "success" | "error" = "pending";
  let response: SandboxFile;
  const suspender = promise.then(
    res => {
      status = "success";
      response = res
    },
    err => {
      status = "error";
      response = err
    }
  )
  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => { throw response },
    success: () => response
  }
  return () => handler[status]?.() ?? response
}
