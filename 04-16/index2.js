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
    render(){
        return(
            <div>
                <Title />
                <h2> This is Header </h2>
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

class Index extends Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
