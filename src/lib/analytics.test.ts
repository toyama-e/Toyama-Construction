import { beforeEach, describe, expect, it, vi } from "vitest";
import { trackLinkClick } from "@/lib/analytics";

function createLink(href: string, text: string) {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  return link;
}

describe("trackLinkClick", () => {
  const gtag = vi.fn();

  beforeEach(() => {
    gtag.mockClear();
    window.gtag = gtag;
    window.history.replaceState({}, "", "/");
  });

  it.each([
    ["https://lin.ee/WdKxxdx", "LINE通話", "line_call_click"],
    ["https://lin.ee/svXKisk", "LINEチャット", "line_chat_click"],
    ["mailto:test@example.com", "メール", "email_click"],
    ["/recruit", "採用情報を見る", "recruit_page_click"],
  ])("%s のクリックを送信する", (href, text, eventName) => {
    trackLinkClick(createLink(href, text));

    expect(gtag).toHaveBeenCalledWith("event", eventName, {
      page: "contact",
      link_text: text,
    });
  });

  it("採用ページの応募CTAクリックを送信する", () => {
    window.history.replaceState({}, "", "/recruit");

    trackLinkClick(createLink("#apply", "LINEで応募・相談する"));

    expect(gtag).toHaveBeenCalledWith("event", "recruit_apply_click", {
      page: "recruit",
      link_text: "LINEで応募・相談する",
    });
  });
});
