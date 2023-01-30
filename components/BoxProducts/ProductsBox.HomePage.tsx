import Button from '../Button/Button';
import * as React from 'react'

interface Text {
    textTitle :string,
    src: any,
}

const ProductBox:React.FC<Text> = ({textTitle, src}) => {
    return ( 
        <div className="boxProductHomePage">
            <div className='boxProductHomePage__imageBox'>
                <img src={src} alt="" />
            </div>
            <div className='boxProductHomePage__textTitle'>
                <p>{textTitle}</p>
            </div>
            <div>
                <Button text={"بیشتر بدایند"} size={"normal"} />
            </div>
        </div>
     );
}
 
export default ProductBox ;