let job = document.querySelector(".job")
let myJobs = ['طراح وب', 'برنامه نویس'];
let position = 0;
let number = 0
let textClear = false
let speed = 50
typeWriter = () => {
  job.innerHTML = myJobs[number].substring(0, position)
  if (!textClear) {
    if (position++ == myJobs[number].length) {
      textClear = true
      speed = 1600
    }
  } else if (position-- == 0) {
    textClear = false
    number++ == myJobs.length - 1 ? number = 0 : false
  }
  setTimeout(typeWriter, speed)
  speed = 50
}
typeWriter()

let sizeConteiner = document.querySelector('.container').offsetHeight / 2
document.querySelector('.container').style.marginTop = 'calc(40vh - '+ sizeConteiner +'px)'
