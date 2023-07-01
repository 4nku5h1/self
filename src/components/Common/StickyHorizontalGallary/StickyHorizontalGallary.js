import { useEffect } from 'react'
import b1 from '../../../assets/parallax/b3.webp'
import b2 from '../../../assets/parallax/b3.webp'
import b3 from '../../../assets/parallax/b3.webp'

import './styles.scss'

export default function StickyHorizontalGallary() {
    useEffect(() => {
        document.addEventListener('scroll', horizontalScroll);

        //Selecting Elements
        let sticky = document.querySelector('.sticky');
        let stickyParent = document.querySelector('.sticky-parent');

        let scrollWidth = sticky.scrollWidth;
        let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

        //Scroll function 
        function horizontalScroll() {

            //Checking whether the sticky element has entered into view or not
            let stickyPosition = sticky.getBoundingClientRect().top;
            if (stickyPosition > 1) {
                return;
            } else {
                let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
                sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;

            }
        }
    }, [])
    return (
        <div>
            <div className='text-content text-heading'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className='sticky-image-gallary page'>
                <div class="sticky-parent">
                    <div class="sticky">
                        <div class="horizontal">
                            <div class="dim" >sdfsdfgh</div>
                            <div class="dim" >sdfg</div>
                            <div class="dim">sdfg</div>
                            <div class="dim" >sdfg</div>
                            <div class="dim" ></div>
                            <div class="dim" >adsfgklkpj</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}