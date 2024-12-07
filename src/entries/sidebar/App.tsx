import { Progress } from "@/components/ui/progress";
import useAIPrompt from "@/hooks/useAIPrompt";
import '../../index.css'; // 👈 A CSS file containing `@tailwind` directives
import cuteLogo from '/icons/192.png';
import React from "react";
import ExtendedTest, { ExtendedTestSkeleton } from "./ExtendedTest";
import { Button } from "@/components/ui/button";

function App() {
  const { progress, session } = useAIPrompt()
  const abortPrompt = new AbortController();
  return (

    <main className=" fx-h-screen fx-w-screen fx-flex fx-flex-col fx-items-center fx-justify-center fx-gap-4">
      <img src={cuteLogo} alt="a cute logo" />
      {progress < 100 ? (
        <>
          <p>Carregando inteligência suprema</p>
        </>
      ) : (
        <>

          <Button variant={'destructive'} onClick={() => {
            abortPrompt.abort()
          }}>
            Cancelar
          </Button>
        </>
      )}
      <Progress value={progress} className="fx-w-[60%]" />
      {session && (
        <React.Suspense fallback={<ExtendedTestSkeleton />}>
          <ExtendedTest session={session} abortController={abortPrompt} />
        </React.Suspense>
      )}
    </main >
  );
}

export default App;
