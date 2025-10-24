import React, { useEffect } from "react";

declare global {
  interface Window {
    CreateWhatsappBtn?: (opts: any) => void;
  }
}

const scriptUrl = "https://cdn.waplus.io/waplus-crm/settings/ossembed.js";

const defaultOptions = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#16BE45",
    ctaText: "كلمنا واتس",
    borderRadius: "8",
    marginLeft: "20",
    marginBottom: "20",
    marginRight: "20",
    position: "right",
    textColor: "#ffffff",
    phoneNumber: "966542668201",
    messageText: "",
    trackClick: true,
  },
};

const WhatsappButton: React.FC<{ options?: any }> = ({ options }) => {
  useEffect(() => {
    const opts = options || defaultOptions;
    if (!opts.enabled) return;

    // If the global initializer already exists, call it immediately
    if ((window as any).CreateWhatsappBtn) {
      window.CreateWhatsappBtn?.(opts);
      return;
    }

    // Avoid injecting the script multiple times
    const existing = document.querySelector('script[data-waplus]');
    if (existing) {
      existing.addEventListener("load", () => {
        window.CreateWhatsappBtn?.(opts);
      });
      return;
    }

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = scriptUrl;
    s.setAttribute("data-waplus", "true");
    s.onload = () => {
      try {
        window.CreateWhatsappBtn?.(opts);
      } catch (e) {
        // swallow errors from third-party script
        // eslint-disable-next-line no-console
        console.error("CreateWhatsappBtn call failed:", e);
      }
    };

    const first = document.getElementsByTagName("script")[0];
    first.parentNode && first.parentNode.insertBefore(s, first);

    // We intentionally don't remove the script on cleanup because it's global and may
    // be used across route changes. If you want to remove it on unmount, implement
    // cleanup here.
  }, [options]);

  return null;
};

export default WhatsappButton;
