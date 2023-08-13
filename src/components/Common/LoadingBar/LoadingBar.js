import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';

export default function ({ isLoading = false, afterLoadingHandler = () => { } }) {
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    const { pathname } = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingPercentage < 100) {
                setLoadingPercentage(pre => {
                    if ((pre + 1) > 110) {
                        clearInterval(interval)
                        return 0;
                    }
                    return pre + 1;
                })
            }

        }, 25);

    }, [pathname])
    return (
        <div className={`loading-bar ${loadingPercentage < 110 ? '' : 'hidden'}`}>
            <div className='loader' style={{width:`${loadingPercentage}%`, height:"15px"}} />
        </div>
    )
}