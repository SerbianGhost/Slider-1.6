const sliders = document.querySelectorAll('.slider');
sliders.forEach(el =>{
   let item = el.querySelectorAll('.slider-item')
   let position = 0;
   let currentLine = (position + 256) * (item.length - 1);
   el.addEventListener('click', (e)=>{
      let currentSlider = e.target;
      let prev = currentSlider.classList.contains('prev');
      let next = currentSlider.classList.contains('next');
      if(next){
         position = position + 256;
         item.forEach(el =>{
            if(position > currentLine){
               position = 0;
            }
            el.style.left = - position + 'px';
         })
      }
      if(prev){
         position = position - 256;
         item.forEach(el =>{
            if(position < 0){
               position = currentLine;
            }
            el.style.left = - position + 'px';
         })
      }
})
});


const toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', (e) =>{
   let sl = document.querySelectorAll('.slider-box');
  sl.forEach(el =>{
   el.classList.toggle('visible');
  })
})