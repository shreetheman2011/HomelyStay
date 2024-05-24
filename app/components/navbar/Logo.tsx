"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo goes here"
      className="hidden md:block cursor-pointer"
      height="110"
      width="140"
      src="/images/homelystaylogofinal-removebg-pre.png"
    />
  );
};

export default Logo;
