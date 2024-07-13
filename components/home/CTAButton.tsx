import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = () => {
  return (
    <Link href="/chat">
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-2xl"
        aria-label="Get Verses Now"
      >
        <RocketIcon />
        Get Verses Now
      </Button>
    </Link>
  );
};

export default CTAButton;
