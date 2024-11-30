import pkg from "../package.json";
type ManifestWithSidePanel = chrome.runtime.ManifestV3 & { side_panel: { default_path: string } };
export function getManifest(env: Record<string, string>): ManifestWithSidePanel {
  const manifest = {
    action: {
      default_icon: {
        36: "icons/36.png",
        48: "icons/48.png",
        72: "icons/72.png",
        96: "icons/96.png",
        144: "icons/144.png",
        192: "icons/192.png",
        512: "icons/512.png",
      },
      default_popup: "src/entries/popup/index.html",
    },
    background: {
      service_worker: "src/entries/background/main.ts",
    },
    side_panel: {
      default_path: "src/entries/sidebar/index.html",
    },
    content_scripts: [
      {
        js: ["src/entries/contentScript/primary/main.tsx"],
        matches: ["*://*/*"],
      },
    ],
    host_permissions: ["*://*/*"],
    icons: {
      36: "icons/36.png",
      48: "icons/48.png",
      72: "icons/72.png",
      96: "icons/96.png",
      144: "icons/144.png",
      192: "icons/192.png",
      512: "icons/512.png",
    },
    options_ui: {
      page: "src/entries/options/index.html",
      open_in_tab: true,
    },
    trial_tokens: [env.VITE_SUMMARIZATION_API_URL || ""]
  };
  return {
    author: pkg.author.name,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 3,
    permissions: ["contextMenus", "sidePanel"],
    ...manifest,
  };
}