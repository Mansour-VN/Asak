import Button from '../Button/Button';
import * as React from 'react';
import Image from 'next/image';
interface Text {
    textTitle: string,
    src: any,
}

const ProductBox: React.FC<Text> = ({ textTitle, src }) => {
    return (
        <div className="boxProductHomePage">
            <div className='boxProductHomePage__imageBox'>
                <Image
                    alt="Picture of the author"
                    src={src}
                    width={200}
                    height={200}
                />
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

export default ProductBox;