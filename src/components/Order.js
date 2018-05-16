import React, { Component } from 'react';
import Data from './Data.js'
class Order extends Component {

    
    render() {
        
        let order = this.props.myOrder
        let tom = []
        order.forEach(x => {
            let data = Data.filter(z => {
                return z.Id === x
                
            })
            tom.push(...data)
          
        })
       let newOrder = tom.map(x => {
           return <div style={{display:'inline-block'}}>
               <img 
           key={x.Id}
           
           style={{width:200}} src={x.img}/>
           <h5>{x.name}</h5>
               </div>
       })
       
      
        
        return (
            <div>
                <h1> O R D E R</h1>
                {newOrder}
                <button className="btn btn-primary" style={{display:'block', margin:'auto'}}>BEKRÄFTA</button>
            </div>
        );
    }
}

export default Order;