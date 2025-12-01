import styles from '@/styles/404.module.scss';
import Image from 'next/image';

const Custom404 = () =>{
    return(
        <div className={styles.error}>
            {/* <img className={styles.error__image} src="/404.png" alt="404" /> */}
            <Image className={styles.error__image} src="/404.png" alt="404" width={600} height={600} />
            <div>404 | Halaman Tidak Ditemukan</div>
        </div>
    );
};
export default Custom404;