import QueryProvider from "@/providers/query-provider";
import ToasterProvider from "@/providers/toaster-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ToasterProvider />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}