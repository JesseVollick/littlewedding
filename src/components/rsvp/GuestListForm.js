import React,{Component} from 'react';
import styled from 'styled-components';
import SingleGuestInput from './SingleGuestInput';

const GuestForm = styled.form`
    display: flex; 
    flex-direction: column;
    align-items: center;
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
`



class GuestListForm extends Component {

    renderBoxes (numOfBoxes) {
        const singleGuests = [];

        for(var i = 0; i < numOfBoxes; i++ ){
            singleGuests.push(<SingleGuestInput />)
        }
        return <div>{singleGuests}</div>
    }


    render() {
        return (
            <GuestForm>
                {this.renderBoxes(this.props.num)}
                <button >Send</button>
            </GuestForm>

        );
    }
}



export default GuestListForm;


