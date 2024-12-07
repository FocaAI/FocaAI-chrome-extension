import React from "react";
import { useToast } from "./use-toast";
import { ToastMessage } from "@/utils";

const useMessages = () => {
  const { toast } = useToast();
  React.useEffect(() => {
    const listener = (message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
      if (message.type === 'TOAST') {
        const payload = message.message as ToastMessage
        toast({
          title: payload.title,
          description: payload.description,
          variant: payload.variant
        })
      }
    }
    chrome.runtime.onMessage.addListener(listener)
    return () => {
      chrome.runtime.onMessage.removeListener(listener)
    }
  }, [])
}
export default useMessages;