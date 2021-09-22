import React from 'react'
import classes from './Registration.module.css'
import open from './RegOpen.module.css'
import close from './RegClose.module.css'
import Input from '../components/UI/Input/Input'

export default class Registration extends React.Component {
    constructor(props){
        super(props)    
        console.log('Registration', props)
        this.cls = [classes.Registration]
    }

    // classesHandler = () => {
    //     //не приходит isOpen
    //     if (this.props.isOpen){
    //         this.cls.push(open.Registration)
    //     } else{
    //         this.cls.push(close.Registration)
    //     }
    //     return this.cls.join(' ')
    
    // }
    registerHandler = () => {

    }
    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Registration}>
                <div>
                    <h1>Регистрация</h1>

                    <form onSubmit={this.submitHandler} style={{'border': '1px solid red'}}>
                        <Input label='ФИО' />
                        <Input label='Пароль'/>
                        <Input label='Email' />

                        <button type='success' onClick={this.registerHandler}>Зарегестрироваться</button>
                    </form>
                </div>
            </div>
        )
    }
}