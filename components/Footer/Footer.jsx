import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Footer = () => {
    return (
        <div id="Footer">
            <footer className="footer p-10  text-base-content mt-8 container mx-auto">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p> شبکه‌های اجتماعی </p>
                        <SocialMedia/>
                </div>
                <div>
                    <span className="footer-title">لینک‌های پرکاربرد</span>
                    <a href="https://register.tax.gov.ir/Pages/Login" className="link link-hover">پرتال ثبت نام و خدمات جامع الکترونیک مالیاتی</a>           
                    <a href="https://payments.tax.gov.ir/" className="link link-hover">پرداخت الکترونیکی مالیات</a>
                    <a href="https://my.tax.gov.ir/" className="link link-hover">درگاه ملی خدمات الکترونیک سازمان امورمالیاتی</a>
                </div>
                <div>
                    <span className="footer-title">سایت‌های مورد نیاز</span>
                    <a href="https://dianhamrah.ir/" className="link link-hover">دیان همراه‌فردا</a>
                    <a href="https://mefa.ir/fa-IR/mefa/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C" className="link link-hover">وزارت اقتصاد و دارایی</a>
                    <a href="https://www.tax.gov.ir/Pages/HomePage" className="link link-hover">سازمان امورمالیاتی کشور</a>
                    <a href="https://www.evat.ir/" className="link link-hover">سامانه عملیات الکترونیک مالیات بر ارزش اقزوده</a>
                    <a href="https://irsherkat.ssaa.ir/Design/EstablishmentRequest/Index.aspx" className="link link-hover">سازمان ثبت اسناد و املاک کشور</a>
                </div>
                <div>
                    <span className="footer-title">ارتباط با ما</span>
                    <a className="link link-hover"> 021-96646 </a>
                    <a className="link link-hover"> 
                         تهران، شهرک غرب
                        بلوار دادمان، میلاد چهار، پلاک5 
                    </a>
                    <h3 className="text-red-400">:ساعت کاری</h3>
                    <a>
                          شنبه تا چهارشنبه از ساعت 9 الی 17
                        <br />
                        پنج شنبه: از ساعت 9 الی 13
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer