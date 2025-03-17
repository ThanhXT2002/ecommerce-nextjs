import { HomeCard } from "@/components/shared/home/home-card"; // Import component HomeCard để hiển thị các thẻ sản phẩm
import { HomeCarousel } from "@/components/shared/home/home-carousel"; // Import component HomeCarousel để hiển thị slider ảnh
import ProductSlider from "@/components/shared/product/product-slider";
import { Card, CardContent } from "@/components/ui/card";
import { getAllCategories, getProductsByTag, getProductsForCard } from "@/lib/actions/product.actions"; // Import các hàm để lấy dữ liệu sản phẩm và danh mục
import data from "@/lib/data"; // Import dữ liệu tĩnh từ file data
import { toSlug } from "@/lib/utils"; // Import hàm chuyển đổi chuỗi thành định dạng slug

// Định nghĩa component HomePage là một async component (tính năng của Next.js)
// Cho phép trực tiếp sử dụng các hàm bất đồng bộ (async/await) trong component
export default async function HomePage() {
  // Lấy danh sách các danh mục sản phẩm và chỉ giữ lại 4 danh mục đầu tiên
  const categories = (await getAllCategories()).slice(0, 4);
  
  // Lấy danh sách 4 sản phẩm mới nhất (có tag "new-arrival")
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  
  // Lấy danh sách 4 sản phẩm nổi bật (có tag "featured")
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  
  // Lấy danh sách 4 sản phẩm bán chạy nhất (có tag "best-seller")
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });
  
  // Tạo một mảng chứa thông tin cho các phần hiển thị trên trang chủ
  const cards = [
    // Phần hiển thị danh mục sản phẩm
    {
      title: "Categories to explore", // Tiêu đề của phần này
      link: {
        text: "See More", // Văn bản của liên kết
        href: "/search", // Đường dẫn khi nhấp vào liên kết "Xem thêm"
      },
      // Chuyển đổi mảng categories thành định dạng phù hợp cho component HomeCard
      items: categories.map((category) => ({
        name: category, // Tên danh mục
        image: `/images/${toSlug(category)}.jpg`, // Đường dẫn hình ảnh, sử dụng hàm toSlug để chuyển tên thành định dạng URL
        href: `/search?category=${category}`, // Đường dẫn khi nhấp vào danh mục, dẫn đến trang tìm kiếm với danh mục tương ứng
      })),
    },
    // Phần hiển thị sản phẩm mới
    {
      title: "Explore New Arrivals", // Tiêu đề phần sản phẩm mới
      items: newArrivals, // Danh sách các sản phẩm mới đã lấy ở trên
      link: {
        text: "View All", // Văn bản của liên kết
        href: "/search?tag=new-arrival", // Đường dẫn đến trang tìm kiếm với tag "new-arrival"
      },
    },
    // Phần hiển thị sản phẩm bán chạy
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival", // Chú ý: Đây có thể là một lỗi, đáng lẽ phải là "best-seller" thay vì "new-arrival"
      },
    },
    // Phần hiển thị sản phẩm nổi bật
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "Shop Now",
        href: "/search?tag=new-arrival", // Chú ý: Đây cũng có thể là một lỗi, đáng lẽ phải là "featured"
      },
    },
  ];

  const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })
  const bestSellingProducts = await getProductsByTag({ tag: 'best-seller' })

  // Trả về nội dung JSX để hiển thị trang chủ
  return (
    <>
      {/* Render component HomeCarousel với dữ liệu carousel từ file data */}
      <HomeCarousel items={data.carousels} />
      
      {/* 
        Container chứa các phần sản phẩm
        - md:p-4: thêm padding 4 đơn vị khi màn hình từ kích thước trung bình trở lên
        - md:space-y-4: tạo khoảng cách 4 đơn vị giữa các phần tử con (trên trục y) từ màn hình trung bình
        - bg-border: sử dụng màu nền được định nghĩa với biến --border trong tailwind
      */}
      <div className="md:p-4 md:space-y-4 bg-gray-200">
        {/* Render component HomeCard với dữ liệu đã tạo ở trên */}
        <HomeCard cards={cards} />
        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3 bg-white'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>

        <Card className='w-full rounded-none'>
           <CardContent className='p-4 items-center gap-3 bg-white'>
             <ProductSlider
               title='Best Selling Products'
               products={bestSellingProducts}
               hideDetails
             />
           </CardContent>
         </Card>

      </div>
    </>
  );
}
