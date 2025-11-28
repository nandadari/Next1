import styles from './register.module.scss';
import Link from 'next/link';

const RegisterView = () => {
    return (
        <div className={styles.register}>
        <h1 className={styles.register__title}>Register Page</h1>
        <div className={styles.register__form}>
            <form action="">
                <div className={styles.register__form__item}>
                    <label htmlFor="email" className={styles.register__form__item__label}>Email</label>
                <input id="email" type="email" name="email" placeholder="email"className={styles.register__form__item__input}/>
                </div>
                 <div className={styles.register__form__item}>
                    <label htmlFor="fullname" className={styles.register__form__item__label}>Fullnmame</label>
                <input id="fullname" type="text" name="fullname" placeholder="fullname"className={styles.register__form__item__input}/>
                </div>
                 <div className={styles.register__form__item}>
                    <label htmlFor="password" className={styles.register__form__item__label}>Password</label>
                <input id="password" type="password" name="password" placeholder="password"className={styles.register__form__item__input}/>
                </div>
                <button type="submit" className={styles.register__form__item__buttom}>Register</button>
            </form>
        </div>
        <p className={styles.register__link}>have Account ? SignIn <Link href="/auth/login">Here</Link></p>
        </div>
    )
}
export default RegisterView;