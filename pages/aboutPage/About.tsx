import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (

    <div className='about_page'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>چشم انداز و ماموریت</Accordion.Header>
          <Accordion.Body>
          چشم انداز:
          <br />
          اگر مالیاتی قرار است پرداخت شود، با آساک راحت تر و اصولی تر انجام می شود.
        <br />
        ماموریت: 
        <br />
        جذب و حفظ مشتری با خدمات فوق العاده ارزشمند و توانمندسازی آنها برای ایجاد رقابت منصفانه و جامعه مالی قدرتمند

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>تاریخچه شرکت</Accordion.Header>
          <Accordion.Body>
          موسسه آساک قرن  در دی ماه 1398  فعالیت خود را در زمینه آموزش و پژوهش و خدمات مشاوره و حسابداری مالیاتی و نیز فعالیت های مرتبط با حوزه آموزش به مودیان مالیاتی در ارتباط با قانون پایانه های فروشگاهی و سامانه مودیان و تولید و فروش نرم افزار آغاز نموده است. این شرکت در حوزه ارائه خدمات مالی و مالیاتی، با اتکا به مجوزها و گواهینامه های رسمی و نیروهای متخصص، فعالیت می نماید. رسالت اصلی این مجموعه حفظ اطلاعات مالی صاحبان کسب و کار و بهبود نظام مالیاتی کشور می باشد.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>چارت سازمانی</Accordion.Header>
          <Accordion.Body>
چارت سازمانی در حال تعریف و ساخت می‌باشد.....
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>کاتالوگ</Accordion.Header>
          <Accordion.Body>
              <img src={"./assets/image/product/Law firm-pana.svg"} alt="" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default About;