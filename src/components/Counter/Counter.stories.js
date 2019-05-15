import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter';

const stories = storiesOf('Demo', module);

stories.add('Counter', () => {
    return <Counter />;
});
