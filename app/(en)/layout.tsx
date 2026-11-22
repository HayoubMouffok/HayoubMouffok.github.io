import "../globals.css";
import { Providers } from "@/components/Providers";
import { personJsonLd } from "@/lib/meta";

export { viewport } from "@/lib/meta";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain">
        <Providers>{children}</Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd("en")) }} />
      </body>
    </html>
  );
}
