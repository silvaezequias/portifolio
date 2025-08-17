import ProjectThumbnail from "@/components/thumbnail/project";

import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const alt = "www.ezequiaslopes.com";
export const size = {
  width: 1200,
  height: 570,
};

export async function GET(
  req: Request,
  context: { params: { project: string } }
) {
  const projectName = context.params.project;

  return ProjectThumbnail({
    title: projectName,
  });
}
