const signUpForm = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

const validateEmptyElement = element =>{
   
    if(element.value.trim().length === 0){
        element.classList.add('form__input--warning')       
        element.nextSibling.classList.add('form__warning--show')
        return false;        
    }

    element.classList.remove('form__input--warning')       
    element.nextSibling.classList.remove('form__warning--show')
    return true    
}

const validateEmail = email =>{ 

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if(email.value.trim().length === 0) return false
    
    if(!re.test(String(email.value).toLowerCase())){             
        email.classList.add('form__input--warning') 
        email.nextSibling.classList.add('form__warning--show')
        email.nextSibling.textContent = "Looks like this is not an email"
        email.placeholder = email.value        
        email.value = ""
        return false   
    }

    email.classList.remove('form__input--warning') 
    email.nextSibling.classList.remove('form__warning--show')
    return true    
}

signUpForm.addEventListener('submit', e =>{
    e.preventDefault() 
    const getName = validateEmptyElement(firstName)
    const getLastName = validateEmptyElement(lastName)
    const getEmail = validateEmptyElement(email)
    const validEmail = validateEmail(email)
    const getPassword = validateEmptyElement(password)
    
    if(getName && getLastName && getEmail && validEmail && getPassword){      
        //Do something ...
    }
})