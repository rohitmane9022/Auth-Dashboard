"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Your App</h1>
      <p className="text-xl text-muted-foreground mb-6">Start building your amazing project here!</p>
      <Link
        href="/register"
        className="inline-block px-6 py-3 rounded-lg font-semibold text-sm"
        style={{ background: "hsl(199 89% 48%)", color: "white" }}
      >
        Go to Register →
      </Link>
    </div>
  </div>
  );
}