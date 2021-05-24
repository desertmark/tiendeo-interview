import styled from 'styled-components';
import { zIndex } from '../config/z-index';
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    z-index: ${props => props.zIndex || zIndex.overlay};
    background-color: black;
`;
