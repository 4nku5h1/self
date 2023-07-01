import { useEffect } from 'react'

import './styles.scss'
import i1 from '../../../assets/horizontalgallary/1.webp'
import i2 from '../../../assets/horizontalgallary/2.webp'
import i3 from '../../../assets/horizontalgallary/3.webp'
import i4 from '../../../assets/horizontalgallary/4.webp'
import i5 from '../../../assets/horizontalgallary/5.webp'

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
                            <div class="item-card" >
                                <img src={i1} />
                            </div>
                            <div class="item-card" >

                                <img src={i2} />
                            </div>
                            <div class="item-card">
                                <img src={i3} />
                            </div>
                            <div class="item-card" >
                                <img src={i4} />
                            </div>
                            <div class="item-card" >
                                <img src={i5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}