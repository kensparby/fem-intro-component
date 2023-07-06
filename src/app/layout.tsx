import "./reset.css";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Intro Component with Sign Up Form | A challenge by Frontend Mentor",
  description: "Challenge completed by Ken Sparby, https://sparby.dev",
};

const styles = {
  textDecoration: "underline",
  textUnderlineOffset: "5px",
  textDecorationThickness: "2px",
  textDecorationColor: "currentColor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <footer>
          <p style={{textAlign: 'center'}}>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a style={styles} href="https://sparby.dev">
              Ken Sparby
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
