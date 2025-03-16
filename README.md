This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

-- Bảng Attributes
CREATE TABLE `attributes` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `attribute_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `attributes_user_id_foreign` (`user_id`),
    KEY `attributes_attribute_catalogue_id_foreign` (`attribute_catalogue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Attribute Catalogues 
CREATE TABLE `attribute_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
    `lft` int(11) NOT NULL,
    `rgt` int(11) NOT NULL,
    `level` int(11) NOT NULL,
    `image` varchar(255) DEFAULT NULL,
    `icon` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `attribute_catalogues_parent_id_foreign` (`parent_id`),
    KEY `attribute_catalogues_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Attribute Catalogue Attribute (Bảng liên kết)
CREATE TABLE `attribute_catalogue_attribute` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `attribute_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `attribute_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `attribute_catalogue_attribute_attribute_catalogue_id_foreign` (`attribute_catalogue_id`),
    KEY `attribute_catalogue_attribute_attribute_id_foreign` (`attribute_id`),
    CONSTRAINT `attribute_catalogue_attribute_attribute_catalogue_id_foreign` FOREIGN KEY (`attribute_catalogue_id`) REFERENCES `attribute_catalogues` (`id`) ON DELETE CASCADE,
    CONSTRAINT `attribute_catalogue_attribute_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Posts
CREATE TABLE `posts` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `post_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `posts_user_id_foreign` (`user_id`),
    KEY `posts_post_catalogue_id_foreign` (`post_catalogue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Post Catalogues
CREATE TABLE `post_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
    `lft` int(11) NOT NULL,
    `rgt` int(11) NOT NULL,
    `level` int(11) NOT NULL,
    `image` varchar(255) DEFAULT NULL,
    `icon` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `post_catalogues_parent_id_foreign` (`parent_id`),
    KEY `post_catalogues_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Post Catalogue Post (Bảng liên kết)
CREATE TABLE `post_catalogue_post` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `post_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `post_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `post_catalogue_post_post_catalogue_id_foreign` (`post_catalogue_id`),
    KEY `post_catalogue_post_post_id_foreign` (`post_id`),
    CONSTRAINT `post_catalogue_post_post_catalogue_id_foreign` FOREIGN KEY (`post_catalogue_id`) REFERENCES `post_catalogues` (`id`) ON DELETE CASCADE,
    CONSTRAINT `post_catalogue_post_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Products
CREATE TABLE `products` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `product_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `price` decimal(15,2) DEFAULT NULL,
    `made_in` varchar(255) DEFAULT NULL,
    `code` varchar(255) DEFAULT NULL,
    `attributeCatalogue` varchar(255) DEFAULT NULL,
    `attribute` varchar(255) DEFAULT NULL,
    `variant` varchar(255) DEFAULT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `products_user_id_foreign` (`user_id`),
    KEY `products_product_catalogue_id_foreign` (`product_catalogue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Product Catalogues
CREATE TABLE `product_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
    `lft` int(11) NOT NULL,
    `rgt` int(11) NOT NULL,
    `level` int(11) NOT NULL,
    `image` varchar(255) DEFAULT NULL,
    `icon` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `product_catalogues_parent_id_foreign` (`parent_id`),
    KEY `product_catalogues_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Product Catalogue Product (Bảng liên kết)
CREATE TABLE `product_catalogue_product` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `product_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `product_catalogue_product_product_catalogue_id_foreign` (`product_catalogue_id`),
    KEY `product_catalogue_product_product_id_foreign` (`product_id`),
    CONSTRAINT `product_catalogue_product_product_catalogue_id_foreign` FOREIGN KEY (`product_catalogue_id`) REFERENCES `product_catalogues` (`id`) ON DELETE CASCADE,
    CONSTRAINT `product_catalogue_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Product Variants
CREATE TABLE `product_variants` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_id` bigint(20) UNSIGNED NOT NULL,
    `code` varchar(255) DEFAULT NULL,
    `quantity` int(11) DEFAULT NULL,
    `sku` varchar(255) DEFAULT NULL,
    `price` decimal(15,2) DEFAULT NULL,
    `barcode` varchar(255) DEFAULT NULL,
    `file_name` varchar(255) DEFAULT NULL,
    `file_url` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `product_variants_product_id_foreign` (`product_id`),
    KEY `product_variants_user_id_foreign` (`user_id`),
    CONSTRAINT `product_variants_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Product Variant Attribute (Bảng liên kết)
CREATE TABLE `product_variant_attribute` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `product_variant_id` bigint(20) UNSIGNED NOT NULL,
    `attribute_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `product_variant_attribute_product_variant_id_foreign` (`product_variant_id`),
    KEY `product_variant_attribute_attribute_id_foreign` (`attribute_id`),
    CONSTRAINT `product_variant_attribute_product_variant_id_foreign` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`id`) ON DELETE CASCADE,
    CONSTRAINT `product_variant_attribute_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Menus
CREATE TABLE `menus` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
    `lft` int(11) NOT NULL,
    `rgt` int(11) NOT NULL,
    `level` int(11) NOT NULL,
    `image` varchar(255) DEFAULT NULL,
    `icon` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `type` varchar(255) DEFAULT NULL,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `menu_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `menus_parent_id_foreign` (`parent_id`),
    KEY `menus_user_id_foreign` (`user_id`),
    KEY `menus_menu_catalogue_id_foreign` (`menu_catalogue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Menu Catalogues
CREATE TABLE `menu_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `keyword` varchar(255) DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Permissions
CREATE TABLE `permissions` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng User Catalogues
CREATE TABLE `user_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng User Catalogue Permission (Bảng liên kết)
CREATE TABLE `user_catalogue_permission` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `permission_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `user_catalogue_permission_user_catalogue_id_foreign` (`user_catalogue_id`),
    KEY `user_catalogue_permission_permission_id_foreign` (`permission_id`),
    CONSTRAINT `user_catalogue_permission_user_catalogue_id_foreign` FOREIGN KEY (`user_catalogue_id`) REFERENCES `user_catalogues` (`id`) ON DELETE CASCADE,
    CONSTRAINT `user_catalogue_permission_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Users
CREATE TABLE `users` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `email_verified_at` timestamp NULL DEFAULT NULL,
    `password` varchar(255) NOT NULL,
    `phone` varchar(20) DEFAULT NULL,
    `province_id` varchar(255) DEFAULT NULL,
    `district_id` varchar(255) DEFAULT NULL,
    `ward_id` varchar(255) DEFAULT NULL,
    `address` varchar(255) DEFAULT NULL,
    `birthday` date DEFAULT NULL,
    `image` varchar(255) DEFAULT NULL,
    `description` text DEFAULT NULL,
    `user_agent` text DEFAULT NULL,
    `ip` varchar(255) DEFAULT NULL,
    `user_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `remember_token` varchar(100) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `users_email_unique` (`email`),
    KEY `users_user_catalogue_id_foreign` (`user_catalogue_id`),
    CONSTRAINT `users_user_catalogue_id_foreign` FOREIGN KEY (`user_catalogue_id`) REFERENCES `user_catalogues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Provinces
CREATE TABLE `provinces` (
    `code` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Districts
CREATE TABLE `districts` (
    `code` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `province_code` varchar(255) NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`code`),
    KEY `districts_province_code_foreign` (`province_code`),
    CONSTRAINT `districts_province_code_foreign` FOREIGN KEY (`province_code`) REFERENCES `provinces` (`code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Wards
CREATE TABLE `wards` (
    `code` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `district_code` varchar(255) NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`code`),
    KEY `wards_district_code_foreign` (`district_code`),
    CONSTRAINT `wards_district_code_foreign` FOREIGN KEY (`district_code`) REFERENCES `districts` (`code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Gallery Catalogues
CREATE TABLE `gallery_catalogues` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
    `lft` int(11) NOT NULL,
    `rgt` int(11) NOT NULL,
    `level` int(11) NOT NULL,
    `image` varchar(255) DEFAULT NULL,
    `icon` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `gallery_catalogues_parent_id_foreign` (`parent_id`),
    KEY `gallery_catalogues_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Galleries
CREATE TABLE `galleries` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` varchar(255) DEFAULT NULL,
    `album` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `follow` tinyint(1) NOT NULL DEFAULT 0,
    `order` int(11) NOT NULL DEFAULT 0,
    `user_id` bigint(20) UNSIGNED NOT NULL,
    `gallery_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `name` varchar(255) NOT NULL,
    `canonical` varchar(255) DEFAULT NULL,
    `meta_title` varchar(255) DEFAULT NULL,
    `meta_keyword` text DEFAULT NULL,
    `meta_description` text DEFAULT NULL,
    `description` longtext DEFAULT NULL,
    `content` longtext DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `galleries_user_id_foreign` (`user_id`),
    KEY `galleries_gallery_catalogue_id_foreign` (`gallery_catalogue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Gallery Catalogue Gallery (Bảng liên kết)
CREATE TABLE `gallery_catalogue_gallery` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `gallery_catalogue_id` bigint(20) UNSIGNED NOT NULL,
    `gallery_id` bigint(20) UNSIGNED NOT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `gallery_catalogue_gallery_gallery_catalogue_id_foreign` (`gallery_catalogue_id`),
    KEY `gallery_catalogue_gallery_gallery_id_foreign` (`gallery_id`),
    CONSTRAINT `gallery_catalogue_gallery_gallery_catalogue_id_foreign` FOREIGN KEY (`gallery_catalogue_id`) REFERENCES `gallery_catalogues` (`id`) ON DELETE CASCADE,
    CONSTRAINT `gallery_catalogue_gallery_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `galleries` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Bảng Slides
CREATE TABLE `slides` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `keyword` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `description` text DEFAULT NULL,
    `publish` tinyint(1) NOT NULL DEFAULT 0,
    `item` varchar(255) DEFAULT NULL,
    `short_code` varchar(255) DEFAULT NULL,
    `setting` text DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng Systems
CREATE TABLE `systems` (
    `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

tiếp tục comment giải thích chi tiết băng tiếng việt, cho người mới học react
