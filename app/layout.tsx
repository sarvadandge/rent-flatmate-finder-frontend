import QueryProvider from "@/providers/query-provider";
import ToasterProvider from "@/providers/toaster-provider";
import AuthProvider from "@/providers/auth-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <ToasterProvider />
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
