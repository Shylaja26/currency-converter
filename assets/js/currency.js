let select = document.querySelectorAll('.currency');
// console.log(select);
let button = document.getElementById('btn');
let input = document.getElementById('input');
let message = document.getElementById('err');


(fetch('https://api.frankfurter.app/currencies'))
.then(res => res.json())
.then(result => displayDropdown(result))

 function displayDropdown(result){
 let curr = Object.entries(result);

 for (let index = 0; index < curr.length; index++) {
    const element = curr[index][0];
    // console.log(element);
    let opt =  `<option value="${element}">${element}</option>`
    // console.log(opt)
    select[0].innerHTML += opt
    select[1].innerHTML += opt
   
 }
}

 button.addEventListener('click', ()=>{
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let val = input.value;

   if(curr1 === curr2){
    // alert('please enter diff currency');
     message.style.display = "block";
     message.innerHTML =" Please Enter Different Currency";
     setTimeout(() => {
        message.style.display = "none"
     }, 1500);

   }
   else{
      convert(curr1,curr2,val);
   }
 });

 function convert(curr1,curr2,val){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });
    }
 