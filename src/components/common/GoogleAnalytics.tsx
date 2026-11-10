"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackLinkClick } from "@/lib/analytics";

type Props = {
  measurementId?: string;
};

export default function GoogleAnalytics({ measurementId }: Props) {
  useEffect(() => {
    if (!measurementId) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (link) trackLinkClick(link);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [measurementId]);

  if (!measurementId) return null;

  return (
    <Script
      id="google-analytics"
      src="/analytics-init.js"
      data-measurement-id={measurementId}
      strategy="afterInteractive"
    />
  );
}
