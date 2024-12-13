export async function middleware(req) {
  const lang = req.headers.get('accept-language') || 'en';
  const targetDomain = lang.startsWith('vi') || !lang ? 'https://tosuthien.quest' : 'https://patriarchalzen.quest';

  return Response.redirect(targetDomain + req.url);
}
