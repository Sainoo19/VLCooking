import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function About() {
  return (
    <div>
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

      <div className="flex flex-col items-center justify-center gap-6 p-28 px-3 max-w-6xl  mx-auto">
        <h1 className="text-slate-700 text-center font-bold text-3xl lg:text-6xl tex">
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
      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-8 my-10">
        <h2 className="text-3xl font-semibold text-slate-700">
          Giới Thiệu Về Chúng Tôi
        </h2>
        <p className="text-gray-600">
          Chúng tôi là một đội ngũ những người đam mê ẩm thực, luôn nỗ lực để
          mang đến những món ăn ngon miệng và trải nghiệm ẩm thực tuyệt vời cho
          bạn. Tại đây, chúng tôi chia sẻ các công thức món ăn đặc biệt mà bạn
          có thể dễ dàng thực hiện tại nhà. Ngoài ra, chúng tôi còn cung cấp
          dịch vụ bán món ăn, giúp bạn thưởng thức những món ăn ngon mà không
          cần phải tốn thời gian nấu nướng.
        </p>
        <h3 className="text-2xl font-semibold text-slate-600">
          Chia Sẻ Công Thức Món Ăn
        </h3>
        <p className="text-gray-600">
          Ẩm thực là niềm đam mê của chúng tôi, và chúng tôi muốn chia sẻ niềm
          đam mê đó với bạn. Mỗi công thức được chia sẻ tại đây đều được chúng
          tôi thử nghiệm kỹ lưỡng, từ việc chọn lựa nguyên liệu đến cách nấu
          nướng. Chúng tôi tin rằng ẩm thực không chỉ là việc nấu ăn mà còn là
          nghệ thuật, là cách để kết nối mọi người lại với nhau.
          <br />
          Các công thức của chúng tôi rất đa dạng, từ những món ăn truyền thống
          mang đậm hương vị quê hương đến những món ăn hiện đại phong cách
          fusion. Bạn sẽ tìm thấy các món chính, món tráng miệng, món ăn nhẹ và
          cả đồ uống trong kho tàng công thức của chúng tôi. Mỗi món ăn đều được
          hướng dẫn chi tiết từng bước, giúp bạn dễ dàng thực hiện và thưởng
          thức.
        </p>
        <h3 className="text-2xl font-semibold text-slate-600">
          Dịch Vụ Bán Món Ăn
        </h3>
        <p className="text-gray-600">
          Nếu bạn không có thời gian hoặc không tự tin vào khả năng nấu nướng
          của mình, hãy để chúng tôi giúp bạn. Chúng tôi cung cấp dịch vụ bán
          món ăn với tiêu chí mang lại sự tiện lợi và chất lượng cao nhất cho
          khách hàng. Mỗi món ăn được chế biến từ những nguyên liệu tươi ngon
          nhất, tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh an toàn thực phẩm.
          <br />
          Chúng tôi hiểu rằng mỗi bữa ăn không chỉ là để no bụng mà còn là để
          thưởng thức và tận hưởng. Vì vậy, chúng tôi luôn chú trọng đến hương
          vị và cách trình bày món ăn. Bạn chỉ cần đặt hàng qua website hoặc
          hotline, và chúng tôi sẽ giao món ăn tận nơi, đảm bảo món ăn luôn tươi
          ngon và nóng hổi khi đến tay bạn.
        </p>

        <h3 className="text-2xl font-semibold text-slate-600">
          Sứ Mệnh và Tầm Nhìn
        </h3>
        <p className="text-gray-600">
          Sứ mệnh của chúng tôi là mang đến cho khách hàng những trải nghiệm ẩm
          thực tuyệt vời nhất. Chúng tôi không ngừng nỗ lực để cải thiện chất
          lượng món ăn và dịch vụ, nhằm đáp ứng mọi nhu cầu và mong muốn của
          khách hàng. Tầm nhìn của chúng tôi là trở thành một thương hiệu ẩm
          thực uy tín và được yêu thích nhất trong lòng mọi người.
          <br />
          Chúng tôi tin rằng ẩm thực có thể kết nối mọi người lại với nhau, tạo
          ra những kỷ niệm đẹp và những khoảnh khắc đáng nhớ. Chính vì vậy, mỗi
          món ăn chúng tôi tạo ra đều chứa đựng tình yêu và sự tận tâm, với hy
          vọng mang lại niềm vui và sự hài lòng cho bạn.
        </p>
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-slate-600">
            Liên hệ với chúng tôi:
          </h3>
          <p className="text-gray-600">
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
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-slate-600">
            Theo dõi chúng tôi trên các mạng xã hội:
          </h3>
          <div>
            <p className="text-gray-600">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/truongdaihocvanlang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                fb.com/truongdaihocvanlang
              </a>
            </p>
            <p className="text-gray-600">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/vanlanguniversity/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @vanlanguniversity
              </a>
            </p>
            <p className="text-gray-600">
              YouTube:{" "}
              <a
                href="https://www.youtube.com/@vanlanguniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vanlanguniversity
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
