import { URL, QUANTITY_OF_BEER_IN_THE_CATALOG} from './constants.js'

export const getFetch = (saveResultFromServer) => {
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
  }).then(items => saveResultFromServer(items))
  .catch(networkError => console.log(networkError.message));
};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validateControl = (value, validation) => {
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

export const isInvalid = (valid, touched, shouldValidate) => {
  return !valid && shouldValidate && touched
}


