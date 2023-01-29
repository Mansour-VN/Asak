import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { TbPhoneCalling } from 'react-icons/tb';
import  Button from '../Button/Button';
import SocialMedial from '../SocialMedia/SocialMedia';


const Header = () => {
    return ( 
     <div className='header'>
          <div className='header_title'>
               <div className="header_title_Logo">
               <img src="./assets/image/DIAN.png" alt="" />
               <p>آساک قرن</p>
               </div>
               <div className='header_title__Media'>
                    <SocialMedial/>
               </div>
               <div className="header_title_CallAndCatalog">
                    <div>
                         <p>021-96646</p>
                         <TbPhoneCalling/>
                    </div>
                    <Button  text={"دانلود کاتالوگ"} size={"normal"} color={"official"}/>
               </div>
          </div>
          <div className='header_menu'>
               <ul>
                    <li>آساک</li>
                    <li>محصولات</li>
                    <li>خدمات</li>
                    <li>آساکی شو</li>
                    <li> تماس با ما </li>
               </ul>
          </div>
     </div>
     );
}
 
export default Header;