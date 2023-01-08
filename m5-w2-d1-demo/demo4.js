class FileInput extends React.Component {
    constructor(props) {
    
      super(props);
      
    }
    handleSubmit(event) {
      
    }
  
    render() {
   
      return (
        <form onSubmit={this.handleSubmit}>
          
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <FileInput />,
    document.getElementById('root')
  );