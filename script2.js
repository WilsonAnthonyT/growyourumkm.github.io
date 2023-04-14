const consultants = [
    {
      name: 'Arisa Sukmawati',
      service: 'Konsultasi',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.5,
      hari: 'Senin-Jumat',
    },
    {
      name: 'Kenneth Joy',
      service: 'Konsultasi',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.8,
      hari: 'Senin-Jumat',
    },
    {
      name: 'Siti nugraha',
      service: 'Konsultasi',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.3,
      hari: 'Senin-Jumat',
    },
    
    {
      name: 'Muh Rifky',
      service: 'Pelatihan',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.6,
      hari: 'Senin-Jumat',
    },
    {
      name: 'Adit Kusuma',
      service: 'Pelatihan',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 3.8,
      hari: 'Senin-Jumat',
    },
    {
      name: 'Jeremy Lee',
      service: 'Pelatihan',
      photo: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      rating: 4.2,
      hari: 'Senin-Jumat',
    },
  ];
  
  const serviceSelect = document.getElementById('service');
  const consultantList = document.querySelector('#consultants');
  
  serviceSelect.addEventListener('change', () => {
    const selectedService = serviceSelect.value;
    consultantList.innerHTML = '';
  
    if (selectedService === '') {
      consultantList.parentElement.classList.remove('show');
      return;
    }
  
    const filteredConsultants = consultants.filter((consultant) => consultant.service === selectedService);
  
    filteredConsultants.forEach((consultant) => {
      const li = document.createElement('li');
      li.classList.add('fade-in');
      li.innerHTML = `
        <h3>${consultant.name}</h3>
        <img src="${consultant.photo}" alt="${consultant.name}">
        <div class="consultant-details">
          <p>Layanan: ${consultant.service}</p>
          <p>Hari Tersedia: ${consultant.hari}</p>
          <p>Rating: ${consultant.rating}</p>
          <button class="select-consultant-button">Pilih</button>
          <button class="back-button">Kembali</button>
        </div>
      `;
      const selectButton = li.querySelector('.select-consultant-button');
      selectButton.addEventListener('click', () => {
        console.log(`Selected consultant: ${consultant.name}, Service: ${consultant.service}`);
        // Remove all the other cards
        consultantList.querySelectorAll('li').forEach((card) => {
          if (card !== li) {
            card.remove();
          }
        });
        // Add a class to highlight the selected card
        li.classList.add('selected');
        selectButton.textContent = 'Back';
        selectButton.classList.remove('select-consultant-button');
        selectButton.classList.add('back-button');
        // Add an event listener to the Back button
        const backButton = li.querySelector('.back-button');
        backButton.addEventListener('click', () => {
          // Remove the selected class from the selected card
          li.classList.remove('selected');
          // Show all the cards again
          consultantList.querySelectorAll('li').forEach((card) => {
            consultantList.appendChild(card);
          });
          // Change the Back button to a Select button
          selectButton.textContent = 'Select';
          selectButton.classList.remove('back-button');
          selectButton.classList.add('select-consultant-button');
          // Remove the event listener from the Back button
          backButton.removeEventListener('click');
        });
      });
      consultantList.appendChild(li);
    });
    
  
    consultantList.parentElement.classList.add('show');
  });
  
  
  const photoInput = document.getElementById('photo');
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        const photo = reader.result;
        const img = document.querySelector('#preview');
        img.src = photo;
      });
    }
  });

  const confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener('click', () => {
  // Get all the required fields
  const requiredFields = document.querySelectorAll('[required]');
  
  // Check if all required fields are filled
  const allFieldsFilled = Array.from(requiredFields).every(field => field.value.trim() !== '');
  
  // If all fields are filled, redirect the user to the "confirmed.html" page
  if (allFieldsFilled) {
    window.location.href = 'confirmed.html';
  } else {
    // If not all fields are filled, show an error message
    alert('Harap Isi Semua Kolom Yang Wajib diisi!');
  }
});

  
