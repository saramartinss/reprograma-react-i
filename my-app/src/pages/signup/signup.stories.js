import React from 'react'
import {storiesOf} from '@storybook/react'
import Signup from './index'
import StoryRouter from 'storybook-react-router'

storiesOf('Pages/Signup', module)
    .addDecorator(StoryRouter())
    .add('default', () => (
        <Signup/>
    ))