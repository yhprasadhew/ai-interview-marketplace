import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background px-4 py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back home
        </Link>

        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
