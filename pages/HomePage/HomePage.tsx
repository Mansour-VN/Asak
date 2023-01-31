import ProductBox from "./../../components/BoxProducts/ProductsBox.HomePage";
import Button from "@/components/Button/Button";
import { RiSearchLine } from 'react-icons/ri';
import Carousel from "./../../components/Carousel/Carousel";
import Product from "../../components/Products/Product";

// import Button from 'react-bootstrap/Butt

const HomePage = () => {
    return (
        <div className="homePage" id="home">
            <section className="homePage__carouselBox">
                <div className="homePage__carouselBox__title">
                    <h2>نرم افزارهای استاندارد سازی و ارسال به سامانه مودیان مالیاتی را از ما بخواهید</h2>
                </div>
                <Carousel />
            </section>
            <section className="homePage__products">

                <div className="homePage__products__title">
                    <p className="homePage__products__title__text">محصولات و خدمات آساک</p>
                </div>
                <div className="homePage__products__boxS">
                    <Product />
                </div>

            </section>
            <section className="homePage__MyFamily">
                <div className="homePage__MyFamily__title">
                    <p className="homePage__MyFamily__title__text">عضو خانواده آساک شوید</p>
                </div>
                <div className="homePage__MyFamily__contact">
                    <div className="homePage__MyFamily__contact__text">
                        <p>

                            جهت دریافت هرگونه خدمات و خرید محصولات، آموزش و مشاور مالی و مالیاتی نرم افزارهای استاندارد سازی و... فرم مقابل را تکیمل نموده تا ما با شما تماس بگیریم.
                    
                            <br />

                            از اینکه آساک قرن را انتخاب کردید مفتخریم.
                        </p>

                    </div>
                    <div>
                        <Button text={"فرم درخواست"} size={"large"} color={"official"} />
                    </div>
                </div>
            </section>
            <section className="homePage__Step">
                <div className="homePage__Step__box">
                    <div className="homePage__Step__box__title">
                        <p>با آساک مطمئن قدم بردارید</p>
                    </div>
                    <div className="homePage__Step__box__content">
                        <div id="searchBox" className="homePage__Step__box__content__search">

                            <input type="text" placeholder=" در آساک دنبال چه می‌گردید" />

                            <div className="homePage__Step__box__content__search__btn">
                                <Button text={"جستجو"} size={"large"} color={"official"} />
                                < RiSearchLine />
                            </div>

                        </div>

                        <div className="homePage__Step__box__content__text">
                            <p>
                                <strong>
                                با خیال راحت همراه همیشگی آساک باشید.
                                </strong>
                                <br />
                                دلیل اعتماد شما به آساک حاصل چندین سال تجربه و کار حرفه ای ماست.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;