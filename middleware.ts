import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isApiRoute = createRouteMatcher(["/api(.*)"]);

export default clerkMiddleware();

// export default clerkMiddleware((auth, req) => {
//   console.log("req.url: ", req.url);

//   // auth
//   if (isApiRoute(req)) {
//     const authObject = auth();
//     if (!authObject.userId) {
//       return new NextResponse("Unauthorized, please sign in.", { status: 401 });
//     }
//   }
//   console.log("auth pass!!");
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

