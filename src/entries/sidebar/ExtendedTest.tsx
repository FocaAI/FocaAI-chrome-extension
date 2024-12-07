import { extractMarkdownCodeBlocks, SandboxFile, memoizePrompt, wrapPromise } from "@/utils";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackTests,
  UnstyledOpenInCodeSandboxButton
} from "@codesandbox/sandpack-react";

import { ErrorBoundary } from "react-error-boundary";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { Skeleton } from "@/components/ui/skeleton";
const fetchCodeFromPrompt = memoizePrompt(
  ({ promptInput, session, abortController }): () => SandboxFile =>
    wrapPromise(new Promise((resolve, reject) => {
      if (!session) {
        return reject('No active session')
      }
      console.log(session.tokensLeft)
      session.prompt(promptInput, { signal: abortController.signal }).then((result) => {
        const code = extractMarkdownCodeBlocks(result)
        if (code.length === 0) {
          return reject('No code returned')
        }
        console.log(code)
        return resolve(
          {
            code: code[0]?.code,
            hidden: true,
            readOnly: true
          },
        )
      }).catch(error => {
        reject(error)
      })
    }))
)

const ExtendedTest = (
  { session, abortController }: { session: chrome.AILanguageModel | null, abortController: AbortController }
) => {
  const prompt = `
  You are a test creator for programming and your goal is to make developers lives easier.
  To do this, you need to create a unit test that validates the challenge function.
  The challenge function is a problem related to algorithms and programming logic.
  The challenge function should be part of a course that teaches programming.
  the course is about structured programming and algorithms.
  You can choose any topic about structured programming and algorithms.
  The challenge must consider the user level from 1 to 10, where 1 is the lowest level and 10 is the highest level.
  You should use the Jest testing framework to create this test.
  The challenge function is already implemented in the ./challenge.ts file.
  The challenge function is designed by you and you must create a test that validates the challenge function.
  You should return only the test code.
  You should provide descriptive test names and comments if necessary.
  ` ;
  const getPrompt = fetchCodeFromPrompt({ promptInput: prompt, session, abortController })
  return (
    <ErrorBoundary fallback={<p>something went wrong</p>}>

      <SandpackProvider
        files={{
          [`/extended.test.ts`]: getPrompt(),
          '/challenge.ts': {
            code: `export const challenge = (): any => {}`,
            active: true,
          }
        }}
        options={{
          activeFile: '/challenge.ts',
          visibleFiles: ['/challenge.ts'],
        }}
        customSetup={{
          dependencies: { "jest-extended": "^3.0.2" },
          entry: '/challenge.ts',
        }}
        template="test-ts"
        theme={'dark'}>
        <SandpackLayout >
          <SandpackFileExplorer />
          <SandpackCodeEditor
            showTabs
            showLineNumbers
            wrapContent
            closableTabs
            showInlineErrors
            extensions={
              [autocompletion()]
            }
            extensionsKeymap={[...completionKeymap]}
          />
          <SandpackTests onComplete={
            (results) => {
              console.log(results)
            }
          } />
        </SandpackLayout>
        <UnstyledOpenInCodeSandboxButton>
          <div className="fx-bg-slate-600 fx-text-zinc-300 fx-rounded-sm fx-py-2 fx-px-4">
            <p> Open on Sandbox</p>
          </div>
        </UnstyledOpenInCodeSandboxButton>
      </SandpackProvider>
    </ErrorBoundary>
  );
}
export const ExtendedTestSkeleton = () => {
  return (
    <div className="fx-flex fx-flex-col fx-space-y-4">
      <Skeleton className="fx-h-[302px] fx-w-[911px] fx-rounded-xl" />
      <div className="fx-space-y-2">
        <Skeleton className="fx-h-8 fx-w-1/4" />
      </div>
    </div>
  )
}
export default ExtendedTest;