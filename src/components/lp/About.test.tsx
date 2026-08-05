import { render, screen } from "@testing-library/react";
import About from "./About";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("About", () => {
  it("埋め込み地図をフォーカス順から外し、Googleマップへのリンクを表示する", () => {
    render(<About />);

    expect(screen.getByTitle("株式会社 外山建設 地図")).toHaveAttribute("tabindex", "-1");
    expect(screen.getByRole("link", { name: /Googleマップで開く/ })).toHaveAttribute(
      "href",
      expect.stringContaining("https://www.google.com/maps/search/")
    );
  });
});
