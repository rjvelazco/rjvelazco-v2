import Link from "next/link";

const items = [
  {
    title: "The Post-Developer Era",
    description:
      "When OpenAI released GPT-4 back in March 2023, they kickstarted the AI revolution. The consensus online was that front-end development jobs would likely vanish. I had been working in the field for close to four years since then, and I thought it was worth revisiting some of those early predictions, and seeing if we can glean where things are headed.",
  },
  {
    title: "A Million Little Secrets",
    subtitle:
      "I spent the past few weeks packing as many easter eggs as I could into my latest side project. In this blog post, I want to dig into some of the more interesting details! If you're interested in animational interactions, you'll want to check this out. I have a bunch of animation secrets and tips!",
    description:
      "I spent the past few weeks packing as many easter eggs as I could into my latest side project. In this blog post, I want to dig into some of the more interesting details! If you're interested in animational interactions, you'll want to check this out. I have a bunch of animation secrets and tips!",
  },
  {
    title: "Container Queries Unleashed",
    subtitle:
      "Container queries expand the universe of designs that can be implemented, giving us much more control. Now that container queries are broadly available, I think it's time we start exploring this potential! In this post, I'll share some container queries I can't stop using in my work, and explore what's possible with them.",
    description:
      "Container queries expand the universe of designs that can be implemented, giving us much more control. Now that container queries are broadly available, I think it's time we start exploring this potential! In this post, I'll share some container queries I can't stop using in my work, and explore what's possible with them.",
  },
];

export default function Home() {
  return (
    <div className="bg-background mx-auto font-sans flex flex-col gap-12 px-4 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-petrol-light">
          ARTICLES AND TUTORIALS
        </h2>
      </div>

      <div className="flex gap-12">
        <section className="space-y-8">
          {items.map((item) => (
            <article className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${item.title}`}>
                <h3 className="text-xl font-bold mb-4 hover:underline decoration-petrol underline-offset-8">
                  {item.title}
                </h3>
              </Link>
              {item.subtitle && (
                <p className="mb-2">{item.subtitle}</p>
              )}
              <p className="mb-4">{item.description}</p>
              <Link href={`/blog/${item.title}`}>
                <span className="text-petrol-light font-medium hover:underline">
                  Read more
                </span>
              </Link>
            </article>
          ))}
        </section>

        <section className="gap-12 justify-between w-full">
          <div>
            <h2 className="text-xl font-semibold text-petrol mb-6">
              BROWSE BY CATEGORY
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="/category/angular"
                className="border border-gray-200 rounded-md px-3 py-1 text-sm hover:bg-gray-50 transition-colors"
              >
                Angular
              </a>
              <a
                href="/category/javascript"
                className="border border-gray-200 rounded-md px-3 py-1 text-sm hover:bg-gray-50 transition-colors"
              >
                JavaScript
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* 
      <section className="flex justify-between items-start space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Topics I&apos;ve written about
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
            <a href="https://www.linkedin.com/in/rafael-velazco/">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://github.com/rjvelazco">
              <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
