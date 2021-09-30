import React, {useReducer} from 'react'
import classes from './Registration.module.css'
import Input from './../../components/UI/Input/Input'
import { validateControl } from './../../utils'

const Registration = (props) => {

  const FORMS_CONTROLS = 'form_controls'
  const REFRESH = 'refresh'

  const reducer = (state, action) => {
    switch (action.type) {
      case FORMS_CONTROLS: return {...state, formControls: action.newFormControls,
      isFormValid: action.newIsFormFalid}
      case REFRESH: return {
        ...state,
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
      default: return state
    }
  }

  const [state, dispatch] = useReducer( reducer, { 
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
  })
  
  let cls = [classes.Registration]
  const classesHandler = () => {
    if (props.isOpen){
      cls.push(classes.Open)
      cls = cls.filter(element => element !== classes.Close)
    } else {
      cls.push(classes.Close)
      cls = cls.filter(element => element !== classes.Open)
    }
    return cls.join(' ')
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  let newFormControls 
  let newIsFormFalid

  const onChangeHandler = (event, controlName, formControls) => {
    const control = {...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
        
    formControls[controlName] = control
  
    let isFormValid = true
  
    Object.keys(formControls).forEach(name =>{
      isFormValid = formControls[name].valid && isFormValid
      })
    newFormControls = formControls
    newIsFormFalid = isFormValid
    dispatch({type: FORMS_CONTROLS, newFormControls, newIsFormFalid})
  }

  const showInputList = () => {
    const inputs = Object.keys(state.formControls).map((controlName, index) => {
        const control = state.formControls[controlName]
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
              onChange={event => onChangeHandler(event, controlName, state.formControls)}
              />)
      })
    return inputs
  }

  const onSendHendler = () => { 
    dispatch({type: REFRESH})
    props.onToggle()
  }

  return (
    <div className={classesHandler()} 
      onClick={ event => event.stopPropagation() }>
        <div >
          <h1>Регистрация</h1>

          <form onSubmit={submitHandler}>
            { showInputList() }
              <button 
                type='success' 
                onClick={onSendHendler}
                disabled={!state.isFormValid}
              >
                Зарегистрироваться
              </button>
              <button onClick={props.onToggle}>Отмена</button>
          </form>
        </div>
      </div>
  )
}

export default Registration
