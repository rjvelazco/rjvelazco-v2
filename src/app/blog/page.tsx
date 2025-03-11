import { EmptyListMessage } from "@components/EmptyListMessage";

export default function Blog() {

  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12 px-4 sm:px-6 py-8 md:py-12">
      <EmptyListMessage type="posts" />
    </div>
  );
}

