import ProductBox from "./../../components/BoxProducts/ProductsBox.HomePage";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import { RiSearchLine } from 'react-icons/ri';

// import Button from 'react-bootstrap/Butt

const HomePage = () => {
    return (
        <div className="homePage" id="home">
            <section className="homePage__Introduction">
                <img src="/assets/image/titlePage.jpg" className="homePage__Introduction__background" />
                <div className="homePage__Introduction__content">
                    <img src="/assets/image/DIAN.png" />
                    <h1>
                        دیان همراه فردا
                        <br />
                        اولین معتمد مالیاتی کشور
                    </h1>
                </div>
            </section>
            <section className="homePage__products">

                <div className="homePage__products__title">
                    <p className="homePage__products__title__text">محصولات و خدمات آساک</p>
                </div>
                <div className="homePage__products__boxS">
                    <ProductBox textTitle={"قوانین مالیاتی"} />
                    <ProductBox textTitle={"قوانین مالیاتی"} />
                    <ProductBox textTitle={"قوانین مالیاتی"} />
                    <ProductBox textTitle={"قوانین مالیاتی"} />
                </div>

            </section>
            <section className="homePage__MyFamily">
                <div className="homePage__MyFamily__title">
                    <p className="homePage__MyFamily__title__text">عضو خانواده آساک شوید</p>
                </div>
                <div className="homePage__MyFamily__contact">
                    <div className="homePage__MyFamily__contact__text">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>
                    <div>
                        <Button text={"به زودی"} size={"large"} color={"official"} />
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
                                دلیل اعتماد شما به آساک حاصل چندین سال تجربه و کار حرفه ای است، با خیال راحت همراه همیشگی آساک خواهید شد. مطمئنیم
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;