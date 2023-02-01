import SocialMedial from "../SocialMedia/SocialMedia";

const  Footer =()=> {
    return (
    <>
        <div className="footer">
            <div className="contain">            
                <div className="col">
                    <h1>ارتباط با ما</h1>
                    <ul>
                        <li>021-96646</li>
                        <li>
                            تهران، شهرک غرب 
                            <br />
                            بلوار دادمان، میلاد چهار، پلاک5
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h1>سایت های موردنیاز</h1>
                    <ul>
                        <li>
                            <a href="https://dianhamrah.ir/">دیان همراه‌فردا</a>
                        </li>
                        <li>
                            <a href="https://mefa.ir/fa-IR/mefa/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C">وزارت اقتصاد و دارایی</a>
                        </li>
                        <li>
                            <a href="https://www.tax.gov.ir/Pages/HomePage">سازمان امورمالیاتی کشور</a>
                        </li>
                        <li>
                            <a href="https://www.evat.ir/">سامانه عملیات الکترونیک مالیات بر ارزش اقزوده</a>
                        </li>
                        <li>
                            <a href="https://irsherkat.ssaa.ir/Design/EstablishmentRequest/Index.aspx">سازمان ثبت اسناد و املاک کشور</a>
                        </li>

                    </ul>
                </div>
                <div className="col">
                    <h1>لینک‌های پر کاربرد</h1>
                    <ul>
                        <li>
                            <a href="https://register.tax.gov.ir/Pages/Login">پرتال ثبت نام و خدمات جامع الکترونیک مالیاتی</a>
                        </li>
                        <li>
                            <a href="https://payments.tax.gov.ir/">پرداخت الکترونیکی مالیات</a>
                        </li>
                        <li>
                            <a href="https://my.tax.gov.ir/">درگاه ملی خدمات الکترونیک سازمان امورمالیاتی</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <div className="col social">
                    <SocialMedial/>
            </div>
            </div>
            
            <div className="clearfix"></div>
        </div>
       </>
    );
}
export default Footer;
