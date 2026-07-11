import Link from "next/link";
import Logo from "@/components/common/Logo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <Logo />

          <div className="flex items-center gap-6 text-sm text-muted-foreground">

            <Link
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>

            <Link
              href="/settings"
              className="hover:text-foreground transition-colors"
            >
              Settings
            </Link>

          </div>

        </nav>
      </Container>
    </header>
  );
}