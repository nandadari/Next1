import styles from '@/styles/404.module.scss';

const Custom404 = () =>{
    return(
        <div className={styles.error}>
            <img className={styles.error__image} src="/404.png" alt="404" />
            <div>404 | Halaman Tidak Ditemukan</div>
        </div>
    );
};
export default Custom404;