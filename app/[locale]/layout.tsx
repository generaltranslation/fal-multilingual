import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { getLocale } from "gt-next/server";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	display: "swap",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getGT();
	return {
		title: t("Fal x Vercel Image Generator"),
		description: t("An open-source AI image generator using the AI SDK and Fal via the Vercel Marketplace"),
	}
}



export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${geistSans.variable} ${geistMono.variable}`}
			lang={await getLocale()}
		>
			<body className="font-sans antialiased">
				<GTProvider>
					{children}
					<Analytics />
				</GTProvider>
			</body>
		</html>
	);
}
