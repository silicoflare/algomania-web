import Link from "next/link";
import { ReactNode } from "react";

/**
 *
 * @param {{ to: string, children: import("react").ReactNode }} props
 * @returns { import("react").JSX }
 */
function NavbarLabel({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link href={to} className="font-body font-semibold text-lg">
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 flex items-center justify-between md:px-10 p-5">
      <div className=""></div>
      <img src="/logo.png" alt="encodeai logo" width={40} />
      <div className="w-full flex items-center justify-end gap-2">
        {/* <NavbarLabel to="/algomania">Algomania</NavbarLabel> */}
      </div>
    </div>
  );
}
