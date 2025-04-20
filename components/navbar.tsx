'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {Menu, User, LogOut, Settings, LayoutDashboard} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/lib/auth-context';
import {getToken, hasRole} from "@/lib/auth";

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'MINISTRIES', href: '/ministries' },
  { label: 'MEDIA', href: '/media' },
  { label: 'EVENTS', href: '/events' },
  { label: 'HOW CAN I HELP?', href: '/help' },
  { label: 'CONTACT US', href: '/contact' },
];

export function Navbar() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    setIsAdmin(hasRole('Admin'));
  }, [router]);

  const AuthButtons = () => {
    if (user) {
      return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-black text-black  hover:bg-green-600 hover:text-white">
                <User className="h-4 w-4 mr-2" />
                {user.first_name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {isAdmin && (
              <Link href="/portal">
                <DropdownMenuItem>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>My Portal</span>
                </DropdownMenuItem>
              </Link>
              )}
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Profile Settings</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => { logout(); router.push('/'); }}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      );
    }

    return (
        <div className="flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign Up
            </Button>
          </Link>
        </div>
    );
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                    src="https://cdn.prod.website-files.com/6469d767492ea69c34c8827d/65299a0164ab20fa4a09210f_pagasa_logo.png"
                    alt="Pag-Asa Centre Logo"
                    width={70}
                    height={70}
                    className="rounded-full"
                    priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
              ))}
              <AuthButtons />
            </div>

            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                    >
                      {item.label}
                    </Link>
                ))}
                <div className="flex flex-col space-y-2 px-3 pt-4">
                  <AuthButtons />
                </div>
              </div>
            </div>
        )}
      </nav>
  );
}
