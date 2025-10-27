// app/not-found.tsx
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Pagina niet gevonden",
  description: "De pagina die je zoekt bestaat niet (meer) of is verplaatst.",
  pathname: "/404",
  noIndex: true,
  image: "/og/default.png",
});

export default function NotFound() {
  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-wide">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Pagina niet gevonden</h1>
        <p className="mt-3">
          De pagina die je zoekt bestaat niet (meer) of is verplaatst.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50 hover:text-black"
          >
            Naar home
          </Link>
        </div>
      </div>
    </main>
  );
}
