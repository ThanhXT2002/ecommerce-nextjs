import { SearchIcon } from 'lucide-react' // Import biểu tượng tìm kiếm từ thư viện lucide-react
import { Input } from '@/components/ui/input' // Import component Input từ UI components
 
// Import các component Select từ UI components
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants' // Import tên ứng dụng từ constants

// Mảng chứa các danh mục tìm kiếm
const categories = ['men', 'women', 'kids', 'accessories']

// Component Search được xuất khẩu mặc định, đánh dấu async để có thể sử dụng await bên trong nếu cần
export default async function Search() {
    return (
        // Form tìm kiếm gửi dữ liệu đến route /search với phương thức GET
        <form action='/search' method='GET' className='flex items-stretch h-10'>
            {/* Component Select cho phép chọn danh mục, giá trị được gửi với tên là 'category' */}
            <Select name='category'>
                {/* Phần hiển thị của dropdown, styled với các class */}
                <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-none  py-[19px]'>
                    {/* Giá trị mặc định hiển thị là 'All' */}
                    <SelectValue placeholder='All' />
                </SelectTrigger>
                {/* Nội dung dropdown khi mở ra */}
                <SelectContent position='popper' className='bg-white '>
                    {/* Option đầu tiên là 'All' */}
                    <SelectItem value='all'>All</SelectItem>
                    {/* Map qua mảng categories để tạo các option  */}
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category} {/* Hiển thị tên danh mục */}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            
            {/* Input nhập từ khóa tìm kiếm, giá trị được gửi với tên là 'q' */}
            <Input
                className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full !outline-none !ocus:ring-0 ring-0 focus:outline-none'
                placeholder={`Search Site ${APP_NAME}`} // Placeholder sử dụng tên ứng dụng
                name='q' // Tên parameter khi gửi form
                type='search' // Kiểu input là search, giúp hiển thị nút xóa text khi nhập
            />
            
            {/* Nút submit form để thực hiện tìm kiếm */}
            <button
                type='submit'
                className='bg-yellow-500 text-black rounded-s-none  h-full px-3 py-2'
            >
                {/* Biểu tượng tìm kiếm */}
                <SearchIcon className='w-6 h-6' />
            </button>
        </form>
    )
}