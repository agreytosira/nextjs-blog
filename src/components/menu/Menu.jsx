import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MenuPosts } from '../menuPosts/menuPosts';
import styles from './menu.module.css';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} />

            {/* Categories Section */}
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>
                    style
                </Link>
                <Link href='/blog?cat=fashion' className={`${styles.categoryItem} ${styles.fashion}`}>
                    fashion
                </Link>
                <Link href='/blog?cat=food' className={`${styles.categoryItem} ${styles.food}`}>
                    food
                </Link>
                <Link href='/blog?cat=travel' className={`${styles.categoryItem} ${styles.travel}`}>
                    travel
                </Link>
                <Link href='/blog?cat=culture' className={`${styles.categoryItem} ${styles.culture}`}>
                    culture
                </Link>
                <Link href='/blog?cat=coding' className={`${styles.categoryItem} ${styles.coding}`}>
                    coding
                </Link>
            </div>

            {/* Editor Pick Section */}
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage={true} />
        </div>
    );
};
