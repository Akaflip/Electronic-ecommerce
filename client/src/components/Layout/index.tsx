import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

type layoutProp = {
    children: JSX.Element[]
}

const Layout = ({ children }: layoutProp) => {

    return (
        <>

            {children}
            <Footer />
        </>
    )
}

export default Layout;