import { Check } from "lucide-react";

interface CheckmarkListProps {
  items: string[];
}

const CheckmarkList = ({ items }: CheckmarkListProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0">
            <Check className="w-5 h-5 text-primary" />
          </div>
          <span className="text-foreground/90">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default CheckmarkList;
