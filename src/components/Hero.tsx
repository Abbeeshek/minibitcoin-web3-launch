import heroImage from "@/assets/hero-web3.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Decentralized Web3 network with glowing nodes and connections"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Mesh Background */}
      <div className="absolute inset-0 mesh-bg z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          MiniBitcoin <span className="text-gradient-primary">Web3</span>
        </h1>
        <p className="text-3xl md:text-4xl font-semibold mb-8 text-foreground/90">
          Decentralized. Connected. User-Owned.
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The decentralized internet layer powering the entire MiniBitcoin ecosystem.
        </p>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
