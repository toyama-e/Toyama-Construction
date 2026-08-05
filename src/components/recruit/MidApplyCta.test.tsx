import { render, screen } from "@testing-library/react";
import MidApplyCta from "./MidApplyCta";

describe("MidApplyCta", () => {
  it("ページ末尾の応募方法へ移動するリンクを表示する", () => {
    render(<MidApplyCta />);

    expect(screen.getByRole("link", { name: /LINEで応募・相談する/ })).toHaveAttribute(
      "href",
      "#apply"
    );
  });
});
