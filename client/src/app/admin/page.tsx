import React from 'react';
import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

const stats = [
  { name: 'Tổng doanh thu', value: '120.000.000 đ', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { name: 'Đơn hàng mới', value: '15', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Sản phẩm', value: '48', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
  { name: 'Khách hàng', value: '240', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tổng quan</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <div className="flex items-center">
              <div className={`rounded-md p-3 ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Đơn hàng gần đây</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
           <p className="text-gray-500">Chưa có dữ liệu thực tế.</p>
        </div>
      </div>
    </div>
  );
}