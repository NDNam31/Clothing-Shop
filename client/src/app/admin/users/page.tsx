import React from 'react';
import { MoreHorizontal, UserCheck, UserX, Shield } from 'lucide-react';

const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com', role: 'Customer', status: 'Active' },
  { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', role: 'Customer', status: 'Banned' },
  { id: 4, name: 'Phạm Thị D', email: 'phamthid@gmail.com', role: 'Editor', status: 'Active' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý Tài khoản</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Tên người dùng</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Vai trò</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {user.role === 'Admin' ? (
                        <Shield className="w-4 h-4 text-blue-600 mr-1.5" />
                      ) : null}
                      <span className={`text-xs font-medium px-2 py-1 rounded border ${
                        user.role === 'Admin' ? 'bg-blue-50 border-blue-100 text-blue-700' : 
                        user.role === 'Editor' ? 'bg-purple-50 border-purple-100 text-purple-700' :
                        'bg-gray-50 border-gray-100 text-gray-600'
                      }`}>
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center w-fit px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status === 'Active' ? <UserCheck className="w-3 h-3 mr-1" /> : <UserX className="w-3 h-3 mr-1" />}
                      {user.status === 'Active' ? 'Hoạt động' : 'Đã khóa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
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
