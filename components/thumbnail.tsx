import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export const alt = "www.ezequiaslopes.com";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ThumnailProps = {
  title?: string;
  description?: string;
  route?: string[];
};

export default async function Thumbnail(props: ThumnailProps) {
  const robotoBlack = await readFile(join(".", "fonts", "Roboto-Black.ttf"));
  const robotoRegular = await readFile(
    join(".", "fonts", "Roboto-Regular.ttf")
  );
  const robotoLight = await readFile(join(".", "fonts", "Roboto-Light.ttf"));

  return new ImageResponse(
    (
      <div tw="bg-black text-white w-full h-full font-bold flex flex-col justify-between border-[30px] border-amber-300 px-20 py-10">
        <span tw="w-full h-fit flex flex-col justify-center">
          <span tw="flex items-center justify-between border-b border-neutral-800">
            <span tw="text-amber-300 text-[130px]">EL</span>
            <span tw="text-white text-[70px]">
              {props.title || "Currículo"}
            </span>
          </span>
          <span tw="w-full flex flex-col justify-center pt-1 h-[190px] my-10">
            <span tw="text-white font-light text-7xl leading-1">
              {props.description || "Descubra o portfólio de Ezequias Lopes."}
            </span>
          </span>
        </span>
        <div tw="text-3xl font-normal w-full h-fit text-neutral-500 py-2">
          {["www.ezequiaslopes.com", props.route]
            .flat(Infinity)
            .filter((e) => e)
            .join("/")}
        </div>
      </div>
    ),
    {
      ...size,
      statusText: "OK",
      headers: { "Content-Type": contentType },
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
