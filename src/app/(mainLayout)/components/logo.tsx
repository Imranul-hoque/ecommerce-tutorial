import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image
                src={"/logo.svg"}
                alt={"Logo"}
                width={45}
                height={45}
            />
        </Link>
  )
};

export default Logo;
