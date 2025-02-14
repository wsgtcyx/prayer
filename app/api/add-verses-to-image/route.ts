import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";

// 确保加载字体配置文件和字体文件的路径
const fontConfigPath = path.resolve(process.cwd(), "fonts", "fonts.conf");
const fontTtfPath = path.resolve(process.cwd(), "fonts", "NotoSansSC-VF.ttf");

// 加载字体文件并缓存为 Base64 格式
let cachedFontData: string | null = null;

async function getFontBase64(): Promise<string> {
  if (!cachedFontData) {
    const fontData = await fs.readFile(fontTtfPath);
    cachedFontData = fontData.toString("base64");
  }
  return cachedFontData;
}

function wrapText(text: string, maxWidth: number, fontSize: number): string[] {
  const charWidth = fontSize * 0.5; // 英文字符较窄，设置为0.5倍字体大小
  const maxCharsPerLine = Math.floor(maxWidth / charWidth);

  const lines: string[] = [];
  let currentLine = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (currentLine.length >= maxCharsPerLine || char === "\n") {
      lines.push(currentLine);
      currentLine = char === "\n" ? "" : char;
    } else {
      currentLine += char;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

export interface versifiedImageRequest {
  imageSrc: string;
  verse: string;
}

export interface versifiedImageResponse {
  image: string;
}

export async function POST(req: NextRequest) {
  try {
    const { imageSrc, verse } = await req.json();

    if (!imageSrc || !verse) {
      return NextResponse.json(
        { message: "Image source and verse are required." },
        { status: 400 }
      );
    }

    try {
      const fetchWithTimeout = (
        url: string,
        options: RequestInit,
        timeout = 10000
      ): Promise<Response> => {
        return Promise.race([
          fetch(url, options).then((res) => {
            if (!(res instanceof Response)) {
              throw new Error("Fetch did not return a Response object");
            }
            return res;
          }),
          new Promise<Response>((_, reject) =>
            setTimeout(() => reject(new Error("Fetch timeout")), timeout)
          ),
        ]);
      };

      const [imageBuffer, fontBase64] = await Promise.all([
        fetchWithTimeout(imageSrc, {}).then((res: Response) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch image: ${res.statusText}`);
          }
          return res.arrayBuffer();
        }),
        getFontBase64(),
      ]);

      const image = sharp(Buffer.from(imageBuffer));
      const { width = 800, height = 600 } = await image.metadata();

      const maxWidth = width * 0.8; // 使用80%的宽度作为文本最大宽度
      const fontSize = 36; // 设置字体大小为36px

      // 使用 wrapText 函数来处理文本的换行
      const lines = wrapText(verse, maxWidth, fontSize);

      const lineHeight = fontSize * 1.2;

      const overlay = `
                <svg width="${width}" height="${height}">
                    <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stop-color="rgba(0, 0, 0, 0.3)" />
                            <stop offset="100%" stop-color="rgba(0, 0, 0, 0.3)" />
                        </linearGradient>
                        <style>
                            @font-face {
                                font-family: 'NotoSans';
                                src: url(data:font/ttf;base64,${fontBase64});
                            }
                        </style>
                    </defs>
                    <rect x="0" y="0" width="100%" height="50%" fill="url(#gradient)" />
                    <style>
                        .verse {
                            fill: white;
                            font-size: ${fontSize}px;
                            font-weight: bold;
                            text-anchor: middle;
                            font-family: 'NotoSans';
                        }
                    </style>
                    ${lines
                      .map(
                        (line: string, index: number) => `
                        <text x="50%" y="${
                          height / 4 + index * lineHeight
                        }" class="verse" dominant-baseline="middle">${line}</text>
                    `
                      )
                      .join("")}
                </svg>
            `;

      const processedImage = await image
        .composite([
          {
            input: Buffer.from(overlay),
            blend: "over",
          },
        ])
        .toBuffer();

      const base64Image = processedImage.toString("base64");
      return NextResponse.json(
        { image: `data:image/png;base64,${base64Image}` },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error processing image:", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}

