import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'
 
/**
 * Component Header: Hiển thị phần đầu trang web bao gồm logo, thanh tìm kiếm và menu điều hướng
 * @returns JSX.Element - Phần header của trang web
 */
export default function Header() {
    return (
        <header className='bg-black text-white'>
            {/* Phần trên của header chứa logo, thanh tìm kiếm và menu chính */}
            <div className='px-2'>
                <div className='flex items-center justify-between'>
                    {/* Logo và tên ứng dụng */}
                    <div className='flex items-center'>
                        <Link
                            href='/'
                            className='flex items-center header-button font-bold text-xl m-1 rounded-full'
                        >
                            <Image
                            className='rounded-full mr-3'
                                src='/icons/shop_T.svg'
                                width={40}
                                height={40}
                                alt={`${APP_NAME} logo`}
                            />
                            {APP_NAME}
                        </Link>
                    </div>
                    
                    {/* Thanh tìm kiếm - hiển thị trên màn hình trung bình và lớn */}
                    <div className='hidden md:block flex-1 max-w-xl'>
                        <Search />
                    </div>
                    
                    {/* Menu điều hướng chính */}
                    <Menu />
                </div>
                
                {/* Thanh tìm kiếm cho thiết bị di động - chỉ hiển thị trên màn hình nhỏ */}
                <div className='md:hidden block py-2'>
                    <Search />
                </div>
            </div>
            
            {/* Phần dưới của header chứa các danh mục và menu phụ */}
            <div className='flex items-center px-3 mb-[1px] bg-gray-800'>
                {/* Nút menu "All" với biểu tượng */}
                <Button
                    variant='ghost'
                    className=' dark header-button flex items-center gap-1 text-base [&_svg]:size-10  rounded-none'
                >
                    <MenuIcon  />
                    All
                </Button>
                
                {/* Danh sách các liên kết danh mục từ dữ liệu */}
                <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
                    {data.headerMenus.map((menu) => (
                        <Link
                            href={menu.href}
                            key={menu.href}
                            className='header-button !p-2'
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}