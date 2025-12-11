const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Web3", href: "#web3" },
    { name: "IBTC", href: "#ibtc" },
    { name: "WTC", href: "#wtc" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            MiniBitcoin <span className="text-gradient-primary">Web3</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © 2025 MiniBitcoin Web3. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
