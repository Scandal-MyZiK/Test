document.addEventListener('DOMContentLoaded', () => {
  let btnSend = document.querySelector('.form__btn');

  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    let phone = document.querySelector('.form__input');
    let inputBlock = document.querySelector('.form__block');

    if (phone.value.length === 0) {
      inputBlock.classList.add('empty');
    } else {
      let formData = new FormData();
      formData.append(phone.name, phone.value);
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          console.log(xmlHttp.responseText);
        }
      }
      xmlHttp.open("post", `send.php`);
      xmlHttp.send(formData);

      openSuccess();
      inputBlock.classList.remove('empty');
    }
  });

  function openSuccess() {
    let modal = document.querySelector('.popup');
    modal.classList.add('active');
    setTimeout(() => {
      modal.classList.remove('active');
    }, 3000)
  }
})