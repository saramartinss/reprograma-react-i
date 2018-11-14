import React from 'react'
import {storiesOf} from '@storybook/react'
import Form from './index'

storiesOf('Components/Form', module)
  .add('default', () => (
    <Form>
      <h1>Formulário</h1>
      <label>Exemplo </label>
      <input type='text'></input></Form>
))