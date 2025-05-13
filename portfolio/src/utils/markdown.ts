import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "src/content/notes");

export function getAllNotes() {
  const fileNames = fs.readdirSync(notesDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(notesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""),
      ...data,
      content,
    };
  });
}

export async function getNoteBySlug(slug: string) {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    ...data,
    content: processedContent.toString(),
  };
}