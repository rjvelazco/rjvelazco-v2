import { ContentPlaceholder } from "@components/ui/content-placeholder";

export default function Logs() {
  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12 px-4 sm:px-6 py-8 md:py-12">
      <ContentPlaceholder type="logs" />
    </div>
  );
}
