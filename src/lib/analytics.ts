type ConversionMethod = "line_call" | "line_add" | "email";
type ConversionPage = "contact" | "recruit";

export function trackConversion(method: ConversionMethod, page: ConversionPage) {
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] conversion", { method, page });
  }

  // GA4 (gtag) が追加された場合はここで送信
  // if (typeof window !== "undefined" && (window as any).gtag) {
  //   (window as any).gtag("event", "contact_click", { method, page });
  // }
}
