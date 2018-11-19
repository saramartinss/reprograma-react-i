import React from 'react'
import { getUser } from '../../infra/local-storage'
import { Redirect } from 'react-router-dom'
// const Home = () => {
//     return <div>Hello Home</div>
// }

class Home extends React.Component {
    constructor(){
        super()
    }
    render(){
        if(getUser().email){
            return <div>Hello Home</div>
        } else {
            return <Redirect to='/login' />
        }        
    }
}

export default Home