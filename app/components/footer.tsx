export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2023 Planly. All rights reserved.
        </p>
        <nav className="flex items-center space-x-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  )
}

