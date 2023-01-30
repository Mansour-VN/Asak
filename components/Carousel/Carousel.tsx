import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>دیان همراه فردا اولین معتمد مالیاتی کشور</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب ارسال کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax2.jpg"    
                alt="Second slide"
        />

        <Carousel.Caption>
          <h3>اولین معتمد نوع 2 و 3 مالیاتی کشور</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب ارسال کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax4.jpg"    
          alt="Third slide"
        />

        <Carousel.Caption>
              <h3>دیان همراه امور مالیاتی شمارا هموار می‌کند</h3>
            <p>با دیان همراه آموزش ببینید با آساک صورت حساب ارسال کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax1.jpg"    
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ارائه انواع خدمات مالی و مالیاتی</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب ارسال کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;