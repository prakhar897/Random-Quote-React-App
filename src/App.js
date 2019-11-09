import React, { Component } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Wrapper from './Wrapper.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			allquotes : [
				{
					quote:"Quote1",
					author: "Author1"
				},
				{
					quote:"Quote2",
					author: "Author2"
				},
				{
					quote:"Quote3",
					author: "Author3"
				}
			],
			currentquote : {
				quote:'',
				author:''
			}
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
       this.handleClick();
    }

	handleClick(){
		/*const i = Math.floor(Math.random() * this.state.allquotes.length);
		var Quote  = this.state.allquotes[i];
		this.setState({
			currentquote: Quote
		});*/

		fetch("https://api.quotable.io/random")
			.then(res => res.json())
			.then( res => {
				var Quote = {
					quote : res.content,
					author : res.author 
				};
				console.log(res);

				this.setState({
					currentquote : Quote
				});
		});
	}

	render() {
		return (
		  <div className="App">
		  	<Helmet>
		      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
		    </Helmet>
		    <Wrapper currentquote={this.state.currentquote} handleClick={this.handleClick} />
		  </div>
		);
	}
}

export default App;
