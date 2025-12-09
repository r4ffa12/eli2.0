import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/vitoriaelivania/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/eliv%C3%A2nia-vit%C3%B3ria-silva-santos/",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5511998041577",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-background/10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-background mb-1">
              Elivania Psicóloga
            </h4>
            <p className="text-background/60 text-sm">CRP: 03/33280</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Elivania Psicóloga. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
