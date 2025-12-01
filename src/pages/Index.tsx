import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import CheckmarkList from "@/components/CheckmarkList";
import Footer from "@/components/Footer";
import { Shield, Wallet, Link2, Database, Users, Coins, Globe, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* What Is MiniBitcoin Web3 */}
      <ContentSection title="🌐 What Is MiniBitcoin Web3?">
        <p>
          MiniBitcoin Web3 is the decentralized layer of the MiniBitcoin ecosystem that gives users full control, ownership, and freedom over their digital identity, assets, data, and interactions.
        </p>
        <p>
          Instead of relying on centralized servers or third-party platforms, MiniBitcoin Web3 uses blockchain and smart contracts to create:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-6">
          <li>decentralized applications (dApps)</li>
          <li>decentralized identity systems</li>
          <li>decentralized storage</li>
          <li>community-governed interactions</li>
          <li>transparent peer-to-peer systems</li>
        </ul>
        <p className="font-semibold text-xl">
          This is the next evolution of the internet, powered entirely by the MiniBitcoin Blockchain.
        </p>
      </ContentSection>

      {/* Core Components */}
      <ContentSection title="🔌 Core Components of MiniBitcoin Web3">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <FeatureCard
            icon={<Shield className="w-10 h-10" />}
            title="1. Decentralized Identity (DID)"
            description="Users own their identity — no central authority, no data leakage. Secure login across all MiniBitcoin apps using on-chain identity."
          />
          <FeatureCard
            icon={<Wallet className="w-10 h-10" />}
            title="2. Web3 Wallet Integration"
            description="Seamless MBTC and WTC access across dApps, payments, gaming platforms, business tools, and staking dashboards. All in one unified wallet experience."
          />
          <FeatureCard
            icon={<Link2 className="w-10 h-10" />}
            title="3. Cross-App Connectivity"
            description="Every service in the MiniBitcoin ecosystem connects under Web3, enabling single-sign blockchain login, shared identity, asset transfer across applications, and unified rewards."
          />
          <FeatureCard
            icon={<Database className="w-10 h-10" />}
            title="4. Decentralized Storage"
            description="Files, data, documents, NFTs — all stored on encrypted decentralized networks."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10" />}
            title="5. User Governance"
            description="Web3 enables the community to vote, propose, and influence upgrades using MBTC staking and governance smart contracts."
          />
        </div>
      </ContentSection>

      {/* MBTC Integration */}
      <ContentSection title="🔗 How It Integrates With MiniBitcoin (MBTC)">
        <p className="font-semibold text-xl mb-6">
          <span className="text-gradient-accent">MBTC</span> is the fuel of our entire Web3 operation.
        </p>
        
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Coins className="w-8 h-8 text-foreground/70 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">1. MBTC as Web3 Access Token</h3>
                <p className="text-foreground/90">
                  All decentralized actions — identity verification, storage, governance, contract interactions — run on MBTC gas fees.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-8 h-8 text-foreground/70 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">2. MBTC Wallet Ecosystem</h3>
                <p className="text-foreground/90">
                  Every Web3 service uses the MiniBitcoin wallet as the main access point.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-foreground/70 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">3. MBTC Rewards for Participation</h3>
                <p className="text-foreground/90 mb-4">Users earn <span className="text-gradient-accent font-semibold">MBTC</span> for:</p>
                <ul className="list-disc list-inside space-y-2 ml-6 text-foreground/90">
                  <li>using dApps</li>
                  <li>voting</li>
                  <li>holding decentralized identity</li>
                  <li>contributing to the ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* WTC Integration */}
      <ContentSection title="🌍 How Web3 Connects With World Trade Coin (WTC)">
        <p>
          WTC expands Web3 into global business applications, including:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-6">
          <li>decentralized supply chain tracking</li>
          <li>merchant Web3 identity</li>
          <li>cross-border trade contracts</li>
          <li>tamper-proof business documents</li>
          <li>global invoice & export settlement</li>
        </ul>
        <p>
          Integrating <span className="text-gradient-accent font-semibold">WTC</span> into MiniBitcoin Web3 allows global companies to use decentralized tools with real-world utility.
        </p>
        <p className="font-semibold text-xl">
          Together, <span className="text-gradient-accent">MBTC + WTC</span> bring Web3 to consumers AND enterprises.
        </p>
      </ContentSection>

      {/* Why It Stands Out */}
      <ContentSection title="🚀 Why MiniBitcoin Web3 Stands Out">
        <CheckmarkList
          items={[
            "User-owned identity",
            "Privacy and censorship resistance",
            "Open-source, transparent architecture",
            "Business-ready decentralized tools",
            "Real-time cross-chain support",
            "Integrates all MiniBitcoin ecosystem services",
          ]}
        />
      </ContentSection>

      {/* Future Vision */}
      <ContentSection title="🌟 Future Vision">
        <p>MiniBitcoin Web3 will evolve into:</p>
        <ul className="list-disc list-inside space-y-2 ml-6">
          <li>a fully decentralized internet layer</li>
          <li>a platform where users own every asset and digital interaction</li>
          <li>a global identity + transaction ecosystem</li>
          <li>a unified Web3 environment for gaming, AI, finance, and global trade</li>
        </ul>
        <p className="font-bold text-2xl mt-8 text-center">
          <span className="text-gradient-accent">Web3</span> is not just a feature — it's the soul of a decentralized MiniBitcoin world.
        </p>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Index;
