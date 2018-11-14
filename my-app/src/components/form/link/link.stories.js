import React from 'react'
import {storiesOf} from '@storybook/react'
import Link from './index'
import StoryRouter from 'storybook-react-router'

storiesOf('Components/Form/Link', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Link href='/'>Link Here</Link>
))