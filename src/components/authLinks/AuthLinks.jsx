import Link from 'next/link';
import styles from './authLinks.module.css';

export const AuthLinks = () => {
    // temporary
    const status = 'noauthenticated';
    return (
        <>
            {status == 'noauthenticated' ? (
                <Link className={styles.link} href='/login'>
                    Login
                </Link>
            ) : (
                <>
                    <Link className={styles.link} href='/write'>
                        Write
                    </Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
        </>
    );
};
