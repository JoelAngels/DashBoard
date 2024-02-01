import './globals.css'
import { Bricolage_Grotesque } from "next/font/google";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage_grotesque",
  display: "swap",
});


export const metadata = {
  title: 'Dashboard',
  description: 'Server Actions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}</body>
    </html>
  )
}
