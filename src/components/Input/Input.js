import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid ${props => (props.error ? 'red' : 'black')};
    box-sizing: border-box;
    background-color: white;
    padding: 0.9rem 1rem 0.7rem;
    outline: 0;
    width: 100%;
    font-size: medium;

    :disabled {
        background-color: lightgrey;
    }
`;

const Label = styled.label`
    font-size: large;
    margin-bottom: 0.5rem;
    width: 100%;
`;

const ErrorLabel = styled.div`
    margin-top: 0.2rem;
    font-style: italic;
    color: red;
`;

const Input = ({ label, error, ...props }) => (
    <>
        {label ? (
            <Label>
                {label}
                <StyledInput error={error} {...props} />
            </Label>
        ) : (
            <StyledInput error={error} {...props} />
        )}
        {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
);

export default Input;
