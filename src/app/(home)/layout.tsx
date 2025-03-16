// Import các component chung được sử dụng trong layout
import Header from '@/components/shared/header' // Import component Header từ thư mục components/shared
import Footer from '@/components/shared/footer' // Import component Footer từ thư mục components/shared

// Định nghĩa một layout component cho các trang thuộc nhóm (home)
// Hàm này là một async function - có thể chứa các thao tác bất đồng bộ
// HomeLayout bọc tất cả các component con được truyền vào thông qua props children
export default async function HomeLayout({
    children,
}: {
    // Khai báo kiểu dữ liệu cho props: children có kiểu React.ReactNode
    // React.ReactNode là kiểu dữ liệu có thể chứa bất kỳ thứ gì có thể render trong React
    children: React.ReactNode
}) {
    return (
        // Div chính bọc toàn bộ layout với class để căn chỉnh theo chiều dọc và chiếm ít nhất toàn bộ chiều cao màn hình
        <div className='flex flex-col min-h-screen'>
            {/* Component Header sẽ hiển thị ở phần trên cùng của trang */}
            <Header />
            
            {/* 
                Phần main chứa nội dung chính của trang
                - flex-1: cho phép phần main mở rộng chiếm hết không gian còn lại
                - flex flex-col: sắp xếp các phần tử con theo chiều dọc
                - children: nội dung của trang con sẽ được render ở đây
            */}
            <main className='flex-1 flex flex-col'>{children}</main>
            
            {/* Component Footer sẽ hiển thị ở phần dưới cùng của trang */}
            <Footer />
        </div>
    )
}

/*
Trong Next.js, việc sử dụng dấu ngoặc đơn () trong tên thư mục như (home) là một tính năng được gọi là "Route Groups" 
hoặc "Nhóm Tuyến Đường". Tôi sẽ giải thích chi tiết về điều này:

Giải thích về thư mục có dấu ngoặc đơn trong Next.js
Trong Next.js App Router, thư mục có dấu ngoặc đơn như (home)/layout.tsx phục vụ mục đích đặc biệt:

Nhóm tuyến đường (Route Groups): Thư mục có dấu ngoặc đơn được sử dụng để tổ chức code mà không ảnh hưởng đến cấu trúc URL.

Không ảnh hưởng URL: Phần tên trong dấu ngoặc đơn (home) sẽ không xuất hiện trong đường dẫn URL của trang web. 
Ví dụ, một file nằm trong app/(home)/about/page.tsx sẽ được truy cập bằng URL /about chứ không phải /home/about.

Tổ chức layout: Bạn có thể sử dụng route groups để chia các trang thành các nhóm với layout riêng biệt. Ví dụ:

app/(shop)/layout.tsx - Layout cho các trang liên quan đến mua sắm
app/(admin)/layout.tsx - Layout riêng cho trang quản trị
Nhóm logic: Giúp tổ chức code theo chức năng hoặc mục đích sử dụng, giữ cho cấu trúc dự án gọn gàng và dễ bảo trì.

Ví dụ thực tế:
app/
  (marketing)/
    about/page.tsx     // URL: /about
    contact/page.tsx   // URL: /contact
    layout.tsx         // Layout chung cho phần marketing
  (shop)/
    products/page.tsx  // URL: /products
    cart/page.tsx      // URL: /cart
    layout.tsx         // Layout chung cho phần shop
*/

