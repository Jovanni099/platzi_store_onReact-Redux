// import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../styles/Footer.module.css';
import { ROUTES } from '../../../utils/routes';
import LOGO from '../../../images/logo.svg';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { PiYoutubeLogoThin } from 'react-icons/pi';


export const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="" />
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by
                <a href="https://github.com/Jovanni099"
                    target="_blank"
                    rel="noreferrer">
                    Mukanov
                </a>
            </div>


            <div className={styles.socials}>

                <a href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer">
                    <AiOutlineInstagram className='icon' />
                </a>

                <a href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer">
                    <AiOutlineFacebook className='icon' />
                </a>

                <a href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer">
                    <PiYoutubeLogoThin className='icon' size={50} />
                </a>
            </div>
        </section >
    )
}
