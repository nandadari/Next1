import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/type/product.type";
import { FallbackMode } from "next/dist/lib/fallback";

const DetailProductPage = ({product}: {product: ProductType}) =>{
    const {query} =  useRouter();

// Client-Side-Rendering
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.id}`, 
    //     fetcher);

// console.log(data);
    return(
        <div>
        {/* Client Site Rendering  */}
        {/* <DetailProduct product={isLoading ? [] : data.data}/> */}

        {/* Server Site  $ static*/}
        <DetailProduct product={product}/>
        </div>
    );
};

export default DetailProductPage;
// //Server-Site-rendering
// export async function getServerSideProps(
// {params} : {params : {id: string}}
// ){
// //fetch data 
// const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
// const response = await res.json();
// return{
// props: { product: response.data, }
//       }
// }

//static site generation
export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    const paths = response.data.map((product:ProductType) => ({
        params: {
            id: product.id,
        }
}));
    return {paths, fallback: false};
}

export async function getStaticProps({params} : {params : {id: string}}) {
    //fetch data 
        const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
        const response = await res.json();
        return{
            props: {
                product: response.data,
            }
        }
    
}
