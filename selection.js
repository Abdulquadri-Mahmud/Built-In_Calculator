const open_selections = Array.from(document.querySelectorAll('.open'));

const close_selections = Array.from(document.querySelectorAll('.close'));
const select_sections = document.querySelector('.selection_cont');

const calculator = document.querySelector('.calculator-section-cont');
const multiplication = document.querySelector('.mult_cont');

const cal_btn = document.querySelector('.cal_btn');
const mult_btn = document.querySelector('.mult_btn');

open_selections.map(open_selection => {
     open_selection.addEventListener('click',()=>{
          select_sections.style.display = 'block';
     });
});
close_selections.map(close_selection =>{
     close_selection.addEventListener('click',()=>{
          select_sections.style.display = 'none';
     });
})

cal_btn.addEventListener('click',()=>{
     calculator.style.display = 'block';
     multiplication.style.display = 'none';
     select_sections.style.display = 'none';
});

mult_btn.addEventListener('click',()=>{
     multiplication.style.display = 'block';
     calculator.style.display = 'none';
     select_sections.style.display = 'none';
});



// Javascript media query

const mediaQuery = window.matchMedia('(min-width: 769px)');
function checkMediaQuery(event){
     // Check event if true
     if(event.matches){
          calculator.style.display = 'block';
          multiplication.style.display = 'block';
          open_selections.map(open_selection => {
               open_selection.style.display = 'none';
          });

     }else{
          multiplication.style.display = 'none';
     }
}

// Register event listener
mediaQuery.addListener(checkMediaQuery);

// Initial check
checkMediaQuery(mediaQuery);

// At 600px meadia query
const mediaQuery2 = window.matchMedia('(max-width: 600px)');
function checkMediaQuery2(event2){
     // Check event if true
     if(event2.matches){
          calculator.style.display = 'block';
          multiplication.style.display = 'none';

          open_selections.map(open_selection => {
               open_selection.style.display = 'block';
          });

     }else{
          multiplication.style.display = 'block';

          open_selections.map(open_selection => {
               open_selection.style.display = 'block';
          });
     }
}

// Register event listener
mediaQuery2.addListener(checkMediaQuery2);

// Initial check
checkMediaQuery2(mediaQuery2)
