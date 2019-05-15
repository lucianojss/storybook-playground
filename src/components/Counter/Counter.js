import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/';

const Section = styled.section`
    background-color: lightsalmon;
    text-align: center;
`;

const Paragraph = styled.p`
    font-size: xx-large;
    font-weight: bold;
`;

/**
 * Counter built with styled Components
 */
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <Section>
            <Paragraph>{count}</Paragraph>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement} variant={'primary'}>
                -
            </Button>
        </Section>
    );
};

export default Counter;
