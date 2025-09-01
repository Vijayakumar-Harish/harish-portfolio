import "./globals.css";

export const metadata = {
  title: "Harish V — Portfolio",
  description: "Full-Stack Engineer (MERN, Fastify, GraphQL, Kafka, AWS)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
