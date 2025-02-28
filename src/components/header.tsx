'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";


const Header = () => {
  return (
    <>
      <header className="z-50 py-4 px-[1.5rem] flex fixed top-0 w-full gap-4 items-center bg-primary-foreground dark:bg-black">
        <div className="max-w-[1345px] mx-auto w-full flex items-center justify-between">
          <div className="flex gap-7 items-center">
            <Image
              src={'/vercel-wordmark.svg'}
              alt="vercel wordmark"
              width={500}
              height={100}
              className="w-[90px] flex dark:hidden"
            />
            <Image
              src={'/vercel-wordmark-white.svg'}
              alt="vercel wordmark white"
              width={500}
              height={100}
              className="w-[90px] hidden dark:flex"
            />
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground rounded-full">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and
                              Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground rounded-full">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground rounded-full">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-muted-foreground rounded-full')}>
                      Enterprise
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-muted-foreground rounded-full')}>
                      Docs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'text-muted-foreground rounded-full')}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex gap-2">
            <Link href="/login" className={buttonVariants({ variant: "outline", size: "sm" })}>Login</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "sm" })}>Contact</Link>
            <Link href="/signup" className={buttonVariants({ variant: "default", size: "sm" })}>Sign Up</Link> {/* not "Signup". attention to detailllllllllll */}
          </div>

          <div className="flex lg:hidden border rounded-full size-8">=</div>
        </div>
      </header>
    </>
  )
}

export default Header