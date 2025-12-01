import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainProxy(req: NextRequest) {
    const res = NextResponse.next();
    return res;   
}

export default withAuth(mainProxy, ["/profile", "/admin"]);

// export const config = {
//     matcher: ["/product", "/about"],
// }