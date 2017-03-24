import React, { Component } from 'react';
import pdfConverter from 'jspdf';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
      var doc = new pdfConverter('p','pt','c6');
      doc.setFontSize(22);
      doc.text(20, 50, 'Park Entry Ticket');
      doc.setFontSize(16);
      doc.text(20, 80, 'Address1: ' );
      doc.text(20, 100, 'Address2: ' );
      doc.text(20, 120, 'Entry Date & time: ');
      doc.text(20, 140, 'Expiry date & time: ' );
      doc.save("test.pdf");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <input type='button'
        onClick={this.onClick} value="Print"/>
        </p>
      </div>
    );
  }
}

export default App;
