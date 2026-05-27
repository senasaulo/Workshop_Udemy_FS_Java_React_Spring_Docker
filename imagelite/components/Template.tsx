import {Header} from "./Header";
import {Footer} from "./Footer";


interface TemplateProps {
    children: React.ReactNode;
}


export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <Header/>
                <div className="container mx-auto mt-8 px-4 ">
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}

