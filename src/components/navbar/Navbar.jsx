import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AuthLinks } from '../authLinks/AuthLinks';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import styles from './navbar.module.css';

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
                <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
                <Image src='/tiktok.png' alt='Tiktok' width={24} height={24} />
                <Image src='/youtube.png' alt='Youtube' width={24} height={24} />
            </div>
            <div className={styles.logo}>lamablog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link className={styles.link} href='/'>
                    Homepage
                </Link>
                <Link className={styles.link} href='/'>
                    Contact
                </Link>
                <Link className={styles.link} href='/'>
                    About
                </Link>
                <AuthLinks />
            </div>
        </div>
    );
};
