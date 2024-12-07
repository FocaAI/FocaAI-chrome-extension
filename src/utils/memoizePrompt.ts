
export type SandboxFile = {
  code: string;
  hidden: boolean;
  readOnly: boolean;
}
export type promptProps = {
  promptInput: string;
  session: chrome.AILanguageModel | null;
  abortController: AbortController;
}
type GetPromptFn = ({ promptInput, session, abortController }: promptProps) => () => SandboxFile
export function memoizePrompt(fn: GetPromptFn) {
  const cache = new Map()
  return (...args: Parameters<GetPromptFn>): ReturnType<GetPromptFn> => {
    const key: string = JSON.stringify(args)
    if (!cache.has(key)) {
      cache.set(key, fn(...args))
    }
    return cache.get(key) as ReturnType<GetPromptFn>
  }
}