import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container';

function Signup(){
    return (
        <Container>
            <Form title='Faça seu cadastro' text='Preenche com seus dados'>
                <Form.Label htmlFor='name'>Nome:</Form.Label>
                <Form.Input type='text' id='name' placeholder='Nome'/>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Input type='email' id='email' placeholder='Email'/>
                <Form.Label htmlFor='phone'>Telefone:</Form.Label>
                <Form.Input type='text' id='phone' placeholder='Telefone'/>
                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input type='password' id='password' placeholder='Senha'/>
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#' id='link'>Fazer login</Form.Link>
            </Form>
        </Container>
    )
}

export default Signup