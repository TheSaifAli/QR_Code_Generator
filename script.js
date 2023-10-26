const api_key ='OW8VaQY/Vx8rv7cGI5d82w==qhKdtqaY9YzZGpvZ';


const option = {
    method:'GET',
    headers:{
    'X-Api-Key': api_key
    }
}

const formEl= document.querySelector('form');
const inputEl = formEl.querySelector('input');
const QRImageEl = document.querySelector('#QRImage');
const QRboxEl = document.querySelector('#QRbox');
const qrCaptionEl = document.querySelector('#qrCaption');
const resetBtnEl = document.querySelector('#resetBtn');

formEl.addEventListener('submit',async(e)=>{
e.preventDefault();
    if(inputEl.value==="")
    {
        inputEl.classList.add('errorStyle');
        setTimeout(() => {
            inputEl.classList.remove('errorStyle')
        }, 1000);
    }
    else
    {

        const url = `https://api.qrserver.com/v1/create-qr-code/?data=${inputEl.value}&color=ba7c5c&bgcolor=f4eff1`;
         qrCaptionEl.classList.add('active');
         qrCaptionEl.textContent='Loading...'
         QRImageEl.src=url;
         QRboxEl.classList.add('qrStyle')
         QRboxEl.classList.add('qrShow')
         inputEl.value='';
         setTimeout(() => {
             qrCaptionEl.textContent=''
         }, 500);

         resetBtnEl.addEventListener('click',()=>{
            QRboxEl.classList.remove('qrStyle');
            QRboxEl.classList.add('qrShow')
            qrCaptionEl.classList.remove('active');
            
         }
         )

    }
})


window.addEventListener('focus',()=>{
    document.title='QR Code Generator';
})
window.addEventListener('blur',()=>{
    document.title='Come Back, QR is Here!';
})