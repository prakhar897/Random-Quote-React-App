import React from "react";
import './Wrapper.css';

const Wrapper = (props) => {
	var shareurl = "https://twitter.com/intent/tweet?text=" + props.currentquote.quote + " - " + props.currentquote.author;
		return(

			<div id="quote-box" className="quote-box">
				<h1 id="text" className="text"> {props.currentquote.quote} </h1>
				<h5 id="author"> {props.currentquote.author} </h5>
				<button id="new-quote" onClick={props.handleClick}>New Quote</button>
				<a id="tweet-quote" href={shareurl}>Tweet</a>
			</div>
		);
}

export default Wrapper;