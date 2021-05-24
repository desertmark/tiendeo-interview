import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
    margin-top: ${({ mt }) => mt};
    margin-bottom: ${({ mb }) => mb};
    max-width: ${({ mw }) => mw};
    flex: ${({ flex }) => flex};
`;

Flex.defaultProps = {
    direction: 'column',
}

export default Flex;