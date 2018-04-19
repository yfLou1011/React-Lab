import React, {Component} from 'react'

class Comment extends Component{

    render(){
        return(
            <div className='comment'>
              <div className='comment-user'>
                <span > {this.props.comment.username} : </span>
                <span> {this.props.comment.content} </span>
              </div>
            </div>
        )
    }
}

export default Comment