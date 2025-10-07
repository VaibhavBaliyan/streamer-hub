"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { User, Video, Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Video className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">StreamerHub</span>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuLink asChild>
                <Link
                  href="/browse"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Browse
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/categories"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Categories
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/following"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Following
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>

            {/* This will trigger the modal via parallel routes */}
            <Button asChild variant="outline" size="sm">
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>

            <Button size="sm">
              <Video className="h-4 w-4 mr-2" />
              Go Live
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
