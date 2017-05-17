import React from 'react';
import { render } from 'react-dom';
import { format } from 'date-fns';

class Presentation extends React.Component {
  constructor (props) {
    super(props);
    this.state = { datetime: new Date() };

    setInterval(() => this.setState(Object.assign({}, this.state, { datetime: new Date() })));
  }

  render () {
    const { datetime } = this.state;

    return (
      <div>
        <h2>2017-01-01</h2>
        {format(datetime, 'YYYY年MM月DD日 HH時間mm分ss秒')}
      </div>
    );
  }
}

window.addEventListener('DOMContentLoaded', () => render(<Presentation />, document.getElementById('mount-point')));
