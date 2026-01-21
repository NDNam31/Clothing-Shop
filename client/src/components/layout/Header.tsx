"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
              FASHION<span className="text-gray-500">SHOP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black">
              Trang chủ
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black">
              Sản phẩm
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black">
              Về chúng tôi
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-black">
              Liên hệ
            </Link>
          </nav>

          {/* Icons & Auth */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">Đăng nhập</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Đăng ký</Button>
              </Link>
            </div>
            
            <button className="p-2 text-gray-600 hover:text-black relative">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">0</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-black"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black">
              Trang chủ
            </Link>
            <Link href="/products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-black">
              Sản phẩm
            </Link>
            <div className="mt-4 border-t pt-4">
               <div className="flex flex-col space-y-2 px-3">
                  <Link href="/login">
                     <Button variant="outline" fullWidth>Đăng nhập</Button>
                  </Link>
                  <Link href="/register">
                     <Button fullWidth>Đăng ký</Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
