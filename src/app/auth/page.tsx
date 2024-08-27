import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";


export const metadata:Metadata ={
    title: 'Auth Page',
    description: 'This is the auth page',
    ...NO_INDEX_PAGE
}

const AuthPage = () => {
    return (
        <div>
            Auth
        </div>
    );
}

export default AuthPage;