import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dovetail - Web engineer coding challenge",
  description: "A starter app for the Dovetail web engineer coding challenge",
}

interface Props {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
