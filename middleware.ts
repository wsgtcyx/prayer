import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/forum(.*)",
  "/workbench(.*)",
]);

const isApiRoute = createRouteMatcher(["/api(.*)"]);

const PUBLIC_FILE = /\.(.*)$/;

const notNeedI18NRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

const needI18NRouteRedirect = createRouteMatcher([
  "/((?!api|_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)",
]);

// 如果路径不匹配，内部重定向到 404 页面
const matchedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/forum(.*)",
  "/workbench(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/_next(.*)",
  "/api(.*)",
  "/((?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$).*)",
]);

export default clerkMiddleware((auth, req) => {
  console.log("req.url: ", req.url);

  // auth
  if (isProtectedRoute(req)) {
    console.log("auth protect!!!");
    auth().protect();
  }
  if (isApiRoute(req)) {
    const authObject = auth();
    if (!authObject.userId) {
      return new NextResponse("Unauthorized, please sign in.", { status: 401 });
    }
  }
  console.log("auth pass!!");

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    console.log("return!");
    return;
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)",
  ],
};

