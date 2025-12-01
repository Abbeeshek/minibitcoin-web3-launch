import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  accent?: "primary" | "accent";
}

const ContentSection = ({ title, children, accent = "primary" }: ContentSectionProps) => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          {title}
        </h2>
        <div className="space-y-8 text-lg leading-relaxed text-foreground/90">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
