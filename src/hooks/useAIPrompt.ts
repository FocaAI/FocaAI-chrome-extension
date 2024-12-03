import React from "react";

const useAIPrompt = () => {
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
      // toast.error('Seu navegador não suporta a API de Prompt de IA');  
      return;
    }
    const defaults = await chrome.aiOriginTrial!.languageModel.capabilities(); // If aiOriginTrial is in chrome, it's safe to assume that languageModel is also available
    console.log(defaults);
    if (defaults.available !== 'readily') { // available: 'readily' | 'trialing' | 'none' 
      // toast.error('O modelo ainda não foi carregado completamente');
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
        console.log('teste')
        setProgress((e as ProgressEvent).loaded / (e as ProgressEvent).total);
      })
    }

    const createSession = async () => {
      initDefaults();
      if (!('aiOriginTrial' in chrome)) {
        // Deve criar um toast para informar o usuário que a API não está disponível
        // toast.error('Seu navegador não suporta a API de Prompt de IA');
        setSession(null);
        return;
      }
      const session = await chrome.aiOriginTrial!.languageModel.create({
        monitor,
      });
      setSession(session);
    };

    createSession();
  }, [])
  return { initDefaults, session, progress };
}
export default useAIPrompt;