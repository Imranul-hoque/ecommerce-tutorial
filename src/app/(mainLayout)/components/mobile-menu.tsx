"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Route, routes } from "@/constants";
import { Menu } from "lucide-react";
import NavbarItem from "./nav-item";

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden block bg-transparent hover:bg-transparent" size={"icon"} variant={"ghost"}>
                    <Menu className="text-muted-foreground size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="p-4 flex flex-col space-y-4">
                    {
                        routes.map((route: Route, index: number) => (
                            <NavbarItem
                                key={index}
                                label={route.label}
                                href={route.href}
                            />
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu;