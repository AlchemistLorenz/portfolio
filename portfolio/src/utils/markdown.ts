import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Removed notesDirectory as the notes directory is no longer present

export function getAllNotes() {
  // Return an empty array as there are no notes to process
  return [];
}

export async function getNoteBySlug(slug: string) {
  // Throw an error as there are no notes to fetch
  throw new Error("Notes directory is missing. Cannot fetch note by slug.");
}