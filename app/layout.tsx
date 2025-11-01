import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baziar.dev"),
  title: {
    default: "Morteza Baziar - Full-Stack Developer | TypeScript, Python, React Expert",
    template: "%s | Morteza Baziar",
  },
  description: "Full-Stack Developer & Open Source Enthusiast. Creator of RapidKit framework. Specializing in TypeScript, Python, React, Next.js, FastAPI, and NestJS. Building scalable applications and developer tools.",
  keywords: [
    "Morteza Baziar",
    "Full-Stack Developer",
    "TypeScript Developer",
    "Python Developer",
    "React Developer",
    "Next.js Expert",
    "RapidKit",
    "FastAPI",
    "NestJS",
    "Open Source",
    "Web Development",
    "Software Engineer",
    "baziar.dev",
  ],
  authors: [{ name: "Morteza Baziar", url: "https://baziar.dev" }],
  creator: "Morteza Baziar",
  publisher: "Morteza Baziar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baziar.dev",
    title: "Morteza Baziar - Full-Stack Developer | TypeScript, Python, React Expert",
    description: "Full-Stack Developer & Open Source Enthusiast. Creator of RapidKit framework. Building scalable applications with TypeScript, Python, React, and Next.js.",
    siteName: "Morteza Baziar Portfolio",
    images: [
      {
        url: "/baziar-avatar.png",
        width: 1200,
        height: 630,
        alt: "Morteza Baziar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morteza Baziar - Full-Stack Developer",
    description: "Full-Stack Developer & Open Source Enthusiast. Creator of RapidKit framework.",
    creator: "@baziar_dev",
    images: ["/baziar-avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://baziar.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Web Vitals Monitoring */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname !== 'localhost') {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(console.log);
                  getFID(console.log);
                  getFCP(console.log);
                  getLCP(console.log);
                  getTTFB(console.log);
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
