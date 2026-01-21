import { Header } from '@/components/layout/Header';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types';
// import { mockProducts } from '@/lib/mock-data'; // Remove mock data

async function getProducts(): Promise<Product[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  try {
    const res = await fetch(`${apiUrl}/products`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      console.error('Failed to fetch products');
      return [];
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
           <div className="h-full w-full bg-gradient-to-r from-gray-900 to-gray-800 opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Bộ sưu tập Mùa Hè 2026
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300">
            Khám phá những mẫu thiết kế mới nhất, phong cách thời thượng và chất liệu thoáng mát cho mùa hè năng động.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Mua ngay
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sản phẩm nổi bật</h2>
          <a href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            Xem tất cả &rarr;
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500 py-10">
              Chưa có sản phẩm nào. Hãy thêm sản phẩm từ trang Admin.
            </p>
          )}
        </div>
      </main>

      {/* Footer (Simplified) */}
      <footer className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Về chúng tôi</h3>
                <p className="mt-4 text-base text-gray-500">
                  Fashion Shop - Nơi khẳng định phong cách của bạn với những sản phẩm thời trang chất lượng cao.
                </p>
             </div>
             <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Hỗ trợ</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Chính sách đổi trả</a></li>
                  <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Hướng dẫn chọn size</a></li>
                </ul>
             </div>
             <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Liên hệ</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-500">Hotline: 1900 xxxx</li>
                  <li className="text-base text-gray-500">Email: support@fashionshop.com</li>
                </ul>
             </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; 2026 Fashion Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
