import React, { Component } from 'react';
import pdfConverter from 'jspdf';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.toDataUrl = this.toDataUrl.bind(this);
  }

  toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  onClick() {
      var doc = new pdfConverter('p','pt','c6');
      this.toDataUrl('background.jpg', function(base64Img) {
        var imgData = base64Img;
        console.log(imgData);
        console.log('Adding to doc.');
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
        console.log('Image added.');
        doc.setFontSize(22);
        doc.text(20, 50, 'Park Entry Ticket');
        doc.setFontSize(16);
        doc.text(20, 80, 'Address1: ' );
        doc.text(20, 100, 'Address2: ' );
        doc.text(20, 120, 'Entry Date & time: ');
        doc.text(20, 140, 'Expiry date & time: ' );
        console.log('About to save');
        doc.save("test.pdf");
      });
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
