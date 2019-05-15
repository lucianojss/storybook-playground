import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Input from './Input';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Input text', () => {
    const props = {
        label: text('Label', 'Enter your email address'),
        placeholder: text('Placeholder', 'Email address'),
        error: text('Error', ''),
        type: 'text',
        disabled: boolean('Disable', false)
    };

    return <Input {...props} />;
});
