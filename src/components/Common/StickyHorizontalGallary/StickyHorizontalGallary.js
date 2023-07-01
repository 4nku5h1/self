import { useEffect } from 'react'

import './styles.scss'

export default function StickyHorizontalGallary({ data }) {
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
    console.log(`${data.length}vh`)
    return (
        <div>
            <div className='text-content text-heading'>
                <h1>OUR SERVICES</h1>
            </div>
            <div className='sticky-image-gallary'>
                <div class="sticky-parent" style={{height:`${data.length * 100}vh`}}>
                    <div class="sticky">
                        <h1>adkff</h1>
                        <div class="horizontal">
                            {data.map((e) => {
                                return (
                                    <div class="item-card" >
                                        <img src={e.image} />
                                        <h4>{e.title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}