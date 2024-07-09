import React, { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CartIcon from "../components/CartIcon";
import CartData from "../data/cartdata.json";

export default function About() {
  const [itemCount] = useState(CartData.length); // Thêm state cho số lượng sản phẩm trong giỏ hàng

  return (
    <div className="bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
        className="h-[500px] w-full"
      >
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src="https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?cs=srgb&dl=pexels-lathinh-11742808.jpg&fm=jpg"
              className="h-full w-full object-cover"
              alt="Images"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white font-bold text-9xl">About Us</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src="https://images.pexels.com/photos/1337974/pexels-photo-1337974.jpeg?cs=srgb&dl=pexels-minan1398-1337974.jpg&fm=jpg"
              className="h-full w-full object-cover"
              alt="Images"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white font-bold text-9xl">About Us</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-col items-center justify-center gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 text-center font-bold text-3xl lg:text-6xl">
          Our Vision
        </h1>
        <div className="text-gray-400 text-center text-xs sm:text-sm">
          "Another subheading—maybe it's related to the
          <br />
          image on the left, or the button below."
        </div>
        <Link
          to={"/search"}
          className="p-3 bg-black text-white rounded-lg sm:text-sm hover:bg-white hover:text-black hover:underline"
        >
          Go To Search
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-slate-700 border-b-2 pb-2 border-gray-300">
          Giới Thiệu Về Chúng Tôi
        </h2>
        <p className="text-gray-600 mt-4">
          Chúng tôi là một đội ngũ những người đam mê ẩm thực, luôn nỗ lực để
          mang đến những món ăn ngon miệng và trải nghiệm ẩm thực tuyệt vời cho
          bạn. Tại đây, chúng tôi chia sẻ các công thức món ăn đặc biệt mà bạn
          có thể dễ dàng thực hiện tại nhà. Ngoài ra, chúng tôi còn cung cấp
          dịch vụ bán món ăn, giúp bạn thưởng thức những món ăn ngon mà không
          cần phải tốn thời gian nấu nướng.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-600 border-b-2 pb-2 border-gray-300">
          Chia Sẻ Công Thức Món Ăn
        </h3>
        <p className="text-gray-600 mt-4">
          Ẩm thực là niềm đam mê của chúng tôi, và chúng tôi muốn chia sẻ niềm
          đam mê đó với bạn. Mỗi công thức được chia sẻ tại đây đều được chúng
          tôi thử nghiệm kỹ lưỡng, từ việc chọn lựa nguyên liệu đến cách nấu
          nướng. Chúng tôi tin rằng ẩm thực không chỉ là việc nấu ăn mà còn là
          nghệ thuật, là cách để kết nối mọi người lại với nhau.
          <br />
          <br />
          Các công thức của chúng tôi rất đa dạng, từ những món ăn truyền thống
          mang đậm hương vị quê hương đến những món ăn hiện đại phong cách
          fusion. Bạn sẽ tìm thấy các món chính, món tráng miệng, món ăn nhẹ và
          cả đồ uống trong kho tàng công thức của chúng tôi. Mỗi món ăn đều được
          hướng dẫn chi tiết từng bước, giúp bạn dễ dàng thực hiện và thưởng
          thức.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-600 border-b-2 pb-2 border-gray-300">
          Dịch Vụ Bán Món Ăn
        </h3>
        <p className="text-gray-600 mt-4">
          Nếu bạn không có thời gian hoặc không tự tin vào khả năng nấu nướng
          của mình, hãy để chúng tôi giúp bạn. Chúng tôi cung cấp dịch vụ bán
          món ăn với tiêu chí mang lại sự tiện lợi và chất lượng cao nhất cho
          khách hàng. Mỗi món ăn được chế biến từ những nguyên liệu tươi ngon
          nhất, tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh an toàn thực phẩm.
          <br />
          <br />
          Chúng tôi hiểu rằng mỗi bữa ăn không chỉ là để no bụng mà còn là để
          thưởng thức và tận hưởng. Vì vậy, chúng tôi luôn chú trọng đến hương
          vị và cách trình bày món ăn. Bạn chỉ cần đặt hàng qua website hoặc
          hotline, và chúng tôi sẽ giao món ăn tận nơi, đảm bảo món ăn luôn tươi
          ngon và nóng hổi khi đến tay bạn.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-600 border-b-2 pb-2 border-gray-300">
          Sứ Mệnh và Tầm Nhìn
        </h3>
        <p className="text-gray-600 mt-4">
          Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm ẩm
          thực tuyệt vời nhất. Chúng tôi không ngừng nỗ lực để cải thiện chất
          lượng món ăn và dịch vụ, nhằm đáp ứng mọi nhu cầu và mong muốn của
          khách hàng. Tầm nhìn của chúng tôi là trở thành một thương hiệu ẩm
          thực uy tín và được yêu thích nhất trong lòng mọi người.
          <br />
          <br />
          Chúng tôi tin rằng ẩm thực có thể kết nối mọi người lại với nhau, tạo
          ra những kỷ niệm đẹp và những khoảnh khắc đáng nhớ. Chính vì vậy, mỗi
          món ăn chúng tôi tạo ra đều chứa đựng tình yêu và sự tận tâm, với hy
          vọng mang lại niềm vui và sự hài lòng cho bạn.
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-slate-600 border-b-2 pb-2 border-gray-300">
          Liên hệ với chúng tôi:
        </h3>
        <p className="text-gray-600 mt-4">
          Địa chỉ: 69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, TP. HCM
        </p>
        <p className="text-gray-600">Hotline: 028 7105 9999</p>
        <p className="text-gray-600">Email: info@vlu.edu.vn</p>
        <div>
          <p className="text-gray-600">
            Website:{" "}
            <a
              href="https://www.vlu.edu.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              vlu.edu.vn
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center gap-10 mt-4">
          <a
            href="https://www.facebook.com/vanlanguniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-10"
            />
          </a>
          <a
            href="https://www.youtube.com/vanlanguniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
              alt="YouTube"
              className="h-10"
            />
          </a>
          <a
            href="https://www.instagram.com/vanlanguniversity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-10"
            />
          </a>
        </div>
      </div>

      <Link to="/cart">
        <CartIcon itemCount={itemCount} />
      </Link>
    </div>
  );
}
