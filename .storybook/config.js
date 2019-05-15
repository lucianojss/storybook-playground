import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import marginDecorator from './decorators/marginDecorator';

addDecorator(withA11y);
addDecorator(marginDecorator);

const req = require.context('../src/components', true, /\.stories\.js$/);

configure(req.keys().forEach(filename => req(filename)), module);
