import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';

const SocialMedial = () => {
    return (  
        <>
            <div className="socialMedia">
                    <div className='socialMedia_box'>
                    <a href="https://api.whatsapp.com/send?phone=989045736529&text=Hello this is the starting message">
                         <BsWhatsapp/>
                    </a>
                    <AiOutlineInstagram/>
                    <RiTelegramLine/>
                    </div>
               </div>
        </>

    );
}
 
export default SocialMedial;