import React from 'react';
import styled from 'styled-components';
import Flex from './flex';
import Text from './text';
import placeholder from '../assets/images/placeholder.jpeg';
import Button from './button';
import { withDependency } from '../di.context';
import { appConfig } from '../config/inversify.depedencies';
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
        height: 350px;
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
function Card({ card, width, onEdit, onRemove, appConfig }) {
    
    function edit() {
        onEdit && onEdit(card);
    }

    function remove() {
        onRemove && onRemove(card);
    }

    function hasImage() {
        return card.imageUrl.replace(appConfig.baseUrl + '/', '');
    }

    const { id, created, imageUrl, title, description,  } = card;
    return (
        <CardWrapper width={width}>
            <Flex className="card__image-wrapper">
                <img className="card-image-wrapper__img" src={hasImage() ? imageUrl : placeholder}></img>
                <Text className="card-image-wrapper__title" secondary>{title}</Text>
            </Flex>
            <Flex className="card__description" flex="1 1 auto">
                <Text>{description}</Text>
            </Flex>
            <Flex direction="row">
                <Button block outline onClick={() => edit()}>Editar</Button>
                <Button block outline onClick={() => remove()}>Eliminar</Button>
            </Flex>
        </CardWrapper>
    );
}

export default withDependency(Card, [appConfig]);