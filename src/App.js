import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button raised primary className="primaryCTA">Hello World</Button>
        <Card className="customCard">
          <CardTitle
            title="Normal title"
            subtitle="I should look pink"
            className="header"
          />
          <CardText>Some text</CardText>
        </Card>
      </div>
    );
  }
}

export default App;
