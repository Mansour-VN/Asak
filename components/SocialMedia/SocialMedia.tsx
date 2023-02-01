import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';

const SocialMedial = () => {
    return (
        <>
            <div className="socialMedia">
                <div className='socialMedia_box'>
                    <a href="https://api.whatsapp.com/send?phone=989045736529&text=سلام وقت بخیر">
                        <BsWhatsapp />
                    </a>

                    <a href="https://instagram.com/dianhamrahefarda?igshid=Yzg5MTU1MDY=">
                      <AiOutlineInstagram />
                    </a>
                    <a href="https://t.me/dianhamrahefarda">
                      <RiTelegramLine />
                    </a>
                    
                    <a href="mailto:info@dianhamrah.ir?subject=test&body=test" target="_top">
                        <HiOutlineMail />
                    </a>

                    <a href="tel:+982196646">
                        <TbPhoneCall />
                    </a>
                </div>
            </div>
        </>

    );
}

export default SocialMedial;