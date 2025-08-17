import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const alt = "www.ezequiaslopes.com";
export const size = {
  width: 1200,
  height: 570,
};

type ThumnailProps = {
  title?: string;
  description?: string;
  route?: string[];
};

export default async function ProjectThumbnail(props: ThumnailProps) {
  const robotoBlack = await readFile(join(".", "fonts", "Roboto-Black.ttf"));
  const robotoRegular = await readFile(
    join(".", "fonts", "Roboto-Regular.ttf")
  );
  const robotoLight = await readFile(join(".", "fonts", "Roboto-Light.ttf"));

  return new ImageResponse(
    (
      <div tw="bg-black text-white w-full h-full font-bold flex flex-col justify-between border-[10px] rounded border-amber-300 px-20 py-10">
        <span tw="w-full h-full flex flex-col justify-center items-center text-center">
          <span tw="text-amber-300 text-[100px]">{props.title}</span>
        </span>
      </div>
    ),
    {
      ...size,
      statusText: "OK",
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": "image/png",
      },
      fonts: [
        {
          name: "Roboto",
          data: robotoBlack,
          style: "normal",
          weight: 900,
        },
        {
          name: "Roboto",
          data: robotoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: robotoLight,
          style: "normal",
          weight: 300,
        },
      ],
    }
  );
}
