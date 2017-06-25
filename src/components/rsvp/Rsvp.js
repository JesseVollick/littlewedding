import React, {Component} from 'react';
import styled from 'styled-components';
import GuestListForm from './GuestListForm'


class Rsvp extends Component {

    constructor(props) {
        super(props);
            this.state = {
                numberOfGuests : 1,
            }
        this.addGuest = this.addGuest.bind(this);
    }

    addGuest(){
        this.setState({
            numberOfGuests: this.state.numberOfGuests + 1
        })
        console.log(this.state.numberOfGuests);
    }

    render() {
        const RsvpContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: ${60 + this.state.numberOfGuests * 10}vh;
        background-color: #C4C4BF;
            >h1 {
                margin-top: 150px;
                font-family: "Nixie One";
            }
            >h2 {
                font-family: 'proxima-nova', arial, sans-serif;
                font-weight: 500;
            } 
            >h3 {
                text-align: center;
            }>h3:hover{color:salmon}
    `

        return (
            <RsvpContainer>
                <h1>RSVP</h1>
                <GuestListForm num={this.state.numberOfGuests}/>
                <h3 onClick={this.addGuest}>+ Add Additional <br/> Members</h3>
            </RsvpContainer>
        );
    }
}


export default Rsvp;
