import { Progress } from "@/components/ui/progress";
import useAIPrompt from "@/hooks/useAIPrompt";
import '../../index.css'; // 👈 A CSS file containing `@tailwind` directives
import cuteLogo from '/icons/192.png';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  SandpackTests,
  UnstyledOpenInCodeSandboxButton
} from "@codesandbox/sandpack-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { extractMarkdownCodeBlocks } from "@/utils";

function App() {
  const { progress, session } = useAIPrompt()
  const abortPrompt = new AbortController()
  const [thinking, setThinking] = React.useState(false)
  const [extendedTest, setExtendedTest] = React.useState<{ language: string, code: string }[]>([])
  const promptInput = `
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
  `
  /**
   * @todo use the toast for errors
   */
  const makeTest = async () => {
    try {
      setThinking(true)
      if (!session) {
        // toast.error('Nenhuma sessão ativa')
        return
      }
      const result = await session.prompt(promptInput, {
        signal: abortPrompt.signal
      })
      const code = extractMarkdownCodeBlocks(result)
      if (code.length === 0) {
        // toast.error('Nenhum código retornado')
        return
      }
      setExtendedTest(code)
      setThinking(false)
    } catch (e) {
      console.error(e)
      // toast.error('Erro ao criar teste')
      const a = 'asasd'
      a.substring(1, a.length - 1)
    }
  }
  return (

    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <img src={cuteLogo} alt="a cute logo" />
      {progress < 100 ? (
        <>
          <p>Carregando inteligência suprema</p>
        </>
      ) : (
        <>
          <Button onClick={() => {
            makeTest()
          }}>
            Bora começar
          </Button>
          <Button variant={'destructive'} onClick={() => {
            abortPrompt.abort()
          }}>
            Cancelar
          </Button>
        </>
      )}
      <Progress value={progress} className="w-[60%]" />
      {!thinking ? (
        extendedTest.length > 0 ? (
          <SandpackProvider
            files={
              {
                [`/extended.test.ts`]: {
                  code: extendedTest[0].code,
                  hidden: true,
                  readOnly: true
                },
                '/challenge.ts': {
                  code: `export const challenge = (): any => {}`,
                  active: true,
                }
              }
            }
            options={{
              activeFile: '/challenge.ts',
              visibleFiles: ['/challenge.ts'],
            }}
            customSetup={{ dependencies: { "jest-extended": "^3.0.2" } }}
            template="test-ts"
            theme={'dark'}>
            <SandpackLayout >
              <SandpackFileExplorer />
              <SandpackCodeEditor showTabs showLineNumbers wrapContent closableTabs showInlineErrors />
              <SandpackTests />
              <SandpackPreview />
            </SandpackLayout>
            <UnstyledOpenInCodeSandboxButton >
              <div className="bg-slate-600 text-zinc-300 rounded-sm py-2 px-4">
                <p> Open on Sandbox</p>
              </div>
            </UnstyledOpenInCodeSandboxButton>
          </SandpackProvider>) : (
          <p>Teste não gerado</p>
        )
      ) : (
        <p>Thinking...</p>
      )
      }
    </main >
  );
}

export default App;
