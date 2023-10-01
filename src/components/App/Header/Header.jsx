// import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../../../styles/Header.module.css';

import { ROUTES } from '../../../utils/routes';
import LOGO from '../../../images/logo.svg';
import AVATAR from '../../../images/avatar.jpg';
import SPRITE from '../../../images/sprite.svg';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';



export const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{ backgroundImage: `url(${AVATAR})` }} />
                    <div className={styles.username}>GUEST</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon} >
                        {/* <svg className="icon" style={{ backgroundImage: `url(${SPRITE})` }}>
                            <use xlinkHref={`${import.meta.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg> */}
                        <AiOutlineSearch className='icon' size={25} />
                    </div>
                    <div className={styles.input}>
                        <input type="search" name='search'
                            placeholder='Search for anything...'
                            autoComplete='off'
                            onChange={() => { }}
                            value=''
                        />
                    </div>

                    {false && <div className={styles.box}></div>}
                    {/* <div className={styles.box}></div> */}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                        {/* <svg className={styles["icon-fav"]}>
                            <use xlinkHref={`${import.meta.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg> */}

                        <AiOutlineHeart className={styles.iconfav} />

                    </Link>

                    <Link to={ROUTES.CART} className={styles.cart}>
                        {/* <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${import.meta.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg> */}
                        <BsHandbag className={styles.iconcart} />
                        <span className={styles.count}>2</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}
