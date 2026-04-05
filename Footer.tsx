import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ayoub El Fakhari 
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Made with <Heart size={13} className="text-primary" /> and lots of coffee ;)
      </p>
    </div>
  </footer>
);

export default Footer;
