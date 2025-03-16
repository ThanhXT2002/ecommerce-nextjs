"use client"; // Đánh dấu đây là client component trong Next.js, cho phép sử dụng các hook React và tương tác người dùng

import { ChevronUp } from "lucide-react"; // Import biểu tượng mũi tên lên từ thư viện lucide-react
import { Button } from "../ui/button"; // Import component Button từ thư mục ui
import Link from "next/link"; // Import component Link từ Next.js để điều hướng không cần tải lại trang
import { APP_NAME } from "@/lib/constants"; // Import tên ứng dụng từ file constants

export default function Footer() {
    // Định nghĩa và export component Footer
    return (
        <footer className="bg-black text-white underline-link">
            {/* Phần footer có màu nền đen, chữ trắng, và các link được gạch chân */}
            <div className="w-full">
                <Button
                    variant="ghost" // Kiểu nút "ghost" - không có nền đậm
                    className="bg-gray-800 w-full rounded-none" // Nút có màu nền xám đậm, chiều rộng 100%, không bo góc
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Khi click, cuộn trang lên đầu với hiệu ứng mượt
                >
                    <ChevronUp className="mr-2 h-4 w-4" /> {/* Biểu tượng mũi tên lên, margin right 2, kích thước 4 */}
                    Back to top {/* Nội dung nút */}
                </Button>
            </div>
            <div className="p-4">
                {/* Phần nội dung footer chính với padding 4 */}
                <div className="flex justify-center gap-3 text-sm">
                    {/* Phần các liên kết chính sách, căn giữa, khoảng cách 3, cỡ chữ nhỏ */}
                    <Link href="/page/conditions-of-use">Conditions of Use</Link> {/* Liên kết đến trang điều khoản sử dụng */}
                    <Link href="/page/privacy-policy"> Privacy Notice</Link> {/* Liên kết đến trang chính sách riêng tư */}
                    <Link href="/page/help">Help</Link> {/* Liên kết đến trang trợ giúp */}
                </div>
                <div className="flex justify-center text-sm">
                    {/* Phần thông tin bản quyền, căn giữa, cỡ chữ nhỏ */}
                    <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p> {/* Sử dụng biến APP_NAME từ constants */}
                </div>
                <div className="mt-8 flex justify-center text-sm text-gray-400">
                    {/* Phần địa chỉ và liên hệ, margin top 8, căn giữa, chữ nhỏ màu xám */}
                    123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
                </div>
            </div>
        </footer>
    );
}
