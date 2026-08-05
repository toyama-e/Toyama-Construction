import Image from "next/image";

export default function Message() {
  return (
    <section id="message" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          From the President
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">代表より</h2>

        <div className="mt-8 border-y border-bronze/60 bg-white px-5 py-7 md:mt-12 md:px-8 md:py-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex-shrink-0">
              <div className="relative h-44 w-44 overflow-hidden md:h-56 md:w-56">
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
                うちに来る人に、特別なスキルは求めていません。現場をやってみたい。手に職をつけたい。地元で働きたい。それだけで十分です。あとは一緒に育てていきます。
              </blockquote>
              <p className="mt-3 text-base leading-loose text-black md:text-lg">
                小さい会社だからこそ、一人ひとりをちゃんと見られる。それがうちの強みです。
              </p>
              <p className="mt-6 text-sm font-medium text-black">代表　外山 澄男</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
