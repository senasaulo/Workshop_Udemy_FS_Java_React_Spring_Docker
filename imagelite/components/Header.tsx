'use client'

import Link from "next/link"
import { useAuth } from '@/resources'
import { RenderIf } from "./RenderIf";
import { useRouter } from "next/navigation"


export const Header: React.FC = () => {
    const auth = useAuth();
    const user = auth.getUserSession();
    const router = useRouter();
    
    function logout(){
        auth.invalidadeSession();
        router.push("/login")
    }

    return(
        <header className="bg-indigo-950 text-white py-3">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/galeria">
                     <h1 className="text-2xl font-bold">ImageLite</h1>
                </Link>
                <RenderIf condition={!!user}>
                    <div className="flex items-center">
                        <div className="relative">
                            <span className="w-64 py-3 px-6 text-md">
                                Olá, {user?.name}
                            </span>
                            <span className="w-64 py-3 px-6 text-sm">
                                <a href="#" onClick={logout}>
                                    Sair
                                </a>
                            </span>
                        </div>
                    </div>
                </RenderIf>
            </div>
           
        </header>
    )
}    