import React from 'react';
import Hello from '../component/hello.jsx'

class Index extends React.Component{
    render(){
        return <div ><Hello text='喵' /></div>

    }
}

module.exports = Index;