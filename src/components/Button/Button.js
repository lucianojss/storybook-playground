import styled from 'styled-components';

const VARIANT = {
    PRIMARY: 'primary'
};

const Button = styled.button`
    outline: 0;
    min-width: 10rem;
    margin: 1rem;
    font-size: large;
    border: 2px ${props => (props.variant === VARIANT.PRIMARY ? 'lightBlue' : 'black')} solid;
    color: ${props => (props.variant === VARIANT.PRIMARY ? 'lightBlue' : 'black')};

    &:disabled {
        border: 2px solid grey;
        background: lightGrey;
        color: grey;
    }
`;

export default Button;
