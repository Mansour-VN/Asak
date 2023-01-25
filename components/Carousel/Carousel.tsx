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
          <h3>شعاری برای همکاری</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب صادر کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax2.jpg"    
                alt="Second slide"
        />

        <Carousel.Caption>
        <h3>شعاری برای همکاری</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب صادر کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax4.jpg"    
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>شعاری برای همکاری</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب صادر کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/image/carousel/tax1.jpg"    
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>شعاری برای همکاری</h3>
          <p>با دیان همراه آموزش ببینید با آساک صورت حساب صادر کنید</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;