import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.color || 'white'};
    background-color: ${props => props.bgColor || '#eb4034'};
    width: 11rem;
    height: 3.5rem;
    font-size: 1rem;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    &:hover {
        filter: brightness(110%);
    }

    ${props => props.circle && `
        border-radius: 50px;
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
    `};

    ${props => props.fixed && `
        position: fixed;
        bottom: 1rem;
        right: 1rem;
    `};

    ${props => props.block && `
        width: 100%;
        border-radius:0;
    `};

    ${props => props.block && `
        background-color: white;
        color: #eb4034;
        border: 1px solid #f0aca8;
    `};

`;


Button.defaultProps = {
    circle: false,
}

export default Button;