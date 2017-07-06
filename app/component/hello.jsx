import React from 'react';
import './hello.css';
class Hello extends React.Component{
    constructor(props){
        super(props);
        this.propTypes = {
            text:React.PropTypes.string
        }
    }

    render(){
        this.print = this.print.bind(this);
        return <div className="hello" onClick={this.print}>hello {this.props.text}</div>
    }

    print(){
        alert('点击');
        console.log(this);
    }

}
module.exports = Hello;