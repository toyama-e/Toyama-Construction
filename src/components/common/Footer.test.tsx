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
});
