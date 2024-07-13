//api/get-photo-unsplash.ts
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export interface GetImageRequest {
  userInput: string;
}

export async function POST(req: NextRequest) {
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY; // 确保环境变量已设置

  let orientation = "landscape";

  try {
    // 向Unsplash API发出请求
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        topics: "HD Backgrounds",
        client_id: UNSPLASH_ACCESS_KEY,
        orientation: orientation,
      },
    });
    console.log(response.data.urls.regular);
    // 返回图片数据
    return NextResponse.json(
      { url: response.data.urls.regular },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "unable to fetch image from unsplash" },
      { status: 500 }
    );
  }
}

