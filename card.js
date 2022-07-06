let parent = document.querySelector('#parent');
let ele = document.querySelector('#elemen');

let inputBox = document.querySelector('#input-box1');
let btn1 = document.querySelector('#btn-1');

let inputBox2 = document.querySelector('#input-box2');
let butn = document.querySelector('#btn-2');

let inputBox3 = document.querySelector('#input-box3');
let btn3 = document.querySelector('#btn-3');

let inputBox4 = document.querySelector('#input-box4');
let btn4 = document.querySelector('#btn-4');

let inputBox5 = document.querySelector('#input-box5');
let btn5 = document.querySelector('#btn-5');

let inputBox6 = document.querySelector('#input-box6');
let btn6 = document.querySelector('#btn-6');

function butn1() {
     let price = 500;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('h2');
     let btn2 = document.createElement('button');
     ele.appendChild(elem);
     elem.append(ele1, ele3, ele2, btn2);
     elem.className = 'left-side1'
     ele1.textContent = 'BAT';
     btn2.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox.value * price;
     btn2.setAttribute("onclick", "run(this)")
     // document.body.appendChild(ele);
}
btn1.addEventListener('click', butn1);

function butn2() {
     let price1 = 200;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('p');
     let but = document.createElement('button');
     console.log(but);
     ele.appendChild(elem)
     elem.appendChild(ele1);
     elem.appendChild(ele3);
     elem.appendChild(ele2);
     elem.appendChild(but);
     console.log(elem);
     elem.className = 'left-side1'
     ele1.innerText= 'BALL';
     but.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox2.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox2.value * price1;
     but.setAttribute("onclick", "run(this)")
}
butn.addEventListener('click', butn2);

function butn3(){

     let price3 = 400;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('p');
     let btnRe = document.createElement('button');
     ele.appendChild(elem)
     elem.appendChild(ele1);
     elem.appendChild(ele3);
     elem.appendChild(ele2);
     elem.appendChild(btnRe);
     console.log(elem);
     elem.className = 'left-side1'
     ele1.textContent = 'STUMP';
     btnRe.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox3.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox3.value * price3;
     btnRe.setAttribute("onclick", "run(this)")
}                 
btn3.addEventListener('click',butn3);

function butn4(){
     
     let price4 = 350;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('p');
     let btnRem = document.createElement('button');
     ele.appendChild(elem)
     elem.appendChild(ele1);
     elem.appendChild(ele3);
     elem.appendChild(ele2);
     elem.appendChild(btnRem);
     console.log(elem);
     elem.className = 'left-side1'
     ele1.textContent = 'KEEPING GLOVE';
     btnRem.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox4.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox4.value * price4;
     btnRem.setAttribute("onclick", "run(this)")
}                 
btn4.addEventListener('click',butn4);

function butn5(){

     let price5 = 1200;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('h2');
     let btnRemo = document.createElement('button');
     ele.appendChild(elem)
     elem.appendChild(ele1);
     elem.appendChild(ele3);
     elem.appendChild(ele2);
     elem.appendChild(btnRemo);
     console.log(elem);
     elem.className = 'left-side1'
     ele1.textContent = 'PAD';
     btnRemo.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox5.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox5.value * price5;
     btnRemo.setAttribute("onclick", "run(this)")
}                 
btn5.addEventListener('click',butn5);

function butn6(){

     let price6 = 600;
     let elem = document.createElement('div');
     let ele1 = document.createElement('h2');
     let ele3 = document.createElement('h2');
     let ele2 = document.createElement('h2');
     let btnRemov = document.createElement('button');
     ele.appendChild(elem)
     elem.appendChild(ele1);
     elem.appendChild(ele3);
     elem.appendChild(ele2);
     elem.appendChild(btnRemov);
     console.log(elem);
     elem.className = 'left-side1'
     ele1.textContent = 'HELMET';
     btnRemov.textContent = 'Remove';
     ele3.textContent = 'quantity: ' + inputBox6.value;
     ele2.innerHTML = '<b>price:</b> ' + inputBox6.value * price6;
     btnRemov.setAttribute("onclick", "run(this)")
}                 
btn6.addEventListener('click',butn6);

function run(r) {
     r.parentElement.remove();
}