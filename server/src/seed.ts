import dotenv from 'dotenv';
dotenv.config();

import prisma from './config/prisma';
import { Gender, ProductGender, Size, Season, Role } from '@prisma/client';

async function main() {
  console.log('Start seeding...');

  // Clean up existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productAiAttribute.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.userProfile.deleteMany();
  await prisma.user.deleteMany();

  // Create Categories
  const menCategory = await prisma.category.create({
    data: {
      name: 'Nam',
      slug: 'nam',
    },
  });

  const womenCategory = await prisma.category.create({
    data: {
      name: 'Nữ',
      slug: 'nu',
    },
  });

  const tShirtCategory = await prisma.category.create({
    data: {
      name: 'Áo Thun',
      slug: 'ao-thun',
      parent_id: menCategory.id,
    },
  });

  const dressCategory = await prisma.category.create({
    data: {
      name: 'Váy',
      slug: 'vay',
      parent_id: womenCategory.id,
    },
  });

  // Create Products
  const tShirt = await prisma.product.create({
    data: {
      name: 'Áo Thun Basic Cotton',
      description: 'Áo thun cotton 100% thoáng mát, thấm hút mồ hôi tốt. Thiết kế đơn giản, dễ phối đồ.',
      price: 199000,
      category_id: tShirtCategory.id,
      gender: ProductGender.male,
      images: {
        create: [
          {
            image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            is_main: true,
          },
          {
            image_url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            is_main: false,
          },
        ],
      },
      variants: {
        create: [
          { size: Size.M, color: 'Trắng', stock: 50 },
          { size: Size.L, color: 'Trắng', stock: 50 },
          { size: Size.M, color: 'Đen', stock: 30 },
          { size: Size.L, color: 'Đen', stock: 30 },
        ],
      },
      aiAttributes: {
        create: {
          style_tags: 'basic, casual, minimalist',
          suitable_body_type: 'normal, slim, muscular',
          occasion: 'daily, hangout',
          season: Season.summer,
        }
      }
    },
  });

  const floralDress = await prisma.product.create({
    data: {
      name: 'Váy Hoa Nhí Vintage',
      description: 'Váy hoa nhí phong cách vintage, chất liệu voan nhẹ nhàng, bay bổng.',
      price: 450000,
      category_id: dressCategory.id,
      gender: ProductGender.female,
      images: {
        create: [
          {
            image_url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            is_main: true,
          },
        ],
      },
      variants: {
        create: [
          { size: Size.S, color: 'Hồng', stock: 20 },
          { size: Size.M, color: 'Hồng', stock: 25 },
        ],
      },
    },
  });

  const jacket = await prisma.product.create({
    data: {
      name: 'Áo Khoác Denim',
      description: 'Áo khoác denim cá tính, bụi bặm. Chất liệu jeans bền đẹp.',
      price: 550000,
      category_id: menCategory.id, // Or unisex
      gender: ProductGender.unisex,
      images: {
        create: [
          {
            image_url: 'https://images.unsplash.com/photo-1601333762716-448c51f3b649?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            is_main: true,
          },
        ],
      },
      variants: {
        create: [
          { size: Size.L, color: 'Xanh', stock: 15 },
          { size: Size.XL, color: 'Xanh', stock: 10 },
        ],
      },
    },
  });

    const officeShirt = await prisma.product.create({
    data: {
      name: 'Áo Sơ Mi Công Sở',
      description: 'Áo sơ mi lụa mềm mại, chống nhăn, phù hợp môi trường công sở.',
      price: 350000,
      category_id: womenCategory.id,
      gender: ProductGender.female,
      images: {
        create: [
            {
                image_url: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                is_main: true
            }
        ]
      },
      variants: {
        create: [
             { size: Size.S, color: 'Trắng', stock: 40 },
             { size: Size.M, color: 'Trắng', stock: 40 },
             { size: Size.L, color: 'Trắng', stock: 20 },
        ]
      }
    }
  });


  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
