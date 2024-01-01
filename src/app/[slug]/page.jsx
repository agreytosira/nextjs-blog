import Comments from '@/components/comments/Comments';
import { Menu } from '@/components/menu/Menu';
import Image from 'next/image';
import React from 'react';
import styles from './singlePage.module.css';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, facere.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024 </span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aperiam perferendis voluptatem dolore eaque, libero ut enim, iure ad facere modi. Sint autem animi laudantium laboriosam eveniet veritatis aliquam nulla, blanditiis asperiores ratione deleniti natus.</p>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet, porro hic ipsa quidem facere ducimus fugiat ab nihil. Quaerat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid velit harum facilis, excepturi atque! Et rem unde dolores eius.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
