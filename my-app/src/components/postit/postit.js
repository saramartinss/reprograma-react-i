import React from 'react'
import Form from '../form'
import { createPostit, deletePostit, updatePostitApi } from '../../apis/postit.api'

import './postit.css'

class Postit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id ? this.props.id : 0,
            title: this.props.title ? this.props.title : '',
            text: this.props.text ? this.props.text : '',
            editing: false
        }
    }
    handlePostitClick = () => {
        console.log('handlePostitClick')
        this.setState({
            editing: true
        })
    }
    handlePostitRemove = (e) => {
        console.log('handlePostitRemove')
        e.stopPropagation()
        const id = this.state.id
        deletePostit(id)
            .then((response) => {
                console.log(response)
                this.props.updatePostits()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    handlePostitSubmit = (e) => {
        e.preventDefault()

        if (this.state.id) {
            const postit = {
                title: this.state.title,
                text: this.state.text,
                id: this.state.id
            }
            updatePostitApi(postit)
                .then((response) => {
                    this.setState({
                        editing: false
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
                
        } else {
            const postit = {
                title: this.state.title,
                text: this.state.text
            }
            createPostit(postit)
                .then((response) => {
                    console.log(response)
                    this.props.updatePostits()
                    this.setState({
                        id: '',
                        title: '',
                        text: ''
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    setTitle = (e) => {
        const inputTitle = e.target.value
        console.log('evento ', e)
        this.setState({
            title: inputTitle
        })
    }
    setText = (event) => {
        const inputText = event.target.value
        this.setState({
            text: inputText
        })
    }
    render() {
        return (
            <div onClick={this.handlePostitClick} className='postit'>
                <Form onSubmit={this.handlePostitSubmit}>
                    {this.state.editing && (
                        <button
                            type='button'
                            onClick={this.handlePostitRemove}
                            className='postit__button-remove'
                        >
                            X
                                </button>
                    )

                    }
                    <input
                        type='text'
                        className='postit__title'
                        placeholder='Título'
                        name='title'
                        value={this.state.title}
                        onChange={this.setTitle}
                    />
                    <textarea
                        className='postit__text'
                        placeholder='Digite o texto...'
                        name='text'
                        value={this.state.text}
                        onChange={this.setText}
                    />
                    {this.state.editing &&
                        (<button className='postit__button-completed'>
                            Concluído
                            </button>)
                    }
                </Form>
            </div>
        )
    }
}

export default Postit