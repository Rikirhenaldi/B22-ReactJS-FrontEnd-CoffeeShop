import React from 'react'
import { Link } from "Link";
import propTypes from 'prop-types'

class cardProduct extends React.Component{
    render(){
      const image = this.props.image
      const name = this.props.name
      const price = this.props.price
        return(
          <Link to="/Product/:id"><div className="menuBox bg-white rounded-3xl flex flex-col items-center text-center py-4 shadow-2xl space-y-2">
            <div><img className={image} src="" alt=""/></div>
            <div className="flex flex-1"><h2 className="font-extrabold text-xl mx-8 leading-4 ">{name}</h2></div>
            <div className="flex justify-end"><h3>IDR. {price}</h3></div>
          </div>
          </Link>
        )
    }
}

cardProduct.propTypes = {
  image : propTypes.element.isRequired,
  name : propTypes.element.isRequired,
  price : propTypes.element.isRequired
}
export default cardProduct
