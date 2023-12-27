import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, mollitia.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae placeat error hic esse illum, tenetur quae est magnam ex distinctio quos suscipit officia! Porro et dolore assumenda doloremque totam?</p>
                <Link className={styles.link} href='/'>
                    Read More
                </Link>
            </div>
        </div>
    );
};
