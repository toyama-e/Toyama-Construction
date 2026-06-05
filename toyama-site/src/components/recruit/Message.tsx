import Image from "next/image";

export default function Message() {
  return (
    <section className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          From the President
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">代表より</h2>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gray-100 px-8 py-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gold/40">
                <Image
                  src="/images/jiji&kento.jpeg"
                  alt="代表 外山 澄男"
                  fill
                  sizes="192px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1">
              <blockquote className="text-base leading-loose text-black md:text-lg">
                うちに来る人に、特別なスキルは求めていません。
                <br />
                現場をやってみたい、手に職をつけたい、地元で働きたい。
                <br />
                それだけで十分です。あとは一緒に育てていきます。
              </blockquote>
              <p className="mt-3 text-sm leading-relaxed text-black">
                小さい会社だからこそ、一人ひとりをちゃんと見られる。それがうちの強みだと思っています。
              </p>
              <p className="mt-6 text-sm font-medium text-black">代表　外山 澄男</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
