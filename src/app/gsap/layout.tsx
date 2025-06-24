import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <div className="relative w-full flex items-center justify-center"><Navbar /></div> */}
        {children}
      </body>
    </html>
  );
}
