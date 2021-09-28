import { URL, QUANTITY_OF_BEER_IN_THE_CATALOG} from './constants.js'

export function onToggleHandler() {
  this.setState({
    menu: !this.state.menu
  })
};

export function onSendHendler() {
  this.setState({
    formControls: {email: {
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
  }}
  })
  this.props.onToggle()
}

export function onFilterALCHandler(event) {
  const value =event.target.value
  const beers = this.state.beers
  const filterBeers = beers.filter(beer => value ? 
    Math.trunc(beer.abv) === Number(value) :
    beers)
    this.setState(() => {
      return {filterBeers: filterBeers}
    })
};

export function getFetch() {
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
      this.setState(() => {
        return {beers: items }
      })
      
  })
  .catch(networkError => console.log(networkError.message));
};

export function classesHandlerForMenu() {
  if (this.props.isOpen){
    this.cls.push('fa-times')
    this.cls = this.cls.filter(element => element !== 'fa-bars')
  } else {
    this.cls.push('fa-bars')
    this.cls = this.cls.filter(element => element !== 'fa-times')
  }
  return this.cls.join(' ')
}

export function classesHandlerForMain(classes) {
  if (this.props.isOpen) {
    this.cls.push(classes.open)
    return this.cls.join(' ')
  }
  this.cls = this.cls.filter(el => el !== classes.open)
  return this.cls.join(' ')
}

export function showFullCard(Card) {
  let fullCard
  if (this.props.filterBeers){
    fullCard = this.props.filterBeers.map((element, index) => 
    <Card key={element+index} beer={element} />
    )
  } else {
    fullCard = this.props.beers.map((element, index) => 
    <Card key={element+index} beer={element} />
    )
  }
  return fullCard
}

export function classesHandlerForRegistration(classes) {
  if (this.props.isOpen){
      this.cls.push(classes.Open)
      this.cls = this.cls.filter(element => element !== classes.Close)
  } else {
      this.cls.push(classes.Close)
      this.cls = this.cls.filter(element => element !== classes.Open)
  }
  return this.cls.join(' ')
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

function onChangeHandler(event, controlName) {
  const formControls = {...this.state.formControls}
  const control = {...formControls[controlName]}
  control.value = event.target.value
  control.touched = true
  control.valid = validateControl(control.value, control.validation)
      
  formControls[controlName] = control

  let isFormValid = true

  Object.keys(formControls).forEach(name =>{
    isFormValid = formControls[name].valid && isFormValid
    })
  this.setState({
    formControls, isFormValid
  })
}

export function showInputList(Input, inputRef) {
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
            onChange={event => onChangeHandler.call(this, event, controlName)}
            inputRef={inputRef}
            />)
            
    })
  return inputs
}

export function isInvalid (valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched
}

export function classesHandlerForInput(classes) {
  if (isInvalid(this.props.valid, this.props.shouldValidate, this.props.touched)) {
    this.cls.push(classes.invalid)
  } else this.cls = this.cls.filter(el => el !== classes.invalid)
  return this.cls.join(' ')
}