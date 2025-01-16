const fullname=document.getElementById('name');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');
if(form){
    form.addEventListener('submit',(e)=>{
        let messages=[]
        if(fullnamename.value===''||fullnamename.value==null){
            messages.push('Name is required')
        }
        if(username.value.length<=6){
            messages.push('Username must be longer than 6 characters')
        }
        if(password.value.length<=6){
            messages.push('Password must be longer than 6 characters')
        }
        if(messages.length>0){
            e.preventDefault()
            errorElement.innerText=messages.join(', ')
        }
    })
}
