import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = () => {
  return (
    <Link href="/prayer">
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold primary"
        aria-label="Generate Your Prayer Now"
      >
        <RocketIcon />
        Generate Your Prayer Now
      </Button>
    </Link>
  );
};

export default CTAButton;
