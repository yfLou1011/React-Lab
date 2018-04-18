// props

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class LikeButton extends Component {
    constructor(props){
        super(props)
        this.state = {isLiked:false}
    }
    
    handleClickOnLikeButton(){
       this.setState({
           isLiked: !this.state.isLiked,
       })
       if(this.props.onClick){
           this.props.onClick()
       }
    }

    render(){
        const wordings = this.props.wordings ||
        {
            likedText : 'cancle',
            unlikedText :  'like'
        }
        return(
            <div>
                {/* {console.log('hello')} */}
                <button onClick={this.handleClickOnLikeButton.bind(this)}> 
                    {this.state.isLiked? wordings.likedText : wordings.unlikedText}👍
                </button>
            </div>
        )
    }
}
  

class Index extends Component {
    render(){
        const words = this.props.words || {  
            likedText:'like',
            unlikedText:'unlike'
        }
        return(
            <div>
                <LikeButton wordings={{likedText:'已赞', unlikedText:'赞'}}
                onClick={()=>{console.log("hit")}}  />
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
