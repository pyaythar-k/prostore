import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";

const Menu = () => {
  return (
    <>
      <>
        <div className="flex justify-end gap-3">
          <nav className="md:flex hidden w-full max-w-xs gap-3">
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart />
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon />
                Sign In
              </Link>
            </Button>
          </nav>
          <nav className="md:hidden">
            <Sheet>
              <SheetTrigger className="align-middle" asChild>
                <EllipsisVertical />
              </SheetTrigger>
              <SheetContent className="flex flex-col items-start">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <ModeToggle />
                  <Button asChild variant="outline">
                    <Link href="/cart">
                      <ShoppingCart />
                      Cart
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/sign-in">
                      <UserIcon />
                      Sign In
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </>
    </>
  );
};

export default Menu;
