import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { Button } from '../ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Format price to VND
  const priceFormatted = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-all hover:shadow-lg">
      <div className="relative aspect-[3/4] bg-gray-100 sm:aspect-[4/5]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Button fullWidth size="sm" className="gap-2">
            <ShoppingCart size={16} /> Thêm vào giỏ
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category?.name}</p>
        <div className="mt-auto pt-2 flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">{priceFormatted}</p>
        </div>
      </div>
    </div>
  );
}
