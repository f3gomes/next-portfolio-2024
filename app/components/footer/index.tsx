import { IoMdHeart } from "react-icons/io";
import { RiTerminalBoxLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made by
        <RiTerminalBoxLine size={18} className="text-emerald-500" />
        <strong className="font-medium">Felipe Gomes</strong>
      </span>
    </footer>
  );
};
