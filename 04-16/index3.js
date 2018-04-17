import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    render(){
        return(
            <h1>React Hello</h1>
        )
    }
}

class Header extends Component { 
    clickThisButton(e){
        console.log("hello")
    }
    render(){
        return(
            <div>
                <Title />
                <h2 onClick={this.clickThisButton}> This is Header </h2>
            </div>
        )
    }
}


class Content extends Component { 
    render(){
        return(
            <div>
                <p>Main content</p>
            </div>
        )
    }
}

class Footer extends Component {
    render(){
        return(
            <div>
                <h2> This is footer </h2>
            </div>
        )
    }
}

class LikeButton extends Component {
    constructor(props){
        super(props)
        this.state = {isLiked:false}
    }
    
    handleClickOnLikeButton(){
       this.setState({
           isLiked: !this.state.isLiked,
       })
    }

    render(){
        return(
            <div>
                {/* {console.log('hello')} */}
                <button onClick={this.handleClickOnLikeButton.bind(this)}> 
                    {this.state.isLiked? 'cancle' : 'like'}👍
                </button>
            </div>
        )
    }
}

class Dog extends Component {
    bark () {
      console.log('bark')
    }
    
    run () {
      console.log('run')
    }
    
    binder(){
        this.bark();
        this.run();
    }
    render () {
      return (
      <div onClick = {this.binder.bind(this)}>DOG</div>)
    }
}


class Dog2 extends Component {
    constructor () {
      super()
      this.state={
        isBarking:false,
        isRunning:false
      }
    }
    
    bark () {
      console.log('barking')
      this.setState({isBarking: true})
      setTimeout(()=> {
        this.setState({
          isBarking:false})
      },20)
    }
    
    run () {
      console.log('running')
      this.setState({isRunning: true})
      setTimeout(()=> {
        this.setState({
          isRunning:false})
      },20)
    }
   
    render () {
      return (
       <div onClick={()=> {this.run(); this.bark();}}>DOG</div>
      )
    }
  }
  
class Index extends Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Footer />
                <LikeButton />
                <Dog />
                <Dog2 />
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
