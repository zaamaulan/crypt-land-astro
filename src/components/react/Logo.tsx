import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <figure className={cn("flex items-center gap-5", className)}>
      <img src="/logo.svg" alt="logo" className="w-[50px] h-[50px]" />
      <figcaption className="text-3xl text-white">Crypt Land</figcaption>
    </figure>
  );
};
