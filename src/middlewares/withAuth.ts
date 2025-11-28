import next from "next";
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextProxy, NextRequest, NextResponse } from "next/server";

export default function withAuth(proxy: NextProxy, requireAuth: string[] = []){
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        if(requireAuth.includes(pathname)){
            const token = await getToken({
                req, 
                secret: process.env.NEXTAUTH_SECRET
            });
            if(!token){
                const url = new URL ('/', req.url);
                return NextResponse.redirect(url);
            }
            return proxy(req, next)
        }

    }
}