const pin = document.getElementById("pin");
const submitBtn = document.getElementById("submit-btn");
const myPin="1234";
const wrongPin = document.getElementById("wrong-pin");
//pin verification
submitBtn.addEventListener("click",function(){
    const enteredPin = pin.value;
    if(enteredPin==myPin)
    {
        window.location.href="popup.html";
    }
    else
    {
        wrongPin.style.display="block";
    }
});
submitBtn.addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        submitBtn.click();
    }
}
);
//popup.html
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click",function(){
    window.location.href="security.html";
    alert("hi");
})
//password.html
function showPassword(){
    const password = document.getElementById("password");
    password.type="text";
    password.style.cursor="pointer";
}
