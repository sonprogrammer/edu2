// document.querySelector('body').addEventListener("mousemove", 
//     function eyeball() {
//     const eye = document.querySelectorAll('.eyes')
//     eye.forEach((eye)=>{
//         let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
//         let y = eye.getBoundingClientRect().top + eye.clientWidth / 2
//         let radian = Math.atan2(event.pageX - x, event.pageY - y)
//         let rotate = radian * (180 / Math.PI) * -1 + 270
//         eye.style.transform = 'rotate(' + rotate + "edg)"

//     })
// })

document.querySelector('body').addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll('.eyes');
    eyes.forEach((eye) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotate = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = `rotate(${rotate}deg)`;
    });
  });
  