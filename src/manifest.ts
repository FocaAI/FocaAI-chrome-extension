import pkg from "../package.json";

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
};

export function getManifest(): chrome.runtime.ManifestV3 {
  return {
    author: pkg.author.name,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
    manifest_version: 3,
    ...manifest,
  };
}