// Import các biểu tượng từ thư viện lucide-react - các biểu tượng này sẽ được sử dụng trong menu điều hướng
import { ShoppingCartIcon } from "lucide-react";
// Import component Link từ Next.js - cho phép tạo điều hướng giữa các trang mà không cần tải lại toàn bộ trang
import Link from "next/link";

// Định nghĩa component React dạng hàm có tên Menu
// Component này không nhận bất kỳ props (tham số) nào
export default function Menu() {
    return (
        // Div container với thuộc tính flexbox để đẩy nội dung sang bên phải
        <div className="flex justify-end">
            {/* Phần tử điều hướng với kiểu flexbox để tạo khoảng cách giữa các mục */}
            <nav className="flex gap-3 w-full">
                {/* Liên kết đến trang đăng nhập */}
                {/* Component Link cho phép điều hướng phía client mà không làm mới toàn trang */}
                {/* className áp dụng các lớp CSS của Tailwind để tạo kiểu */}
                {/* aria-label cung cấp thông tin trợ năng cho trình đọc màn hình */}
                <Link href="/login" className="header-button flex items-center" aria-label="Sign in">
                    {/* UserIcon là biểu tượng SVG với kích thước cụ thể */}
                    {/* <UserIcon className="h-6 w-6 mx-auto" /> */}
                    {/* Nhãn văn bản cho liên kết với kiểu chữ đậm */}
                    {/* <span className="font-bold text-sm">Sign in</span> */}
                   Hello, Sigin
                </Link>

                {/* Liên kết đến trang giỏ hàng - có cấu trúc tương tự như liên kết đăng nhập */}
                <Link href="/cart" className="header-button" aria-label="Cart">
                    {/* Biểu tượng giỏ hàng */}
                    <ShoppingCartIcon className="h-6 w-6  mx-auto" />
                    {/* Nhãn văn bản cho giỏ hàng */}
                    <span className="font-bold text-sm">Cart</span>
                </Link>
            </nav>
        </div>
    );
}
