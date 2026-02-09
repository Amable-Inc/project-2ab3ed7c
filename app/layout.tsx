import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mango - Fresh Organic Tropical Fruits Delivered | Premium Quality",
  description: "Order fresh, organic mangoes delivered to your door. 100% naturally grown, nutrient-rich tropical fruits. Free shipping on subscriptions.",
  keywords: "organic mangoes, fresh mangoes, tropical fruits, mango delivery, healthy fruits, premium mangoes",
  openGraph: {
    title: "Mango - The King of Tropical Fruits",
    description: "Experience the sweet, golden taste of paradise. Sustainably grown, perfectly ripened mangoes.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Organic Mangoes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mango - Fresh Organic Tropical Fruits",
    description: "Premium quality mangoes delivered fresh to your door",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mango.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
