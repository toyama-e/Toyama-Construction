import { render, screen } from "@testing-library/react";
import Apply from "./Apply";
import { COMPANY } from "@/constants/company";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Apply", () => {
  beforeEach(() => {
    render(<Apply />);
  });

  it("LINE通話リンクに外部リンク設定がある", () => {
    const link = screen.getByText("LINE通話をかける").closest("a");

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("友だち追加リンクに外部リンク設定がある", () => {
    const link = screen.getByText("友だち追加").closest("a");

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("メールリンクがmailto形式である", () => {
    const link = screen.getByText("メールを送る").closest("a");

    expect(link).toHaveAttribute("href", `mailto:${COMPANY.email}`);
  });
});
