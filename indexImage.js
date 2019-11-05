import React from "react";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { list: [] }


  }

  /**
   * 
   * var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    prop: "images",
    titles: "Albert Einstein",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var page in pages) {
            for (var img of pages[page].images) {
                console.log(img.title);
            }
        }
    })
    .catch(function(error){console.log(error);});
   * 
   * 
   * 
   * 
   */



  //   componentDidMount() {
  //     //fetch('http://jsonplaceholder.typicode.com/posts')
  //     fetch(
  //       "https://en.wikipedia.org/w/api.php?action=query&titles=San_Francisco&prop=images&imlimit=20&origin=*&format=json&formatversion=2",
  //       {
  //         method: "GET"
  //       }
  //     )
  //         .then(response => response.json())
  //         /* .then(json => console.log(json)) */

  //         .then(data => this.setState({list: data}));




  // }


  componentDidMount() {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      prop: "images",
      titles: "Albert Einstein",
      format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    fetch(url)
      .then(function (response) { return response.json(); })
      .then(function (response) {
        var pages = response.query.pages;
        console.log(response);
        for (var page in pages) {
          for (var img of pages[page].images) {
            console.log(img.title);
          }
        }
      })
      .catch(function (error) { console.log(error); });

  }
  render() {

    console.log(this.state.list)


    return (
      <div>
        hi
   
   
     </div>

    )
  }

}

App.defaultProps = {};
export default App;
