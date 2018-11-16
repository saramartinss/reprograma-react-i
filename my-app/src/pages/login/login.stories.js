import React from 'react'
import {storiesOf} from '@storybook/react'
import Login from './index'
import StoryRouter from 'storybook-react-router'

storiesOf('Pages/Login', module)
    .addDecorator(StoryRouter())
    .add('default', () => (
        <Login/>
    ))