// example of props

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
  
class Computer extends Component {
    static props={
      off:'已关',
      on:'已开'
    }
    constructor(props){
      super(props)
      this.state={
        status:'off'
      }
    }
    bindleClick(){
    console.log(this);
      this.setState({
        status: this.state.status==='off'? 'on':'off'
      })
    }
    render () {
      return (
        <div>
          <button onClick={this.bindleClick.bind(this)}>
            {this.state.status==='off'? this.props.off:this.props.on}
            
          </button>
            <Screen showContent={this.state.status==='off'? console.log('显示器关了'):console.log('显示器亮了')}  />
        </div>
      )
    }
  }
  
  class Screen extends Component {
    static defaultProps={
      showContent:'无内容'
    }
    render () {
      const showContent=this.props.showContent
      return (
        <div className='screen'>{showContent='显示器关了'}</div>
      )
    }
  }
  

ReactDOM.render(<Screen />, document.getElementById('root'));
