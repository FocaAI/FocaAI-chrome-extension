import { ReactNode } from "react"
export type ToastMessage = {
  title: string,
  description: string,
  variant?: 'default' | 'destructive',
  action?: ReactNode
}
export const notifyActiveTab = async (message: ToastMessage) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id!, { type: "TOAST", message }, function (response) {
      console.log(response)
    })
  })
}