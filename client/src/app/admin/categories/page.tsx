import React from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const categories = [
  { id: 1, name: 'Áo Nam', count: 45, status: 'Active' },
  { id: 2, name: 'Quần Jeans', count: 32, status: 'Active' },
  { id: 3, name: 'Phụ kiện', count: 12, status: 'Inactive' },
  { id: 4, name: 'Giày dép', count: 28, status: 'Active' },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý Danh mục</h1>
        <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          <Plus className="w-5 h-5 mr-2" />
          Thêm danh mục
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-16">ID</th>
                <th className="px-6 py-4">Tên danh mục</th>
                <th className="px-6 py-4">Số lượng SP</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">#{cat.id}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{cat.name}</td>
                  <td className="px-6 py-4">{cat.count} sản phẩm</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      cat.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {cat.status === 'Active' ? 'Hiển thị' : 'Ẩn'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
