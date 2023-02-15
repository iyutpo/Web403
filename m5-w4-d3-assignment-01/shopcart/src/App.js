import React, { Component } from "react";
//import { products } from './products';
import NavBar from './navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //products: products,
            allproducts: [],
            singleProduct: {
              id: "",
              image: "",
              desc: "",
              ratings: "",
              value: ""
            }
          
        }
    }

    getProducts = () => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            allproducts: result
          })
        )
        .catch(console.log);
    }

    handleChange = (event, product) => {
      let id = this.state.singleProduct.id;
      let image = this.state.singleProduct.image;
      let desc = this.state.singleProduct.desc;
      let ratings = this.state.singleProduct.ratings;
      let val = this.state.singleProduct.value;
      id = product.id;
      image = product.image;
      desc = product.desc;
      ratings = product.ratings;
      val = event.target.value;
      this.setState({
        singleProduct: {
          id: id,
          image: image,
          desc: desc,
          ratings: ratings,
          value: val
        }
      });
      this.handleIncrement(id)
    }

      handleIncrement = (id) => {
        console.log(id);
        fetch("http://localhost:5000/products/"+id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state.singleProduct)
        })
          .then(res => res.json())
          .then(result => {
                //const updatedValue = result.value++;
                this.setState({
                  singleProduct: {
                    id: result.id,
                    image: result.image,
                    desc: result.desc,
                    ratings: result.ratings,
                    value: result.value
                  }
                })
          })
        
          
      }

    /*handleIncrement = (addvalue) => {
        if (addvalue.value < 10) {
            const updatedValue = addvalue.value++;
            this.setState({updatedValue});
        }
    } */

    handleDecrement = (subvalue) => {
        if (subvalue.value > 0) {
            const updatedValue = subvalue.value--;
            this.setState({updatedValue});
        }
    }

    render() {
        return(
            <div>
                <NavBar totalValue={this.state.allproducts.map(prod=>prod.value).reduce((acc, curr, index) => 
                    acc + curr, 0)} 
                    //prods={this.state.products}
                    prods={this.state.allproducts}
                    singleProduct={this.state.singleProduct}
                    handleChange={this.handleChange}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />
                
                {/*<DisplayProducts 
                    products={this.state.products}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                /> */}

                {this.getProducts()}
            </div>
        );
    }
}

export default App;