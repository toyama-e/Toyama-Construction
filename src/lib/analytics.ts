type EventName =
  | "line_call_click"
  | "line_chat_click"
  | "email_click"
  | "recruit_page_click"
  | "recruit_apply_click";

type EventParameters = Record<string, string>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: EventName, parameters?: EventParameters) => void;
  }
}

function trackEvent(eventName: EventName, parameters?: EventParameters) {
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] event", { eventName, parameters });
  }

  window.gtag?.("event", eventName, parameters);
}

export function trackLinkClick(link: HTMLAnchorElement) {
  const href = link.getAttribute("href");
  if (!href) return;

  const page = window.location.pathname.startsWith("/recruit") ? "recruit" : "contact";
  const linkText = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) ?? "";
  const parameters = { page, link_text: linkText };

  if (href.includes("lin.ee/WdKxxdx")) {
    trackEvent("line_call_click", parameters);
  } else if (href.includes("lin.ee/svXKisk")) {
    trackEvent("line_chat_click", parameters);
  } else if (href.startsWith("mailto:")) {
    trackEvent("email_click", parameters);
  } else if (href === "/recruit" && page !== "recruit") {
    trackEvent("recruit_page_click", parameters);
  } else if (href === "#apply" && page === "recruit") {
    trackEvent("recruit_apply_click", parameters);
  }
}
