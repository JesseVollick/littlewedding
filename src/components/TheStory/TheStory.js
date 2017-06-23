import React, {Component} from 'react';
import styled from 'styled-components';
import StoryCard from './StoryCard';
import Date from './Date';




const Outer = styled.div`
    display:flex;
    flex-direction: column;
    height: 80vh;
    width:75%;
    margin: auto;
    padding: 10px;
    >h1{
        padding: 40px;
        margin: 0 auto;
    }
`


class TheStory extends Component {
    render() {
        return (
            <Outer>

               <h1>The Story</h1>
                <Date date="1987"></Date>
                <StoryCard
                    name="Patrick"
                    description="birthed"
                />
                <Date date="2015"></Date>
                <StoryCard
                name="Patrick"
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias at consequatur cumque dicta excepturi facere id itaque laudantium minima molestias mollitia nobis provident qui quod repudiandae velit, veniam veritatis?'
            />
                <StoryCard
                    name="Lauren"
                    description="Lorem ipsuisicing elit. Adipisci alias at consequatur cumque dicta excepturi facere iditaque laudantium minima molestias mollitia nobis provident qui quod repudiandae velit, veniam veritatis?"
                />
                <Date date="2016"></Date>
                <StoryCard
                    name="Patrick"
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias at consequatur cumque dicta excepturi facere id itaque laudantium minima molestias mollitia nobis provident qui quod repudiandae velit, veniam veritatis?'
                />
                <StoryCard
                    name="Lauren"
                    description="Lorem ipsum dolor sit am"
                />
            </Outer>
        );
    }
}


export default TheStory;
