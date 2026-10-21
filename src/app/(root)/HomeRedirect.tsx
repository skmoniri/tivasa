
"use client";

import { useEffect } from "react";

export default function HomeRedirect() {
  useEffect(() => {
    window.location.replace("/en");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1f3a] px-6 text-center text-white">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          TIVASA
        </h1>

        <p className="mt-4 text-sm text-white/60">
          Redirecting to Tivasa...
        </p>

        <a
          href="/en"
          className="mt-6 inline-block text-sm text-white underline underline-offset-4"
        >
          Continue to website
        </a>
      </div>
    </main>
  );
}
