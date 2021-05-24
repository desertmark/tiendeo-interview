import React from 'react';
import styled from 'styled-components';
import { zIndex } from '../config/z-index';
import Flex from './flex';
import { Overlay } from './overlay';

const ModalWrapper = styled(Flex)`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    
    .modal__content {
        justify-content: center;
        align-items: center;
        z-index: ${zIndex.modal};
    }
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