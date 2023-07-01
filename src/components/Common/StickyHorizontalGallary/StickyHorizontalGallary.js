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
            console.log(stickyParent.getBoundingClientRect().top, stickyParent.getBoundingClientRect().bottom, 'HIII' )
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
        <div className='horizontal-gallary'>
            <div className='title'>
                <h1>Our Services</h1>
            </div>
            <div className='sticky-image-gallary'>
                <div class="sticky-parent" style={{height:`${data.length * 70}vh`}}>
                    <div class="sticky">
                        <div class="horizontal">
                            {data.map((e) => {
                                return (
                                    <div class="item-card" >
                                        <div className='card-foreground'>
                                            <p>{e.title}</p>
                                        </div>
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