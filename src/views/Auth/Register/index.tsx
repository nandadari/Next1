import { useState } from 'react';
import styles from './register.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const {push}= useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value,
        };
        const result = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if(result.status === 200) {
            event.target.reset();
            setIsLoading(false);
            push("/auth/login");
        }else{
            setIsLoading(false);
            setError(result.status === 400 ? "Email Already exists" : "");
        }
    };
    return (
        <div className={styles.register}>
        <h1 className={styles.register__title}>Register </h1>
        {error && <p className={styles.register__error}>{error}</p>}
        <div className={styles.register__form}>
            <form onSubmit={handleSubmit}>
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

                <button type="submit" className={styles.register__form__item__buttom} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
        <p className={styles.register__link}>have Account ? SignIn <Link href="/auth/login">Here</Link></p>
        </div>
    )
} 
export default RegisterView;