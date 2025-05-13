import { getNoteBySlug } from "../../../utils/markdown";

export default async function NotePage({ params }: { params: { slug: string } }) {
  const note = await getNoteBySlug(params.slug);

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#985F99]">{note.title || note.slug}</h1>
      <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: note.content }} />
    </main>
  );
}
