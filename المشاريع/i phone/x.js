
let x = document.getElementById('img');
let h = document.getElementById('h1');
let p = document.getElementById('p');
let v = document.getElementById('cov');
x.addEventListener('click' ,function(){
x.style.height='20vh'
x.style.borderRadius='10px'
x.style.width='90%'})
let ro = document.getElementById('ro')
ro.addEventListener('click',function(){
document.body.style.backgroundColor='rgb(153, 2, 2)'
p.style.color='rgb(153, 2, 2)'
h.style.color='rgb(153, 2, 2)'
v.style.border=' solid 9px  rgb(153, 2, 2)'
v.style.backgroundImage = 'url(ro.png)'})
let go = document.getElementById('go')
go.addEventListener('click',function(){
document.body.style.backgroundColor='rgb(182, 158, 23)'
p.style.color='rgb(182, 158, 23)'
h.style.color='rgb(182, 158, 23)'
v.style.border=' solid 9px  rgb(182, 158, 23)'
v.style.backgroundImage = 'url(bl.png)'})
let bl = document.getElementById('bl')
bl.addEventListener('click',function(){
document.body.style.backgroundColor='rgb(25, 25, 128)'
p.style.color='rgb(25, 25, 128)'
h.style.color='rgb(25, 25, 128)'
v.style.border=' solid 9px  rgb(25, 25, 128)'
v.style.backgroundImage = 'url(blue.png)'})