import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container';

// function Signup(){
//     return (
//         <Container>
//             <Form title='Faça seu cadastro' text='Preenche com seus dados'>
//                 <Form.Label htmlFor='name'>Nome:</Form.Label>
//                 <Form.Input type='text' id='name' placeholder='Nome'/>
//                 <Form.Label htmlFor='email'>Email:</Form.Label>
//                 <Form.Input type='email' id='email' placeholder='Email'/>
//                 <Form.Label htmlFor='phone'>Telefone:</Form.Label>
//                 <Form.Input type='text' id='phone' placeholder='Telefone'/>
//                 <Form.Label htmlFor='password'>Senha:</Form.Label>
//                 <Form.Input type='password' id='password' placeholder='Senha'/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='#' id='link'>Fazer login</Form.Link>
//             </Form>
//         </Container>
//     )
// }

class Signup extends React.Component {
    constructor(){
        super()
        this.state = {
            disabled: true
        }
        this.name = React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.password = React.createRef()
    }
    onDisabledButton = () => {
        const inputEmail = this.email.current
        const inputName = this.name.current
        const inputPhone = this.phone.current
        const inputPassword = this.password.current

        if(inputEmail.hasError() || inputName.hasError() || inputPhone.hasError() || inputPassword.hasError()){
            this.setState({
                disabled:true
            })
        } else {
            this.setState({
                disabled: false
            })
        }
    }
    render() {
        return (
            <Container>
                <Form title='Faça seu cadastro' text='Preenche com seus dados'>
                    <Form.Label htmlFor='name'>Nome:</Form.Label>
                    <Form.Input ref={this.name} type='text' id='name' placeholder='Nome' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input ref={this.email} type='email' id='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='phone'>Telefone:</Form.Label>
                    <Form.Input ref={this.phone} type='tel' id='phone' placeholder='Telefone' onChange={this.onDisabledButton} minLength={10}/>
                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input ref={this.password} type='password' id='password' placeholder='Senha' onChange={this.onDisabledButton} minLength={6} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/login' id='link'>Fazer login</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Signup