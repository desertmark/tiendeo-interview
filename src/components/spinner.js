import React  from 'react';
import Flex from './flex';
import styled from 'styled-components';
import { Overlay } from './overlay';
import spinnerImg from '../assets/images/spinner.svg';
import { zIndex } from '../config/z-index';
const SpinnerWrapper = styled(Flex)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: ${zIndex.spinner};
    img {
        width: 3rem;
        height: 3rem;
        z-index: ${zIndex.spinner};
    }

`;

function Spinner({ isVisible }) {
    return isVisible ? ( 
        <SpinnerWrapper justify="center" align="center">
            <Overlay zIndex={zIndex.spinner}></Overlay>
            <img src={spinnerImg}></img>
        </SpinnerWrapper>
    ) : null;
}
export default Spinner;