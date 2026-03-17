import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import Script from "next/script";
const manrope = Manrope({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Формула любові",
  description: "Онлайн-школа Ірини Табаки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '889324683922599');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      
      <body
        className={`${manrope.className} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}