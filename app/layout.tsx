// layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontMono, fontPlayfair } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontPlayfair.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <div className="absolute top-0 w-full">
              <Navbar />
            </div>
            {children}
            <footer className="w-full flex items-center justify-center py-12 ">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/Sukrit3007/roobafinanceassignment1"
                title="rooba finance assignment"
              >
                <span className="text-default-300">Built by</span>
                <p className="text-primary">Sukrit</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
