// render test

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    renderGoodWord(goodWord, badWord){
        const isGoodWord = true;
        return isGoodWord? goodWord:badWord
    }
    render(){
        const word = 'world'
        const classname = 'header'
        return(
           <div className = {classname}>
            <h1> Hello {word}! </h1>
            <h2>
                {this.renderGoodWord(
                    <strong> goodWord </strong>,
                    <span> badWord </span>
                )}
            </h2>
           </div>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'));

