import React, { Component } from 'react';
import data from './Data'
class Menu extends Component {
    handleClickedProduct(e){
        this.props.myOrder(e)
        
        
    }
    render() {
        const dataList = data.map((x,i)=>{
            return (
                <div className="test" style={{width:90, display:'inline-block'}}>
              <img 
              className="card-img-top"
              onClick={()=>this.handleClickedProduct(x.Id)}
              key={i}
              src={x.img} 
              style={{width:90}} />
              <div class="card-body" style={{fontSize:10}}>
    <p class="card-title" >{x.name}</p>
    </div>
            </div>
          )})

     
   
        return (
            <div>
                {dataList}
            </div>
        );
    }
}

export default Menu;