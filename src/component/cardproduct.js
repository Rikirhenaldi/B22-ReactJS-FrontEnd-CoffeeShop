import React from 'react'
import { Link } from "Link";

class cardProduct extends React.Component{
    render(){
        return(
            <Link to="/Product/:id"><div className="menuBox bg-white rounded-3xl flex flex-col items-center text-center py-4 shadow-2xl space-y-2">
                    <div><img className={this.props.image} src="" alt=""/></div>
                    <div className="flex flex-1"><h2 class="font-extrabold text-xl mx-8 leading-4 ">{this.props.name}</h2></div>
                    <div className="flex justify-end"><h3>IDR. {this.props.price}</h3></div>
                </div>
            </Link>
        )
    }
}
export default cardProduct
