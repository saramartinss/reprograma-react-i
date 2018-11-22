import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import Home from './home'
import Navbar from '../../components/navbar'

storiesOf('Pages/Home', module)
    .addDecorator(StoryRouter())
    .add('default', () => (
        <React.Fragment>
            <Navbar />
            <Home user='sara' />
        </React.Fragment>
    ))