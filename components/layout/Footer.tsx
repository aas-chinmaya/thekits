import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-background">

      <Container>

        <div className="py-8 text-sm text-muted-foreground">

          © {new Date().getFullYear()} Chinmaya Lab.
          All rights reserved.

        </div>

      </Container>

    </footer>
  );
}