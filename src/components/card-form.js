import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './button';
import Flex from './flex';
import Input from './input';

const CardFormWrapper = styled(Flex)`
    padding: 2rem 2rem;
    h1 {
        text-align: center;
    }
`;
function CardForm({ card = {}, onSubmit }) {

    const [values, setValues] = useState(card);
    
    function handleChange(key) {
        return (event) => setValues({
            ...values,
            [key]: event.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit && onSubmit(values);
    }

    return (
        <CardFormWrapper>
            <h1>Nueva tarjeta</h1>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange('title')} mt="1rem" label="Title" name="title" type="text"></Input>
                <Input onChange={handleChange('description')} mt="1rem" label="Description" name="description" type="text"></Input>
                <Input onChange={handleChange('imageUrl')} mt="1rem" label="Image URL" name="imageUrl" type="text"></Input>
                <Flex align="center" mt="3rem">
                    <Button type="submit">Añadir Tarjeta</Button>
                </Flex>
            </form>
        </CardFormWrapper>
    );
}

export default CardForm;