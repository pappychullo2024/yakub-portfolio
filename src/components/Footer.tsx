export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yakub Ojoawo. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
