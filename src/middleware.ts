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

      // Create a new response based on the forwarded response
      const modifiedResponse = new NextResponse(response.body, response);

      // Set cookies in the response
      modifiedResponse.cookies.set('cookieName', 'cookieValue', {
        // cookie options
        // For example, you can set the cookie's path, domain, max-age, etc.
        path: '/', // Set cookie path
        maxAge: 3600, // Set cookie expiration time (in seconds)
        secure: true, // Set cookie secure flag
        sameSite: 'none' // Set cookie sameSite attribute
      });

      // Return the modified response
      return modifiedResponse;
    } catch (error) {
      console.error('Error forwarding request:', error);
      // If an error occurs, return a NextResponse with an error status code
      return new NextResponse(null, { status: 500 }); // Specify the error status code
    }
  }
}
