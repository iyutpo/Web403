'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);