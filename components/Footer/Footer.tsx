import SocialMedial from "../SocialMedia/SocialMedia";

const  Footer =()=> {
    return (
    <>
        <div className="footer">
            <div className="contain">            
                <div className="col">
                    <h1>ارتباط با ما</h1>
                    <ul>
                        <li>سایت ۱</li>
                        <li>سایت ۲</li>
                        <li>سایت ۳</li>
                        <li>سایت ۴</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>درباره ما </h1>
                    <ul>
                        <li>سایت ۱</li>
                        <li>سایت ۲</li>
                        <li>سایت ۳</li>
                        <li>سایت ۴</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>سایت های مرتبط</h1>
                    <ul>
                        <li>سایت ۱</li>
                        <li>سایت ۲</li>
                        <li>سایت ۳</li>
                        <li>سایت ۴</li>

                    </ul>
                </div>
                <div className="col">
                    <h1>فرم های پر کاربرد</h1>
                    <ul>
                        <li>سایت ۱</li>
                        <li>سایت ۲</li>
                        <li>سایت ۳</li>
                        <li>سایت ۴</li>
                    </ul>
                </div>
            </div>
            <div>
            <div className="col social">
                    <h1>Social</h1>
                    <SocialMedial/>
            </div>
            </div>
            
            <div className="clearfix"></div>
        </div>
       </>
    );
}
export default Footer;
