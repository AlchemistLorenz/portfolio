import Link from "next/link";
import { getAllNotes } from "../../utils/markdown";

export default async function NotesPage() {
  const notes = getAllNotes();

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-[#985F99]">Digital Garden</h1>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.slug} className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
            <Link legacyBehavior href={`/notes/${note.slug}`}>
              <a className="text-xl font-semibold text-white hover:underline">{note.title || note.slug}</a>
            </Link>
            {note.description && <p className="text-gray-400 mt-2">{note.description}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
