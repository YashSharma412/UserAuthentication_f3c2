const submitBtn = document.getElementById("submitBtn");
const dataForm = document.getElementById("sign_in_form");
// console.log(submitBtn)

// if user data already exists in the local storage, it happens so if on logout it isnt deleted
if (localStorage.getItem("userData") !== null) {
    alert("You are already logged in as you didnt log out earlier");
    window.location.href = './profile.html';
}

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    CollectUserInfo();
});

function CollectUserInfo() {
    console.log("run")
}