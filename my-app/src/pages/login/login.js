import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container';

// function Login() {
//     return (
//         <Container>
//             <Form title='Login' text='Entre com seu e-mail e senha.'>
//                 <Form.Label htmlFor='email'>Email:</Form.Label>
//                 <Form.Input type='email' id='email' placeholder='Email' required/>
//                 <Form.Label htmlFor='password'>Senha:</Form.Label>
//                 <Form.Input type='password' id='password' placeholder='Senha' minLength={6} required/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='#' id='link'>Criar uma conta</Form.Link>
//             </Form>
//         </Container>
//     )   
// }

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            disabled: true
        }
    }
    onDisabledButton = () => {
        
    }
    render() {
        return (
            <Container>
                <Form title='Login' text='Entre com seu e-mail e senha.'>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input type='email' id='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input type='password' id='password' placeholder='Senha' minLength={6} onChange={this.onDisabledButton} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='#' id='link'>Criar uma conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login