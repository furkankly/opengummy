import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t border-[rgba(144,145,160,0.16)]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 p-10">
        <p className="text-xs lg:text-sm">
          This website, a desperate grasp at permanence amidst a universe
          drifting towards eternal nothingness, represents the culmination of
          humanity&apos;s efforts - meticulously ranking saccharine gummy
          confections as if such fleeting indulgences could outshine the
          inexorable pull of oblivion itself.
        </p>
        <div className="flex items-center gap-4">
          <p className="flex-1">OpenGummy © {new Date().getFullYear()}</p>
          <Button asChild size="icon">
            <Link href="https://github.com/furkankly/opengummy">
              <GitHubLogoIcon />
            </Link>
          </Button>
          <Button asChild size="icon">
            <Link href="https://x.com/furkanklyy">
              <TwitterLogoIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
