import { CardList } from '@/components/CardList/CardList';
import { Menu } from '@/components/menu/Menu';
import React from 'react';
import styles from './blogPage.module.css';

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style blog</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;
