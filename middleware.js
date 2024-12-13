export async function middleware(request) {
  const url = new URL(request.url);
  console.log('url', url)
  // Example: Check for a specific path or query parameter
/*  if (url.pathname.startsWith('/old-path')) {
    return Response.redirect('https://yourdomain.com/new-path', 301);
  }
  if (typeof window !== 'undefined') {
    window.location.href = '{redirectUrl}';
  } else {
    indow.location.href = '{redirectUrl}';
  }*/
  // Example: Log the URL
  console.log('Request URL:', url.href);

  return new Response(null, { status: 200 });
}
