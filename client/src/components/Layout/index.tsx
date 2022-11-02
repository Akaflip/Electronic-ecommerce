import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

type layoutProp = {
    children: React.ReactNode
}

const Layout = ({ children }: layoutProp) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;