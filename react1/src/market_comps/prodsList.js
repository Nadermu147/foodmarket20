import React from 'react'
import Proditem from './prod_itme'

function Prodslist(props) {
    return (
       
            <div className="col-lg-9">
           <div className="row">
              <Proditem />
              <Proditem />
              <Proditem />
              <Proditem />
           </div>
            </div>

 
    )
}
export default Prodslist;
