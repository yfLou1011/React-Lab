import React, {Component} from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            comment:''
        }
    }

    handleUserNameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange(event){
        this.setState({
            content: event.target.value
        })
    }
    
    handleSubmit(){
        if(this.props.onSubmit){
            const {username, content} = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({
            content:''
        })
    }

    render(){
        return(
            <div className='comment-input'> 
              <div className='comment-field'>
                <span className='comment-field-name'> 用户名：</span>
                <div className='comment-field-input'>
                  <input value={this.state.username}
                         onChange={this.handleUserNameChange.bind(this)} />
                </div>
              </div>

              <div className='comment-field'>
                <span className='comment-field-name'> 评论： </span>
                <div className='comment-field-input'>
                  <textArea value={this.state.comment}
                            onChange={this.handleCommentChange.bind(this)} />
                </div>
              </div>

              <div className='comment-field-button'>
                <button 
                    onClick={this.handleSubmit.bind(this)}>
                    发布</button>
              </div>
            </div>
        )
    }
}

export default CommentInput