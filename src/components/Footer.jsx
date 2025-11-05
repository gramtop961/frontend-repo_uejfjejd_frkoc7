export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Vibe Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#hero" className="text-gray-700 hover:text-black">Back to top</a>
          <a href="mailto:hello@example.com" className="text-gray-700 hover:text-black">Email</a>
        </div>
      </div>
    </footer>
  );
}
