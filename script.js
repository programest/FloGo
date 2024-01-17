






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
  document.querySelectorAll('.mainLI a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        // Close the burger menu when a menu item is clicked
        burgerMenu.style.display = 'none';
        document.body.style.overflow = '';
        burgerBtn.classList.remove('cross');
    });
});
  
 
 document.addEventListener('DOMContentLoaded', function () {
      burgerMenu.style.display = 'none';
    });





 function redirectToWhatsApp() {
      // Замените "Ваш текст для сообщения" на текст, который вы хотите отправить в WhatsApp
      var message = encodeURIComponent("Интересует франшиза");
  
      // Замените "+123456789" на номер WhatsApp, на который вы хотите отправить сообщение
      var phoneNumber = "+79155936677";
  
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
