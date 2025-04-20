import { Dirent } from "fs";
import { readdir } from "fs/promises";

export const getPostPaths = async () => {
  const folders = await readdir('./src/app/(site)/blog/posts', { withFileTypes: true });
  const directories = folders.filter((dirent: Dirent) => dirent.isDirectory());

  return directories.map((dirent: Dirent) => ({
    params: { slug: dirent.name },
  }));
};
