import React from 'react';
import styled from 'styled-components';
import Flex from './flex';
import Text from './text';
export const RadioWrapper = styled(Flex)`
    font-size: 1rem;
`;
function Radio({ name, label, value, options, onChange, ...rest }) {
    function handleChange(e) {
        onChange && onChange(e.target.value);
    }
    return (
        <RadioWrapper {...rest}>
            <Text className="input__label">{label}</Text>
            <Flex direction="row">
                {options && options.map((option, index) => {
                    return <Flex key={index} direction="row">
                        <label>
                            <input type="radio" name={name} value={option.value} onChange={handleChange} defaultChecked={option.value === value}></input>
                            {option.label}
                        </label>
                    </Flex>;
                })}
            </Flex>
        </RadioWrapper>
    );
}

export default Radio;