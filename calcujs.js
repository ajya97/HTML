let obt1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let btn3 = document.querySelector('.btn3');
    let btn4 = document.querySelector('.btn4');
    let btn5 = document.querySelector('.btn5');
    let btn6 = document.querySelector('.btn6');
    let btn7 = document.querySelector('.btn7');
    let btn8 = document.querySelector('.btn8');
    let btn9 = document.querySelector('.btn9');
    let btn0 = document.querySelector('.btn0');
    let btndiv = document.querySelector('.btndiv');
    let btn00 = document.querySelector('.btn00');
    let btndot = document.querySelector('.btndot');
    let btnequal = document.querySelector('.btnequal');
    let btnplus = document.querySelector('.btnplus');
    let btnsub = document.querySelector('.btnsub');
    let btnmul = document.querySelector('.btnmul');
    let btnc = document.querySelector('.btnc');
    let btnac = document.querySelector('.btnac');
    let btnper = document.querySelector('.btnper');
    let text = document.querySelector('.text');
    let one,two,three,four,five,six,seven,eight,nine,zero;
    let dzero,div,mul,dot,plush,sub,clear,allclear,per,dis='',sol=0;
    

    btn1.addEventListener('click',()=>{
      bt1.classList.add('btnequal')
      one = 1;
      dis=dis+one;
      text.innerHTML = dis;
    })
    btn2.addEventListener('click',()=>{
      two =2;
      dis=dis+two;
      text.innerHTML = dis;
    })
    btn3.addEventListener('click',()=>{
      three =3;
      dis=dis+three;
      text.innerHTML = dis;
    })
    btn4.addEventListener('click',()=>{
      four =4;
      dis=dis+four;
      text.innerHTML = dis;
    })
    btn5.addEventListener('click',()=>{
      five = 5;
      dis=dis+five;
      text.innerHTML = dis;
    })
    btn6.addEventListener('click',()=>{
      six =6;
      dis=dis+six;
      text.innerHTML = dis;
    })
    btn7.addEventListener('click',()=>{
      seven =7;
      dis=dis+seven;
      text.innerHTML = dis;
    })
    btn8.addEventListener('click',()=>{
      eight =8;
      dis=dis+eight;
      text.innerHTML = dis;
    })
    btn9.addEventListener('click',()=>{
      nine = 9;
      dis=dis+nine;
      text.innerHTML = dis;
    })
    btn0.addEventListener('click',()=>{
      zero =0;
      dis=dis+zero;
      text.innerHTML = dis;
    })
    btn00.addEventListener('click',()=>{
      dzero ='00';
      dis=dis+dzero;
      text.innerHTML = dis;
    })
    btndiv.addEventListener('click',()=>{
      div ='/';
      dis=dis+div;
      text.innerHTML = dis;
    })
    btndot.addEventListener('click',()=>{
      dot ='.';
      dis=dis+dot;
      text.innerHTML = dis;
    })
    btnequal.addEventListener('click',()=>{
      dis = eval(dis).toString();
      text.innerHTML = dis;
    })
    btnplus.addEventListener('click',()=>{
      plus ='+';
      dis=dis+plus;
      text.innerHTML = dis;
    })
    btnsub.addEventListener('click',()=>{
      sub ='-';
      dis=dis+sub;
      text.innerHTML = dis;
    })
    btnmul.addEventListener('click',()=>{
      mul ='*';
      dis=dis+mul;
      text.innerHTML = dis;
    })
    btnc.addEventListener('click',()=>{
      clear ='c';
      dis[-1]='';
      text.innerHTML = dis;
    })
    btnac.addEventListener('click',()=>{
      allclear ='ac';
      dis='';
      text.innerHTML = '0';
    })
    btnper.addEventListener('click',()=>{
      per ='%';
      dis=dis+per;
      text.innerHTML = dis;
    })
    
   