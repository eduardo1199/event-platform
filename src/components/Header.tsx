import { Logo } from "./Logo";
import { Columns  } from 'phosphor-react';

interface HeaderProps {
  onOpenSideBar: () => void;
}

export function Header({ onOpenSideBar }: HeaderProps) {
  return (
    <header
      className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 position:relative"
    >
      <Logo />
      <button className="absolute right-0 mr-2" onClick={onOpenSideBar}>
        <Columns size={30} />
      </button>
    </header>
  )
}