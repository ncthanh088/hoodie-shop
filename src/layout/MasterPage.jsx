import React, { Fragment } from 'react'
import Header from './header/Header'
import { ItemsProvider } from "../context/ItemContext";

function MasterPage({ children }) {
    return (
        <ItemsProvider>
            <Fragment>
                <Header />
                <div className='container'>
                    {children}
                </div>
            </Fragment>
        </ItemsProvider>
    )
}

export default MasterPage;