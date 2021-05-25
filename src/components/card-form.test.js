import "reflect-metadata";
import { render, screen } from '@testing-library/react';
import CardForm from "./card-form";

test('card-form has all the fields', () => {
    render(<CardForm></CardForm>);
    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const imageUrlInput = screen.getByPlaceholderText('Image URL');
    const submit = screen.getByText('Añadir', { selector: 'button[type="submit"]', exact: false });

    // const titleInput = document.querySelector('input[name="title"]');
    // const descriptionInput = document.querySelector('input[name="description"]');
    // const imageUrlInput = document.querySelector('input[name="imageUrl"]');
    // const submit = document.querySelector('button[type="submit"]');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(imageUrlInput).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
});

test('card-form preloads values when a card is given', () => {
    const testCard = {
        id: '1',
        title: 'test-title',
        description: 'test-description',
        imageUrl: 'test-imageUrl',
        created: new Date().toISOString(),
    }
    render(<CardForm card={testCard}></CardForm>);

    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const imageUrlInput = screen.getByPlaceholderText('Image URL');
    const submit = screen.getByText('Editar', { selector: 'button[type="submit"]', exact: false });

    // const titleInput = document.querySelector('input[name="title"]');
    // const descriptionInput = document.querySelector('input[name="description"]');
    // const imageUrlInput = document.querySelector('input[name="imageUrl"]');

    expect(titleInput.value).toEqual(testCard.title);
    expect(descriptionInput.value).toEqual(testCard.description);
    expect(imageUrlInput.value).toEqual(testCard.imageUrl);
    // Test it exists with edit mode text
    expect(submit).toBeInTheDocument();

});

test('card-form submits values are passed corrrectly to submit handler', () => {
    const testCard = {
        id: '1',
        title: 'test-title',
        description: 'test-description',
        imageUrl: 'test-imageUrl',
        created: new Date().toISOString(),
    }

    function handler(values) {
        expect(values.title).toEqual(testCard.title);
        expect(values.description).toEqual(testCard.description);
        expect(values.imageUrl).toEqual(testCard.imageUrl);
    }

    render(<CardForm card={testCard} onSubmit={handler}></CardForm>);
    
    const submit = screen.getByText('Editar', { selector: 'button[type="submit"]', exact: false });
    // const submit = document.querySelector('button[type="submit"]');
    submit.click();

});