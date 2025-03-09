// https://porfolio.dev/
// Onest Variable
export default function Home() {
  return (
    <div className="bg-background mx-auto font-sans flex flex-col gap-12 px-4 py-8 md:py-12">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">
          Latest Blog Posts
        </h1>
        <div className="featured_cards">
          <div className="featured_cards_item_large">
            <a className="bg-petrol-lighter rounded-3xl relative flex clamp-item-large px-[20px] py-[16px] cursor-pointer">
              <img
                src="/assets/align-bottom.svg"
                alt="placeholder"
                className="absolute center-absolute-x w-[180px]"
              />
              <div className="self-end">
                <span className="text-slate-900">Next.js</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1">
                  How I built my own website
                </h4>
              </div>
            </a>
          </div>
          {/* <div className="featured_cards_item_small">2</div> */}
        </div>
        <div className="featured_cards">
          <div className="featured_cards_item">
            <a className="bg-amber-lighter rounded-3xl relative flex clamp-item-large px-[20px] py-[16px] cursor-pointer">
              <img
                src="/assets/align-bottom.svg"
                alt="placeholder"
                className="absolute center-absolute-x w-[180px]"
              />
              <div className="self-end">
                <span className="text-slate-900">Next.js</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1">
                  How I built my own website
                </h4>
              </div>
            </a>
          </div>
          <div className="featured_cards_item">
            <a className="bg-petrol-lighter rounded-3xl relative flex clamp-item-large px-[20px] py-[16px] cursor-pointer">
              <img
                src="/assets/align-bottom.svg"
                alt="placeholder"
                className="absolute center-absolute-x w-[180px]"
              />
              <div className="self-end">
                <span className="text-slate-900">Next.js</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1">
                  How I built my own website
                </h4>
              </div>
            </a>
          </div>
          {/* <div className="featured_cards_item_small">2</div> */}
        </div>
      </section>
      <section className="flex justify-between items-start space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Topics I've written about
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/topics/nextjs"
              className="border border-amber-light rounded-3xl p-2 px-8 shadow-sm"
            >
              JavaScript
            </a>
            <a
              href="/topics/nextjs"
              className="border border-petrol-dark rounded-3xl p-2 px-8 shadow-sm"
            >
              Angular
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-amber-light shadow-sm p-8 w-[400px]">
          <h2 className="text-xl font-bold mb-4">Get in touch</h2>
          <div>
            <a
              href="mailto:rjvelazco21@gmail.com"
              className="text-gray-700 cursor-pointer"
            >
              E-mail: rjvelazco21@gmail.com
            </a>
          </div>
          <br />
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/rjvelazco21/">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/rjvelazco21/">
              <img src="/assets/github.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
