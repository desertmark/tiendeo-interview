import React from 'react';
import styled from 'styled-components';
import Flex from './flex';
import Text from './text';
import placeholder from '../assets/images/placeholder.jpeg';
export const CardWrapper = styled(Flex)`
    width: ${props => props.width};
    max-width: ${props => props.mw};
    background-color: white;
    box-shadow: 0px 10px 9px #666;
    .card__image-wrapper {
        position: relative;
    }

    .card-image-wrapper__img {
        width: 100%;
    }
        
    .card-image-wrapper__title {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        font-weight: bold;
    }

    .card__description {
        padding: 1rem;
    }
`;
function Card({ title, description, imageUrl, created, id, width }) {

    return (
        <CardWrapper width={width}>
            <Flex className="card__image-wrapper">
                {/* <img className="card-image-wrapper__img" src={imageUrl || placeholder}></img> */}
                <img className="card-image-wrapper__img" src="https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"></img>
                <Text className="card-image-wrapper__title" secondary>{id}</Text>
            </Flex>
            <Flex className="card__description">
                <Text>{created}</Text>
            </Flex>
        </CardWrapper>
    );
}

export default Card;