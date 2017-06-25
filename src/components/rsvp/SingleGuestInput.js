import React, {Component} from 'react';
import styled from 'styled-components';

const SingleGuestInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    >input{
         height: 30px;
         width: 200px;
         padding: 10px;
         margin: 10px;
         border: none;
         font-size:12px;
    }
`
class SingleGuestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameValue:'',
            lastNameValue:''
        }
    }
    render() {
        return (
            <SingleGuestInputContainer>
                <input onChange={(evt) => this.setState({firstNameValue: evt.target.value})} value={this.state.value} placeholder="first name"/>
                <input onChange={(evt) => this.setState({lastNameValue: evt.target.value})} value={this.state.value} placeholder="last name"/>
            </SingleGuestInputContainer>
        );
    }
}




export default SingleGuestInput;



