import Link from "next/link";
import { useRouter } from "next/router";
import styles  from './Login.module.scss';

const LoginViews = () => {
        const  {push, query} = useRouter();
    const handlerLogin = () =>{
        push("/product");
    }
 return(
       <div className={styles.login}>
            <h1 className="text-5xl font-bold ">Login Page</h1>
            <button onClick={() => handlerLogin()}>Login</button>
            <p style={{color: "brown", border: "1px solid grey", borderRadius: '10px' }}>Belum punya akun ? Registrasi <Link href={"/auth/register"}>disini</Link></p>
        </div>
 );
};

export default LoginViews;