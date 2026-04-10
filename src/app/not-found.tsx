import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-center px-4">
      <div className="relative">
        <p className="text-[120px] font-bold leading-none text-gradient opacity-20 select-none">
          404
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Page Not Found</h1>
          <p className="text-text-secondary mb-8 max-w-sm">
            This page wandered off into a different dimension. Let&apos;s get you back.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-secondary transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
