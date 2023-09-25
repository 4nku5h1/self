import React from 'react';

import './styles.scss'
import { Link } from 'react-router-dom';
import { scrollToId } from '../../Common/helper';

export default function NavDesktop({ actions = [] }) {
    function NavAction(action) {
        return (
            <Link to={action.path}>
                <span onClick={() => {
                    if (action?.id) {
                        setTimeout(() => {
                            scrollToId(action.id);
                        }, 200)
                    }
                }}>{action.name}</span>
            </Link>
        )
    }
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>PIXO<span>BREW</span></h2>
            </div>
            <div className='nav-items'>
                {actions.map((act) => <NavAction {...act} />)}
            </div>
        </div>
    )
}