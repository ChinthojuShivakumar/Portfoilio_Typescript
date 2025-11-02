const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/40 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Shiva Kumar Chinthoju. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
