import { render, screen } from "@testing-library/react";
import { COMPANY } from "@/constants/company";
import Footer from "./Footer";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Footer", () => {
  it("会社ロゴを重複するリンクにしない", () => {
    render(<Footer page="lp" />);

    expect(screen.getByRole("img", { name: COMPANY.name }).closest("a")).toBeNull();
  });

  it("メールリンクのhrefがmailto形式である", () => {
    render(<Footer page="lp" />);

    const link = screen.getByText("メールで問い合わせる").closest("a");

    expect(link).toHaveAttribute("href", `mailto:${COMPANY.email}`);
  });

  it("採用ページでは応募欄と重複するメールリンクを表示しない", () => {
    render(<Footer page="recruit" />);

    expect(screen.queryByText("メールで問い合わせる")).not.toBeInTheDocument();
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

  it("プライバシーページでは採用情報をCTAとして表示する", () => {
    render(<Footer page="privacy" />);

    const link = screen.getByText("採用情報を見る");

    expect(link).toHaveAttribute("href", "/recruit");
    expect(link).toHaveClass("bg-navy", "rounded-full", "mx-auto", "md:mx-auto");
    expect(link).not.toHaveClass("md:mx-0");
    expect(screen.queryByText("採用情報")).not.toBeInTheDocument();
  });
});
