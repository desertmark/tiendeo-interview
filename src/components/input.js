import React from 'react';
import styled from 'styled-components';
import Flex from './flex';
import Text from './text';
export const InputWrapper = styled(Flex)`
    padding: 1rem;

   input {
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 1rem;
        height: 3rem;
        outline: none;
        padding: 0;
   }
`;
function Input({ name, placeholder, label, value, defaultValue, disabled, type, ...rest }) {

    return (
        <InputWrapper {...rest}>
            <input disabled={disabled} type={type} name={name} placeholder={placeholder || label} value={value} defaultValue={defaultValue}></input>
        </InputWrapper>
    );
}

export default Input;