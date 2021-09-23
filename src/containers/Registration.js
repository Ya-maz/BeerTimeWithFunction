import React from 'react'
import classes from './Registration.module.css'
import open from './RegOpen.module.css'
import close from './RegClose.module.css'
import Input from '../components/UI/Input/Input'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Registration extends React.Component {
    constructor(props){
        super(props)    
        this.cls = [classes.Registration]
    }

    state = {
        formControls:{
            email: {
                value: '',
                type: 'email',
                label: 'Email', 
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль', 
                errorMessage: 'Введите пароль не менее 6 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }

        }
    }

    classesHandler = () => {
        if (this.props.isOpen){
            this.cls.push(open.Registration)
            this.cls = this.cls.filter(element => element !== close.Registration)
        } else {
            this.cls.push(close.Registration)
            this.cls = this.cls.filter(element => element !== open.Registration)
        }
        return this.cls.join(' ')
    }
    registerHandler = () => {
    }
    submitHandler = event => {
        event.preventDefault()
    }

    validateControl (value, validation) {
        if (!validation){
            return true
        }
        let isValid = true

        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }
        if(validation.email){
            isValid = validateEmail(value) && isValid
        }
        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        console.log('validateControl', isValid)
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.touched = true

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        
        formControls[controlName] = control

        this.setState({
            formControls
        })
    }
    //возможно ли здесь использовать стрелочную функцию?
    showInputList = () => {
        const inputs = Object.keys(this.state.formControls)
            .map((controlName, index) => {
                const control = this.state.formControls[controlName]
                return (
                    <Input 
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => this.onChangeHandler(event, controlName)} />)
            
        })
        return inputs
    }
    render() {
        return (
            <div className={this.classesHandler()} 
                onClick={event => event.stopPropagation() }>
                <div >
                    <h1>Регистрация</h1>

                    <form onSubmit={this.submitHandler} style={{'border': '1px solid red'}}>
                        {this.showInputList()}

                        <button type='success' onClick={this.registerHandler}>Зарегестрироваться</button>
                    </form>
                </div>
            </div>
        )
    }
}