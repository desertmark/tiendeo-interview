import React from 'react';
import styled from 'styled-components';
import Flex from './flex';
import Text from './text';
export const InputWrapper = styled(Flex)`
    padding: 1rem;
    .input__label {
        margin-bottom: 0.25rem;
    }
   input {
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 1rem;
        height: 3rem;
        outline: none;
        padding: 0;
   }
`;
function Input({ name, placeholder, label, value, ...rest }) {

    return (
        <InputWrapper {...rest}>
            {/* <Text class="input__label">{label}</Text> */}
            <input name={name} placeholder={placeholder || label} value={value}></input>
        </InputWrapper>
    );
}

export default Input;