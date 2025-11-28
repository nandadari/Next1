import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function proxy(req: NextRequest) {
    const res = NextResponse.next();
    return res;


    // const isLogin = true;
    // if (isLogin) {
    //     return NextResponse.next();
    // }else{
    //     return NextResponse.redirect(new URL("/auth/login", req.url));
    // }
    
    
}

export default withAuth(proxy, ["/profile"]);

// export const config = {
//     matcher: ["/product", "/about"],
// }