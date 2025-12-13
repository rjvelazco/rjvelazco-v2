import { LinkInline } from "@components/ui/link-inline";
import type { WorkTimelineItem } from "@data/portfolio";


export const WorkTimeline = ({ workTimeline }: { workTimeline: WorkTimelineItem[] }) => {
  return (
    <ol className="relative mt-16">
      {workTimeline.map((workTimeline, index) => (
        <li key={index}><WorkTimelineEntry {...workTimeline} /></li>
      ))}
    </ol>
  );
};

const WorkTimelineEntry = ({ title, company, date, description, link, linkText }: WorkTimelineItem) => {
    return (
        <div
        className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
      >
        <div className="relative pb-12 md:col-span-2">
          <div>
            <span className="text-petrol -left-[42.5px] absolute rounded-full text-5xl">&bull;</span>
            <h3 className="text-xl font-semibold text-petrol-light">{title}</h3>
            <h4 className="font-semibold text-xl">{company}</h4>
            <time className="p-0 m-0 text-sm text-gray-500">{date}</time>
          </div>
        </div>
        <div className="relative flex flex-col gap-2 pb-4 md:col-span-3">
          {description}
          {
            link && (
              <LinkInline href={link}>
                {linkText}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </>
                </svg>
              </LinkInline>
            )
          }
        </div>
      </div>
    )
};
