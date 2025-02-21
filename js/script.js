/* ======== Cuenta regresiva ======== */
    // Modifica la fecha y hora del evento según necesites
    const countdownDate = new Date("Apr 12, 2025 21:30:00").getTime();
    const countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").innerText = days.toString().padStart(2, '0');
      document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
      
      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
      }
    }, 1000);
    
    /* ======== Carrusel de fotos ======== */
    const carouselTrack = document.getElementById('carouselTrack');
    let carouselIndex = 0;
    function moveCarousel() {
      carouselIndex++;
      const items = document.querySelectorAll('.carousel-item');
      if(carouselIndex > items.length - 1) {
        carouselIndex = 0;
      }
      // Calcula el desplazamiento (ancho del item + margen)
      const offset = carouselIndex * (parseInt(getComputedStyle(items[0]).minWidth) + 20);
      carouselTrack.style.transform = `translateX(-${offset}px)`;
    }
    // Cambia de imagen cada 3 segundos
    setInterval(moveCarousel, 3000);
    
    /* ======== Mostrar/Cerrar CBU ======== */
    document.getElementById('showCbuBtn').addEventListener('click', () => {
      const cbuDiv = document.getElementById('cbuNumber');
      cbuDiv.style.display = (cbuDiv.style.display === "block") ? "none" : "block";
    });
    
    /* ======== Modal y Envío de Formulario ======== */
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModal = document.getElementById('closeModal');
    
    openModalBtn.addEventListener('click', () => {
      modal.style.display = "block";
    });
    
    closeModal.addEventListener('click', () => {
      modal.style.display = "none";
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
    
    // Al enviar el formulario se abre WhatsApp con un mensaje preformateado
    document.getElementById('reservationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const mayores = document.getElementById('mayores').value;
      const menores = document.getElementById('menores').value;
      const datosImportantes = document.getElementById('datosImportantes').value;
      
      const mensaje = `Reserva de ${nombre} ${apellido}%0AReservas Mayores: ${mayores}%0AReservas Menores: ${menores}%0ADatos Importantes: ${datosImportantes}`;
      
      // Número de WhatsApp (sin símbolos, por ejemplo: 54934084648)
      const whatsappNumber = "5493534093935";
      const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
      window.open(url, '_blank');
      modal.style.display = "none";
      this.reset();
    });