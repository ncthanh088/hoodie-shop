import React from 'react'
import Footer from './footer/Footer';
import Header from './header/Header'
import { ItemsProvider } from "../context/ItemsContext";

function MasterPage({ children }) {
    return (
        <ItemsProvider>
            <div className='container'>
                <Header />
                <div className='content'>
                    {children}
                </div>
                <Footer />
            </div>
        </ItemsProvider>
    )
}

export default MasterPage;