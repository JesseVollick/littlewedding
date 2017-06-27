import React, {Component} from 'react';
import styled from 'styled-components';

const RsvpContainer = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80vh;
        background-color: #C4C4BF;
        >button{
            background-color: #3B3E2A; 
            border: none;
            color: white;
            padding: 15px 80px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            text-transform: uppercase;
        }
        >h1{
            margin-top: 150px;
            font-family: "Nixie One";
        }
        >h2 {
            font-family: 'proxima-nova', arial, sans-serif;
            font-weight: 500;
        } 
        >h3 {
            text-align: center;
        }>h3:hover{color:#777}
    `

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

const SingleGuestInput = (props) => {
    return (
        <SingleGuestInputContainer>
            <input  placeholder="first name"
                    onChange={(event)=> props.onChange(props.index, {first: event.target.value, last: props.last} )}
                    value={props.first}
            />
            <input  placeholder="last name"
                    onChange={(event) => props.onChange(props.index, {first: props.first , last: event.target.value} )}
                    value={props.last}
            />
        </SingleGuestInputContainer>
    );
};

const newGuest = {first: '',last: ''};

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests:[newGuest]
        }
        this.addNewGuest = this.addNewGuest.bind(this);
        this.onGuestNameChange = this.onGuestNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addNewGuest(){
        this.setState({guests: this.state.guests.concat(newGuest)});
    }

    onGuestNameChange(i, updatedName){
        const newList = [...this.state.guests];
        newList[i] = updatedName;
        this.setState({guests: newList});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({guests:{}})
        //Clear the form

        //Thank the user


    }

    render() {
        return (
            <RsvpContainer onSubmit={this.handleSubmit}>
                <h1>RSVP</h1>
                {this.state.guests.map((currentname, i)=> (
                    <SingleGuestInput index={i} first={currentname.first} last={currentname.last} onChange={this.onGuestNameChange} />
                ))}
                <h3 onClick={this.addNewGuest}>+ Add Additional <br/> Members </h3>
                <button type='submit'>Send</button>
            </RsvpContainer>
        );
    }
}

export default Rsvp;