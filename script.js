const toastBox = document.getElementById("toastBox");
const buttons = document.querySelector(".buttons");

const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error found';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input';

function showToast(text){
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = text;
    toastBox.appendChild(toast);

    if(text.includes('Error')){
        toast.classList.add('error');
    }
    if(text.includes('Invalid')){
        toast.classList.add('invalid');
    }

    // setTimeout(()=>{
    //     toast.remove();
    // },4000);
}



