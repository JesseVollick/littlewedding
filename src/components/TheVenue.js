import React from 'react';
import styled from 'styled-components';

const VenueContainer = styled.div`
  background: #3C402B;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const VenueImg = styled.div`
      width: 50%;
    > * {
        width: 100%;
    }
`

const VenueInfo = styled.div`
  width: 50%;
  flex-direction: column;
  align-items: center;
`



const TheVenue = () => {
    return (
            <VenueContainer>
                <VenueImg>
                    <img src="http://www.saltandpinephoto.com/wp-content/uploads/2015/12/Schwinn-Produce-Farm-Wedding-Venue-Barn.jpg" />
                </VenueImg>
                <VenueInfo>
                    <div>
                        <h1>The Venue</h1>
                        <p>Schwinn Produce Farm</p>
                        <p>17624 Santa Fe Trail</p>
                        <p>Leavenworth, KS 66048</p>
                    </div>
                </VenueInfo>
            </VenueContainer>

    );
};



export default TheVenue;
