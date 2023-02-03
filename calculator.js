// Calculator Script 
const cal_cont = document.querySelector('.cal_cont');
const display = document.querySelector('.result');
const cal_btns = Array.from(document.querySelectorAll('.button'));

cal_btns.map(cal_btn => {
     cal_btn.addEventListener('click', (e) => {
          //console.log(e.target.innerText);
          const target_current_btn = e.target.innerText;
          if(target_current_btn === 'CLR'){
          display.innerText = '';
          }
          else if(target_current_btn === 'DEL'){
          display.innerText = display.innerText.slice(0,-1);
          }
          else if(target_current_btn === '='){
          try{
               display.innerText = eval(display.innerText);
          }catch{
               display.innerText = 'Error!';
          }
          }
          else {
               display.innerText += target_current_btn;
          }
     });
});
