"use client";

import { useEffect } from "react";

const EMBED_SCRIPT_ID = "strohm-form-contact-2-script";

export function StrohmFormEmbed() {
  useEffect(() => {
    if (document.getElementById(EMBED_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = EMBED_SCRIPT_ID;
    script.src = "http://43.166.202.83:8000/embed.js";
    script.async = true;
    script.dataset.strohmForm = "contact-2";
    script.dataset.strohmKey = "vh99vID0bumjODAgfvHNJ_SVeiGUFNrB";
    script.dataset.strohmMode = "inline";
    document.body.appendChild(script);

    return () => {
      document.getElementById(EMBED_SCRIPT_ID)?.remove();
    };
  }, []);

  return <div id="strohm-form-contact-2" />;
}