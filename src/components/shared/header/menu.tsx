// Import component Link từ Next.js - cho phép tạo điều hướng giữa các trang mà không cần tải lại toàn bộ trang
import Link from "next/link";
import CartButton from "./cart-button";

// Định nghĩa component React dạng hàm có tên Menu
// Component này không nhận bất kỳ props (tham số) nào
export default function Menu() {
    return (
        // Div container với thuộc tính flexbox để đẩy nội dung sang bên phải
        <div className="flex justify-end">
            {/* Phần tử điều hướng với kiểu flexbox để tạo khoảng cách giữa các mục */}
            <nav className="flex gap-3 w-full">
                <Link href="/login" className="header-button flex items-center" aria-label="Sign in">
                   Hello, Sigin
                </Link>

                {/* Liên kết đến trang giỏ hàng - có cấu trúc tương tự như liên kết đăng nhập */}
                <CartButton />
            </nav>
        </div>
    );
}
