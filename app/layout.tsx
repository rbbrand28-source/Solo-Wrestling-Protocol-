import "../styles/globals.css";

export const metadata = {
  title: "Solo Wrestling Protocol",
  description: "90 Day Combat Transformation System"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
