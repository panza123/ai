import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/blog') {
    try {
      // Forward the request to http://localhost:3000/api/users
      const response = await fetch('http://localhost:3000/api/users', {
        method: req.method, // Forward the original request method
        headers: req.headers, // Forward the original request headers
        body: req.body, // Forward the original request body
        credentials: 'include' // Include cookies in the request
      });

      // Read the response body as text
      const responseBody = await response.text();

      // Create a new response with the forwarded response body
      const modifiedResponse = new NextResponse(responseBody, response);

      // Set cookies in the response
      modifiedResponse.cookies.set('blog', 'http://localhost:3000/api/users', {
        path: '/blog', // Set cookie path
        maxAge: 3600, // Set cookie expiration time (in seconds)
        secure: false, // Set cookie secure flag (change to false if not using HTTPS locally)
        sameSite: 'none' // Set cookie sameSite attribute
      });

      // Return the modified response
      return modifiedResponse;
    } catch (error) {
      console.error('Error forwarding request:', error);
      // If an error occurs, return a NextResponse with an error status code
      return new NextResponse(null, { status: 500 }); // Specify the error status code
    }
  } else {
    // If the pathname is not '/blog', continue with the regular flow
    return await NextResponse.next(req);
  }
}
