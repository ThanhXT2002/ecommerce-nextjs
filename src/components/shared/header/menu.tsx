import CartButton from "./cart-button";
import UserButton from "./user-button";

// Định nghĩa component React dạng hàm có tên Menu
// Component này không nhận bất kỳ props (tham số) nào
export default function Menu() {
    return (
        // Div container với thuộc tính flexbox để đẩy nội dung sang bên phải
        <div className="flex justify-end">
            {/* Phần tử điều hướng với kiểu flexbox để tạo khoảng cách giữa các mục */}
            <nav className="flex gap-3 w-full">
                <UserButton />

                {/* Liên kết đến trang giỏ hàng - có cấu trúc tương tự như liên kết đăng nhập */}
                <CartButton />
            </nav>
        </div>
    );
}
