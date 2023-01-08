  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      
    }
  
    handleSubmit(event) {
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"  />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );