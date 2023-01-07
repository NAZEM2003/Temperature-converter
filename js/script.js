let from = document.querySelector('.convert-from');
let to = document.querySelector('.convert-to');
let moToggle = document.querySelector('.movement-toggle');
let input = document.querySelector('.number-input');
let convertBTN = document.querySelector('.convert-btn');
let output = document.querySelector('.output');

var condition = 'toF';

moToggle.addEventListener('click' , ()=>{
    if(condition == 'toF'){

        from.innerHTML = 'فارنهایت';
        to.innerHTML = 'سلسیوس';
        input.placeholder = 'درجه فارنهایت';
        condition = 'toC';
    }
    else{

        from.innerHTML = 'سلسیوس';
        to.innerHTML = 'فارنهایت';
        input.placeholder = 'درجه سلسیوس';
        condition = 'toF'
    }
})

convertBTN.addEventListener('click' , ()=>{
    const value = input.value;
    if(value == ''){
        alert('لطفا مقدار ورودی را مشخص کنید');
        output.innerHTML = '';
    }
    else if(condition == 'toC'){
        let cel = ((value - 32)*5/9).toFixed(2);
        output.innerHTML = `${cel} درجه سلسیوس`
    }
    else{
        let far = (value * 1.8 + 32).toFixed(2);
        output.innerHTML = `${far} درجه فارنهایت`
    }
})


