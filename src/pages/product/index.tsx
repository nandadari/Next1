import { useEffect, useState } from "react";
import ProductView from "@/views/product";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";


const ProductPage = () =>{

    const [products, setProducts] = useState([]);
    const {push} = useRouter();

    // useEffect(() => {
    //     fetch('/api/product').then((res)=> res.json()).then((response) => {setProducts(response.data);});
    // },[]);

const { data, error, isLoading } = useSWR("/api/product", fetcher);

    return(
        <div>
            <ProductView products={isLoading ? [] : data.data}/>
        </div>
    );
};

export default ProductPage;
