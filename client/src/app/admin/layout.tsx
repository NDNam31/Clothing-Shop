import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  List, 
  Users, 
  LogOut, 
  Menu
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-blue-600">Shop Admin</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/categories" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <List className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                <span className="font-medium">Danh mục</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <ShoppingBag className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                <span className="font-medium">Sản phẩm</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <Users className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                <span className="font-medium">Tài khoản</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
          <button className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Admin User</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
