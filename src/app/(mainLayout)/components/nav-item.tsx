"use client"

import { Route } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })

const NavbarItem = ({ label, href, isFooter }:Route) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={cn("text-muted-foreground font-[300] text-lg hover:text-black transition-all duration-150",font.className,isActive && "text-black", isFooter && "text-muted-foreground hover:text-white")}>
          {label}
        </Link>
  )
};

export default NavbarItem;
