import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Menu from './index'

storiesOf('Components/Navbar/Menu', module)
    .addDecorator(StoryRouter())
    .add('default', () => (
        <Menu />
    ))