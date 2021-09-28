export function onToggleHandler() {
  this.setState({
    menu: !this.state.menu
  })
};

export function onSendHendler(event) {
  this.setState((prev) => {
    return {formControls: prev.formControls}
  })
}



export function onFilterALCHandler(event) {
  const beers = this.state.beers
  const filterBeers = beers.filter(beer => event.target.value ? 
    Math.trunc(beer.abv) === Number(event.target.value) :
    beers)
    this.setState(() => {
      return {filterBeers: filterBeers}
    })
};

export function getFetch() {
  const items = []
  fetch('https://api.punkapi.com/v2/beers')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(jsonResponse => jsonResponse.splice(0,20))
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

export function showInputList(Input) {
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
            onChange={event => onChangeHandler.call(this, event, controlName)} />)
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