import React from 'react'
import classes from './Registration.module.css'
import Input from './../../components/UI/Input/Input'
import { classesHandlerForRegistration, submitHandler, showInputList, onSendHendler } from './../../utils'

export default class Registration extends React.Component {
  constructor(props){
        super(props)    
        this.cls = [classes.Registration]
  }

  state = {
        isFormSend: false,
        isFormValid: false,
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
  // registerHandler = () => {
  // }
  // не работает зачистка поле в инпуте
  render() {
    console.log(this.state.formControls.email.value);
    
    return (
      <div className={classesHandlerForRegistration.call(this, classes)} 
        onClick={ event => event.stopPropagation() }>
          <div >
            <h1>Регистрация</h1>

            <form onSubmit={submitHandler.bind(this)}>
              { showInputList.call(this, Input, this.state.isFormSend) }
                <button 
                  type='success' 
                  // тута
                  onClick={event => onSendHendler.bind(this, event)}
                  disabled={!this.state.isFormValid}
                >
                  Зарегистрироваться
                </button>
                <button onClick={this.props.onToggle}>Отмена</button>
              </form>
            </div>
        </div>
    )
  }
}