import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
    .add('Button', () => {
        const props = {
            onClick: action('clicked'),
            disabled: boolean('Disabled', false)
        };
        const textKnob = text('Button text', 'This is a default button');

        return <Button {...props}>{textKnob}</Button>;
    })
    .add('Button with style', () => {
        const props = {
            variant: 'primary',
            onClick: action('clicked'),
            disabled: boolean('Disabled', false)
        };
        const textKnob = text('Button text', 'This is a default button');

        return <Button {...props}>{textKnob}</Button>;
    });
