function imageGalery(){
  const higlight = document.querySelector('.gallery-higlight');
  const previews = document.querySelectorAll('.room-preview img');

  previews.forEach(preview =>{
    preview.addEventListener('click', function(){
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace('smallSrc', 'big');
      higlight.src = bigSrc;
      previews.forEach(preview => preview.classList.remove('room-active'))
      preview.classList.add('room-active');
    })
  })
}

imageGalery();
