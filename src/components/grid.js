import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
    justify-items: ${props => props.justify};
    gap: 1rem;

    ${props => props.responsive && `
        grid-template-columns: repeat(auto-fill, minmax(${props.colMinSize}, 1fr));
    `}
`;

export default Grid;
