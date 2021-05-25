import React, { useEffect, useRef, useState } from 'react';
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
function CardForm({ card, onSubmit }) {

    const [values, setValues] = useState(card);
    const imgRef = useRef();
    function handleChange(key) {
        return (event) => setValues({
            ...values,
            [key]: event.target.value,
        });
    }
    /**
     * 
     * @param {Event} e 
     */
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit && onSubmit(values);
    }

    function getPreviewUrl(file) {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                res(e.target.result)
            }
            reader.onerror = rej;
            reader.readAsDataURL(file);
        })
    }

    function handleImage(e) {
        const image = e.target.files[0];
        getPreviewUrl(image).then(imageUrl => {
            setValues({
                ...values,
                image,
                imageUrl,
            });
        });
    }

    return (
        <CardFormWrapper>
            <h1>Nueva tarjeta</h1>
            <form onSubmit={handleSubmit}>
                <Input defaultValue={values && values.title} onChange={handleChange('title')} mt="1rem" label="Title" name="title" type="text"></Input>
                <Input defaultValue={values && values.description} onChange={handleChange('description')} mt="1rem" label="Description" name="description" type="text"></Input>
                <Input disabled={!!card} onChange={handleImage} mt="1rem" label="Image" name="image" type="file"></Input>
                <Flex align="center" mt="3rem">
                    <Button type="submit">
                        {card ? 'Editar tarjeta' : 'Añadir Tarjeta'}
                    </Button>
                </Flex>
            </form>

            {values && values.imageUrl &&
                <Flex mt="1rem">
                    <img width="100%" height="350px" ref={imgRef} src={values.imageUrl}></img>
                </Flex>
            }
        </CardFormWrapper>
    );
}

export default CardForm;