import React from 'react'
import './HeaderOptions.css'
function HeaderOption({avatar, title, Icon }) {
    return (
        <div className='header__option'>
            {Icon && <Icon clasaName="header__option__icon" />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
