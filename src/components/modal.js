import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Flex from './flex';

const ModalWrapper = styled(Flex)`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    
    .modal__content {
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    z-index: 1;
    background-color: black;
`;

function Modal({ children, isVisible, onClose }) {
    function closeModal() {
        onClose && onClose();
    }

    return isVisible && (
        <ModalWrapper justify="center" align="center">
            <Overlay onClick={() => closeModal()}></Overlay>
            <Flex className="modal__content">{children}</Flex>
        </ModalWrapper>
    );
}

export default Modal;