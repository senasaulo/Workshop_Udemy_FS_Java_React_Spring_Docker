import {Header} from "./Header";
import {Footer} from "./Footer";
import {Loading} from "./loading";
import {ContNotification} from "./contNotification";

interface TemplateProps {
    children: React.ReactNode;
    loading?: boolean;
}


export const Template: React.FC<TemplateProps> = ({children, loading}: TemplateProps) => {
    return (
        <>
            <Header/>
                <div className="container mx-auto mt-8 px-4 ">
                    {loading && <Loading/>}
                    {!loading && children}
                </div>
            <Footer/>
            <ContNotification/>
        </>
    )
}


