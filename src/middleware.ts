import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/blog') {
    try {
      // Forward the request to http://localhost:3000/api/users
      const response = await fetch('http://localhost:3000/api/users', {
        method: req.method, // Forward the original request method
        headers: req.headers, // Forward the original request headers
        body: req.body, // Forward the original request body
      });

      // Return the response from the forwarded request
      return response;
    } catch (error) {
      console.error('Error forwarding request:', error);
      // If an error occurs, return a NextResponse with an error status code
      return new NextResponse(null, { status: 500 }); // Specify the error status code
    }
  }
}
