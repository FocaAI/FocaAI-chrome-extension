
declare namespace chrome {
  interface AILanguageModelFactory {
    create(options?: AILanguageModelCreateOptions): Promise<AILanguageModel>;
    capabilities(): Promise<AILanguageModelCapabilities>;
  }

  interface AILanguageModel extends EventTarget {
    prompt(input: AILanguageModelPromptInput, options?: AILanguageModelPromptOptions): Promise<string>;
    promptStreaming(input: AILanguageModelPromptInput, options?: AILanguageModelPromptOptions): ReadableStream;

    countPromptTokens(input: AILanguageModelPromptInput, options?: AILanguageModelPromptOptions): Promise<number>;
    readonly maxTokens: number;
    readonly tokensSoFar: number;
    readonly tokensLeft: number;

    readonly topK: number;
    readonly temperature: number;

    oncontextoverflow: EventHandler;

    clone(options?: AILanguageModelCloneOptions): Promise<AILanguageModel>;
    destroy(): void;
  }

  interface AILanguageModelCapabilities {
    readonly available: AICapabilityAvailability;
    languageAvailable(languageTag: string): AICapabilityAvailability;

    readonly defaultTopK?: number;
    readonly maxTopK?: number;
    readonly defaultTemperature?: number;
    readonly maxTemperature?: number;
  }

  interface AILanguageModelCreateOptions {
    signal: AbortSignal;
    monitor: AICreateMonitorCallback;

    systemPrompt: string;
    initialPrompts: AILanguageModelInitialPrompt[];
    topK: number;
    temperature: number;
  }

  interface AILanguageModelInitialPrompt {
    role: AILanguageModelInitialPromptRole;
    content: string;
  }

  interface AILanguageModelPrompt {
    role: AILanguageModelPromptRole;
    content: string;
  }

  interface AILanguageModelPromptOptions {
    signal: AbortSignal;
  }

  interface AILanguageModelCloneOptions {
    signal: AbortSignal;
  }

  type AILanguageModelPromptInput = string | AILanguageModelPrompt | AILanguageModelPrompt[];

  type AICapabilityAvailability = 'readily' | 'after-download' | 'no';

  type AICreateMonitorCallback = (m: EventTarget) => void;

  type AILanguageModelInitialPromptRole = 'system' | 'user' | 'assistant';
  type AILanguageModelPromptRole = 'user' | 'assistant';
  interface AiOriginTrial {
    languageModel: {
      capabilities: () => Promise<AILanguageModelCapabilities>;
      create: (options: { monitor: AICreateMonitorCallback }) => Promise<AILanguageModel>;
    }
  }
  const aiOriginTrial: AiOriginTrial | undefined;
}
