import { Link } from "react-router-dom";
import Button from "../Button/Primary/Button";
import Image from "../Image/Image";

export default function MaterialPage({ uid, title, description, imageOptions = { default: true, image: null, child: null }, buttonOptions = { path: '/', onClick: () => { } } }) {
    console.log(buttonOptions, 'bbggg')
    return (
        <div id={uid} className='page service'>
            <div className='container'>
                <div className='image'>
                    {imageOptions.default ?
                        <Image img={imageOptions.image} /> : imageOptions.child
                    }
                </div>
                <div className='text-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link to={buttonOptions.path}>
                        <Button label={buttonOptions.label} onClick={buttonOptions?.onClick} />
                    </Link>
                </div>
            </div>
        </div>
    )
}