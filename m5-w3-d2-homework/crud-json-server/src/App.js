import React from "react";
import Lists from "./List";
import CreateList from "./CreateList";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    }


    getLists = () => {
      fetch('https://localhost:5000/posts')
        .then(res => res.json())
        .then(result => 
          this.setState({
            loading: false,
            alldata: result,
          })).catch(console.log);
    }

    createList = () => {
      fetch('http://localhost:5000/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.singledata)
      }).then(
        this.setState({
          singledata: {
            title: "",
            author: "",
          }
        })
      );
    }

    // handlers
    handleChange = (event) => {
      let title = this.state.singledata.title;
      let author = this.state.singledata.author;
      if (event.target.name === 'title') title = event.target.value;
      else author = event.target.value;

      this.setState({
        singledata: {
          title: title,
          author: author
        }
      })
    }


    render() {
      const listTable = this.state.loading ? (
        <span>Loading Data ... Please be patience. </span>
      ) : (
        <Lists alldata={this.state.alldata} />
      );

      return (
        <div className="container">
          <span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.getLists}
            >
              Get Lists
            </button>
            <CreateList 
              singledata={this.state.singledata} 
              handleChange={this.handleChange}
              createList={this.createList}
            />

          </span>
          {listTable}          
        </div>
      )
    }
  }

export default App;