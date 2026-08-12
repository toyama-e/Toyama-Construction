import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { OGP_IMAGE_URL, SITE_URL } from "./site";

describe("本番サイトURL", () => {
  it("正式ドメインを唯一の基本URLとして使用する", () => {
    expect(SITE_URL).toBe("https://toyama-kensetsu.com");
    expect(OGP_IMAGE_URL).toBe("https://toyama-kensetsu.com/images/og-image.jpg");
  });

  it("sitemapに公開中の4ページを正式URLで掲載する", () => {
    expect(sitemap().map(({ url }) => url)).toEqual([
      "https://toyama-kensetsu.com",
      "https://toyama-kensetsu.com/company",
      "https://toyama-kensetsu.com/recruit",
      "https://toyama-kensetsu.com/privacy",
    ]);
  });

  it("robotsから正式URLのsitemapを案内する", () => {
    expect(robots().sitemap).toBe("https://toyama-kensetsu.com/sitemap.xml");
  });
});
