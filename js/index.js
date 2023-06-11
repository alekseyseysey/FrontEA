const v = document.getElementById('container')
const underMain = document.getElementById('mainUnder')
const mainTimeContainer = document.getElementById('mainTimeContainer')
const buttonContainer = document.getElementById('buttonContainer')

  function getWidth(){
    return document.body.clientWidth
  }


  function resizeWidth(){
    let a = getWidth();

    if(a <= 1111){
        document.getElementById('day').innerText = "DD";
        document.getElementById('hou').innerText = "HH";
        document.getElementById('min').innerText = "MM";
        document.getElementById('sec').innerText = "SS";

        // console.log(v)
        // console.log(mainTimeContainer)
        underMain.remove()
        mainTimeContainer.remove()
        buttonContainer.remove()


        document.getElementById('mainLeadContainer').appendChild(underMain);
        document.getElementById('mainLeadContainer').appendChild(mainTimeContainer);
        document.getElementById('mainLeadContainer').appendChild(buttonContainer);


        document.getElementById('tNa3').innerText = 'Party'
        document.getElementById('tNa4').innerText = 'Party on the beach'
        document.getElementById('tNa5').innerText = 'Home Security'
        document.getElementById('tNa6').innerText = 'Network Design & Implementation'
        document.getElementById('tNa7').innerText = 'System Design & Engineering'
        document.getElementById('tNa8').innerText = 'Client Care Plans'

        document.getElementById('tNum3').innerText = '03'
        document.getElementById('tNum4').innerText = '04'
        document.getElementById('tNum5').innerText = '05'
        document.getElementById('tNum6').innerText = '06'
        document.getElementById('tNum7').innerText = '07'
        document.getElementById('tNum8').innerText = '08'
        
    }
    else if (a >= 1111){

      // document.getElementById('tNa1').innerText = ''
      // document.getElementById('tNa2').innerText = ''
      document.getElementById('tNa3').innerText = ''
      document.getElementById('tNa4').innerText = ''
      document.getElementById('tNa5').innerText = ''
      document.getElementById('tNa6').innerText = ''
      document.getElementById('tNa7').innerText = ''
      document.getElementById('tNa8').innerText = ''

      // document.getElementById('tNum1').innerText = ''
      // document.getElementById('tNum2').innerText = ''
      document.getElementById('tNum3').innerText = ''
      document.getElementById('tNum4').innerText = ''
      document.getElementById('tNum5').innerText = ''
      document.getElementById('tNum6').innerText = ''
      document.getElementById('tNum7').innerText = ''
      document.getElementById('tNum8').innerText = ''



      document.getElementById('day').innerText = "Days";
      document.getElementById('hou').innerText = "Hours";
      document.getElementById('min').innerText = "Month";
        document.getElementById('sec').innerText = "Second";
        v.appendChild(underMain)
        document.getElementById('mainLeadContainer').appendChild(mainTimeContainer)
        document.getElementById('mainLeadContainer').appendChild(buttonContainer)

    }
   
  }

  

  resizeWidth()


  window.addEventListener('resize', resizeWidth );



  let date = new Date('jul 27 2023 00:00:00');

  function counts(){
    let now = new Date();
    gap = date - now;

    let day = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hour = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minute = Math.floor(gap / 1000 / 60  ) % 60;
    let second = Math.floor(gap / 1000  ) %60;


    document.getElementById('days').innerHTML = day
    document.getElementById('hours').innerHTML = hour
    document.getElementById('minute').innerHTML = minute
    document.getElementById('second').innerHTML = second


  }

  counts()

  setInterval(counts, 1000)

 
  

  const footerFrame = document.getElementById('footerFrame')

  function footerFrameBut({target}){


    if(!target.classList.contains("footerFrameTextDecor") && !target.classList.contains("footerFrameImgRotate") ){
      document.getElementById('footerFrameText').classList.add('footerFrameTextDecor')
      document.getElementById('footerFrameImg').classList.add('footerFrameImgRotate')
    
    }

    else if(target.classList.contains("footerFrameTextDecor") || target.classList.contains("footerFrameImgRotate")){
      document.getElementById('footerFrameText').classList.remove('footerFrameTextDecor')
      document.getElementById('footerFrameImg').classList.remove('footerFrameImgRotate')
    }

  }




  footerFrame.addEventListener("click", footerFrameBut)




const anchors = document.querySelectorAll('a[href*="#')

for (let anchor of anchors){
  anchor.addEventListener("click", function(even){
    even.preventDefault();
    const block = anchor.getAttribute('href');
    document.querySelector('' + block).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}





let buttons = document.querySelectorAll('.buttonAccardion');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let content = button.nextElementSibling;
    // let uu = content.previousElementSibling
    
      document.querySelectorAll('.content').forEach((el) => {
      el.style.display = 'none'
      let prev = el.previousElementSibling
      // console.log(prev.lastChild.previousElementSibling)


      });

      content.style.display = 'flex'
      // uu.childNodes[1].classList.add('tcc1')

    
  });
});



// валидация


  let emailForm = document.getElementById('emailForm');
  let emailInput = document.getElementById('emailInput');

  emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var email = emailInput.value;

    // Отправка AJAX-запроса на сервер для валидации email
    let xhr = new XMLHttpRequest();
    xhr.open('POST', emailForm.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        if (response.isValid) {
          alert('Email введен корректно');
        } else {
          alert('Email введен некорректно');
        }
      }
    };
    xhr.send('email=' + encodeURIComponent(email));
  });




