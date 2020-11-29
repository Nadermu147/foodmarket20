import React from 'react'
import Cart from './cart'
import Prodslist from './prodsList'

function MainMarket(props) {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                <Prodslist />
                <Cart />
                </div>
        
            </div>

        </div>
    )
}
export default MainMarket;
