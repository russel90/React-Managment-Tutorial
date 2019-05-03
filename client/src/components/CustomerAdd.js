import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: null,
            username: "",
            birthday: "",
            gender: "",
            job: "",
            fileName:""
        }
    }

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Add Customer</h1>
                
            </form>
        )
    }

}
