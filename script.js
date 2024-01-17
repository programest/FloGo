document.addEventListener('DOMContentLoaded', function () {
    // Найти все кнопки для открытия модального окна с data-target
    const openModalBtns = document.querySelectorAll('[data-target]');
    const closeModalBtn = document.querySelector('.modal .close');
    const modal = document.querySelector('.modal');
    const subscribeCheckbox = document.getElementById('subscribe');
  
    // Обработчик для открытия модального окна
    openModalBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const targetModal = document.getElementById(targetId);
        if (targetModal) {
          targetModal.style.display = 'block';
        }
      });
    });
  
    // Обработчик для закрытия модального окна
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Обработчик для закрытия модального окна по клику вне окна
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
  });







    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBtn = document.getElementById('closeBtn');
  
    burgerBtn.addEventListener('click', function () {
      burgerBtn.classList.toggle('cross');
      if (burgerMenu.style.display === 'flex'){
        burgerMenu.style.display = 'none';
        document.body.style.overflow = '';
      }else{
        burgerMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  
  
 
 document.addEventListener('DOMContentLoaded', function () {
      burgerMenu.style.display = 'none';
    });






function redirectToWhatsApp() {
      // Замените "Ваш текст для сообщения" на текст, который вы хотите отправить в WhatsApp
      var message = encodeURIComponent("Ваш текст для сообщения");
  
      // Замените "+123456789" на номер WhatsApp, на который вы хотите отправить сообщение
      var phoneNumber = "+77714110705";
  
      // Проверяем, является ли устройство мобильным
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
      // Собираем URL для перехода на WhatsApp с предварительно заданным сообщением
      var whatsappURL;
  
      if (isMobile) {
          whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
      } else {
          // Если устройство не мобильное, открываем веб-версию WhatsApp
          whatsappURL = "https://web.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message;
      }
  
      // Открываем WhatsApp в новой вкладке
      window.open(whatsappURL, '_blank');
  }
