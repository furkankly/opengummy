import { GummySvg } from "./gummy-svg";
import { Gummy } from "./gummy";
import { WelcomingText } from "./welcoming-text";

export function Welcoming() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex h-[calc(100svh-68px)] w-full flex-col items-center justify-between">
        <div />
        <Gummy />
        <GummySvg />
        <WelcomingText />
      </div>
    </div>
  );
}
