import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import qs from 'query-string'
import { connect } from 'react-redux'
import { searchProducts } from '../redux/actions/products'
import { getProducts } from '../redux/actions/products'

class Search extends Component {
  constructor(props){
    super(props)
    const urlParams = qs.parse(props.location.search)
    this.state ={
      data: [],
      limit: 12,
      page: 1,
      type: 'ASC',
      sort: urlParams.sort ? urlParams.sort : "",
      search: urlParams.search ? urlParams.search : "",
    }
  }

  componentDidMount(){
    this.fisrtData()
  }
  
  fisrtData= async() => {
    await this.props.searchProducts("")
    if(this.props.products.search){
    this.setState({
      data: this.props.products.search
    })
    console.log("ini data" , this.state.data);
  }
  }


  getData = async (search) => {
    await this.props.searchProducts(search)
    let urlParams = `page=${this.state.page}`
    if(this.state.search){
      urlParams += `search=${this.state.search}`
    }
    this.props.history.push(`/products?${urlParams}`)
  }

  onSearch = (e) => {
    if(e.key === 'Enter'){
      console.log(e.target.value);
      this.setState({search: e.target.value},
      () => {
        this.getData(this.state.search)
      })
    }
  }  

  loadMore = async () => {
    const {nextPage} = await this.props.products.pageInfo
      await this.props.searchProducts(nextPage)
      await this.setState({data: this.props.products.search})
      console.log("ini next page" ,nextPage)
  }

  reloadData = async () => {
    const {prevPage} = await this.props.products.pageInfo
      await this.props.searchProducts(prevPage)
      await this.setState({data: this.props.products.search})
      console.log("ini next page" ,prevPage)
  }

  render() {
    const {search} = this.props.products
    const {pageInfo} = this.props.products
    return (
      <section className="mb-20">
        <div className="flex flex-row justify-between px-24 items-center mb-10 py-10 shadow-lg w-full">
            <div className='font-medium text-2xl'> Find Our Products </div>
            <div>
              <div className="flex flex-row shadow-lg rounded-2xl">
                <input className="search w-72 h-12 rounded-full flex justify-center pl-16 pr-10 relative" type="search" name="" id="" placeholder="Search" onKeyDown={this.onSearch} />
                <i className="relative top-3 -left-64"><FiSearch size='25'/></i> 
              </div>
            </div>
          </div>
          <div className="boxSearch" >
          <div>
          {this.state.search === "" ? 
          <div className="gridmenu grid lg:grid-cols-6 gap-10 m-auto px-20">
            {this.state.data.map((product)=>{
          return(
            <Link to={`/Product/${product.id}`} key={product.id} >
              <div className="menuBox bg-white rounded-3xl flex flex-col items-center text-center w-44 h-64 py-4 shadow-2xl space-y-2">
                <div><img className="rounded-full w-32 h-32 shadow-2xl" src={product.img_link} alt=""/></div>
                <div className="flex flex-1"><h2 className="font-extrabold text-xl mx-8 leading-6 ">{product.name}</h2></div>
                <div className="flex justify-end"><h3>IDR.{product.price} </h3></div>
              </div>
            </Link>
           )
       })}
          </div>
          :
          
          <div className="flex flex-col justify-center">
            {search.length >= 1 ? <div className="px-20 mb-16 text-2xl ml-16 font-medium">Found {pageInfo.totalData} products from '{this.state.search}'</div> : null}
            <div className="gridmenu grid lg:grid-cols-6 gap-10 m-auto px-20">
            {search.length >= 1 ? search.map((product)=>{
          return(
            <Link to={`/Product/${product.id}`} key={product.id} >
              <div className="menuBox bg-white rounded-3xl flex flex-col items-center text-center w-44 h-64 py-4 shadow-2xl space-y-2">
                <div><img className="rounded-full w-32 h-32 shadow-2xl" src={product.img_link} alt=""/></div>
                <div className="flex flex-1"><h2 className="font-extrabold text-xl mx-8 leading-6 ">{product.name}</h2></div>
                <div className="flex justify-end"><h3>IDR.{product.price} </h3></div>
              </div>
            </Link>
           )
       }):
          <div className=" h-24 justify-center items-center flex z-20 absolute mb-20">
            <div className="w-full text-4xl">Product Not Found</div>
          </div>
       }
          </div>
          </div>
          }
          </div>
          <div className="flex flex-row justify-between items-center w-full px-24">
          <div>
          {pageInfo.prevPage !== null ? 
                <div className="flex flex-col justify-center items-center mt-16">
                  <button className="bg-yellow-400 px-11 py-2 flex flex-col justify-center items-center rounded-md shadow-2xl" onClick={this.reloadData}>Previous Page</button>
                </div>
              : null}
          </div>
          <div>
          {pageInfo.nextPage !== null ? 
                <div className="flex flex-col justify-center items-center mt-16">
                  <button className="bg-yellow-400 px-11 py-2 flex flex-col justify-center items-center rounded-md shadow-2xl" onClick={this.loadMore} >Next Page</button>
                </div>
              : null}
          </div>
          </div>
        </div>
              
      </section>
    )
  }
}
const mapStateToProps = (state) => ({
  products : state.products
})
const mapDispatchToProps = {searchProducts, getProducts}
export default connect(mapStateToProps, mapDispatchToProps)(Search)