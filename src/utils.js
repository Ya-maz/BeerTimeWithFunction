import { URL, QUANTITY_OF_BEER_IN_THE_CATALOG} from './constants.js'

export function onToggleHandler(setState) {
  setState(prev => {
    return {
      ...prev,
      menu: !prev.menu,}
  })
    

}

export function onSendHendler(onToggle, setState) {
  setState(prev => {
    return {
      ...prev,
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
  })
  onToggle()
}

export function onFilterALCHandler(beers, setState, event ) {
  const value = event.target.value
  const filterBeers = beers.filter(beer => value ? 
    Math.trunc(beer.abv) === Number(value) :
    beers)
  setState(prev => {
    return {
      ...prev,
      filterBeers: filterBeers,}
    })
};
export function getFetch(setState) {
  const items = []
  fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(jsonResponse => jsonResponse.splice(0, QUANTITY_OF_BEER_IN_THE_CATALOG))
  .then(arr => {
    arr.forEach(element => {
      items.push({
        id: element.id,
        name: element.name,
        tagline: element.tagline,
        description: element.description,
        imageUrl: element.image_url, 
        abv: element.abv, //alcohol by volume
        ibu: element.ibu, //international bittering unit
        ebc: element.ebc, //color Units Ebc (European Brewery Convention) 
        food_pairing: element.food_pairing
      })
      
    })
    return items
  }).then(items => {
      setState((prev) => {
        return {
          ...prev,
          beers: items }
      })
      
  })
  .catch(networkError => console.log(networkError.message));
};

export function classesHandlerForMenu(classes, isOpen) {
  let cls = [
    classes.Menu,
    'fa'
  ]
  if (isOpen){
    cls.push('fa-times')
    cls = cls.filter(element => element !== 'fa-bars')
  } else {
    cls.push('fa-bars')
    cls = cls.filter(element => element !== 'fa-times')
  }
  return cls.join(' ')
}

export function classesHandlerForMain(classes, isOpen) {
  let cls = [classes.Main]
  if (isOpen) {
    cls.push(classes.open)
    return cls.join(' ')
  }
  cls = cls.filter(el => el !== classes.open)
  return cls.join(' ')
}

export function showFullCard(Card, filterBeers, beers) {
  let fullCard
  if (filterBeers){
    fullCard = filterBeers.map((element, index) => 
    <Card key={element+index} beer={element} />
    )
  } else {
    fullCard = beers.map((element, index) => 
    <Card key={element+index} beer={element} />
    )
  }
  return fullCard
}

export function classesHandlerForRegistration(classes, isOpen) {
  let cls = [classes.Registration]
  if (isOpen){
      cls.push(classes.Open)
      cls = cls.filter(element => element !== classes.Close)
  } else {
      cls.push(classes.Close)
      cls = cls.filter(element => element !== classes.Open)
  }
  return cls.join(' ')
}

export function submitHandler(event) {
  event.preventDefault()
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateControl (value, validation) {
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
  return isValid
}

function onChangeHandler(event, controlName, formControls, setState) {
  const control = {...formControls[controlName]}
  control.value = event.target.value
  control.touched = true
  control.valid = validateControl(control.value, control.validation)
      
  formControls[controlName] = control

  let isFormValid = true

  Object.keys(formControls).forEach(name =>{
    isFormValid = formControls[name].valid && isFormValid
    })
  setState(prev => {
    return {
      ...prev,
    formControls,
    isFormValid
    }
  })
}



export function showInputList(Input, formControls, setState) {
  const inputs = Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]
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
            onChange={event => onChangeHandler.call(this, event, controlName, formControls, setState)}
            />)
            
    })
  return inputs
}

export function isInvalid (valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched
}

export function classesHandlerForInput(classes, props) {
  const {valid, shouldValidate, touched} = props
  let cls = [classes.Input]
  if (isInvalid(valid, shouldValidate, touched)) {
    cls.push(classes.invalid)
  } else cls = cls.filter(el => el !== classes.invalid)
  return cls.join(' ')
}
