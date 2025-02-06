const firstName = prompt("Enter Your First Name : ");
const lastName = prompt("Enter Your Last Name : ");
const country = prompt("Enter Your Country : ");
const phoneNumber = prompt("Enter Your Phone Number : ");
const state = prompt("Enter Your State : ");
const city = prompt("Enter Your City : ");

if(firstName=='' || lastName=='' || country=='' || phoneNumber=='' || state==''
    || city=='') alert("Details are Not Entered !. Please Fill All the Details")
else{
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.country = country;
    user.phoneNumber = phoneNumber;
    user.state = state;
    user.city = city;
    localStorage.setItem("userInfo",JSON.stringify(user));
}

let spanElements = document.querySelectorAll('span');
console.log(spanElements);

let details = JSON.parse(localStorage.getItem('userInfo'));
// console.log(details);
spanElements.forEach((element, idx)=>{
    if(idx==0) element.innerText = details.firstName;
    if(idx==1) element.innerText = details.lastName;
    if(idx==2) element.innerText = details.country;
    if(idx==3) element.innerText = details.phoneNumber;
    if(idx==4) element.innerText = details.state;
    if(idx==5) element.innerText = details.city;
})