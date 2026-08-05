import { render, screen } from "@testing-library/react";
import { COMPANY } from "@/constants/company";
import Footer from "./Footer";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Footer", () => {
  it("メールリンクのhrefがmailto形式である", () => {
    render(<Footer page="lp" />);

    const link = screen.getByText("メールで問い合わせる").closest("a");

    expect(link).toHaveAttribute("href", `mailto:${COMPANY.email}`);
  });

  it("プライバシーポリシーへのリンクがある", () => {
    const { container } = render(<Footer page="lp" />);

    expect(container.querySelector('a[href="/privacy"]')).toBeInTheDocument();
  });

  it("採用ページの主要メニューとCTAを表示する", () => {
    render(<Footer page="recruit" />);

    expect(screen.getByText("入社後の2つの約束")).toHaveAttribute("href", "#promise");
    expect(screen.getByText("代表より")).toHaveAttribute("href", "#message");
    expect(screen.getByText("今すぐ応募")).toHaveAttribute("href", "#apply");
  });
});
