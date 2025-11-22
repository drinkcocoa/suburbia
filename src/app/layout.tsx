import type { Metadata } from "next";

import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import { settings } from "@/data";

export const metadata: Metadata = {
  title: settings.site_title,
  description: settings.meta_description,
  openGraph: {
    images: settings.fallback_og_image.url ?? undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&family=DM+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-mono font-medium text-zinc-800">
        <main>{children}</main>
        <SVGFilters />
      </body>
    </html>
  );
}
