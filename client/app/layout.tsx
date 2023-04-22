import "./globals.css";
import Navbar from "./component/Navbar";
export const metadata = {
  title: "My Yt",
  description: "the home page of my yt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
