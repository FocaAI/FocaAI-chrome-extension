function extractMarkdownCodeBlocks(text: string) {
  const codeBlockRegex = /```([a-zA-Z]*)?\n([\s\S]*?)```/g;
  const codeBlocks: { language: string; code: string }[] = [];
  let match;
  while ((match = codeBlockRegex.exec(text)) !== null) {
    codeBlocks.push({
      language: match[1] || 'plaintext',
      code: match[2].trim(),
    });
  }
  return codeBlocks;
}
export { extractMarkdownCodeBlocks };