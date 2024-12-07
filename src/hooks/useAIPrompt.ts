import React from "react";
import { useToast } from "./use-toast";
import { notifyActiveTab } from "@/utils";

const useAIPrompt = () => {
  const { toast } = useToast();
  /**
   * 
   * @todo :br: Internacionalizar as mensagens de erro 
   * @todo :br Implementar o toast do shadcnui
   * @todo :us: Internationalize error messages
   * @todo :us: Implement toast from shadcnui
   */
  async function initDefaults() {
    if (!('aiOriginTrial' in chrome)) {
      // Deve criar um toast para informar o usuário que a API não está disponível
      toast({
        title: 'Chrome API not available',
        description: 'Your browser does not support the AI Prompt API',
        variant: 'destructive'
      });
      return;
    }
    const defaults = await chrome.aiOriginTrial!.languageModel.capabilities(); // If aiOriginTrial is in chrome, it's safe to assume that languageModel is also available
    if (defaults.available !== 'readily') { // available: 'readily' | 'trialing' | 'none' 
      toast({
        title: 'AI Prompt not available',
        description: 'The AI Prompt API is not loaded yet',

      })
      return;
    }
    if (defaults.available === 'readily') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
    // this must provide a initial configuration to the model. For now it's just a verification of the model's capabilities
  }
  const [progress, setProgress] = React.useState<number>(0);
  const [session, setSession] = React.useState<chrome.AILanguageModel | null>(null);
  React.useEffect(() => {
    const monitor: chrome.AICreateMonitorCallback = (progress) => {
      progress.addEventListener('downloadprogress', (e) => {
        setProgress((e as ProgressEvent).loaded / (e as ProgressEvent).total);
      })
    }

    const createSession = async () => {
      initDefaults();
      if (!('aiOriginTrial' in chrome)) {
        // Deve criar um toast para informar o usuário que a API não está disponível
        toast({
          title: 'Chrome API not available',
          description: 'Your browser does not support the AI Prompt API',
          variant: 'destructive'
        })
        setSession(null);
        return;
      }
      const session = await chrome.aiOriginTrial!.languageModel.create({
        monitor,
      });
      setSession(session);
      toast({
        title: 'AI Prompt session created',
        description: 'The AI Prompt session was created successfully',
      })
      notifyActiveTab({
        title: 'AI Prompt session created',
        description: 'The AI Prompt session was created successfully',
      })
    };

    createSession();
  }, [])
  return { initDefaults, session, progress };
}
export default useAIPrompt;