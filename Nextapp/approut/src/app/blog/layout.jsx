import { Children } from "react";

export default function BlogLayout({children}) {


    return (

        <>
            <h2 className="text-blue-600">Blog uzre sepsifik header</h2>
            {children}
            <h2 className="text-blue-600">Blog uzre sepsifik header</h2>
        </>

    )


}