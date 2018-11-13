import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container';

function Login() {
    return (
        <Container>
            <Form title='Login' text='Entre com seu e-mail e senha.'>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Input type='email' id='email' placeholder='Email'/>
                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input type='password' id='password' placeholder='Senha'/>
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='#' id='link'>Criar uma conta</Form.Link>
            </Form>
        </Container>
    )   
}

export default Login