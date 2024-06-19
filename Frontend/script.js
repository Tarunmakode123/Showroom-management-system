function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

function submitShowroom() {
  const address = document.getElementById('showroom-address').value;
  const manager = document.getElementById('showroom-manager').value;

  if (address && manager) {
      const showroomList = document.getElementById('showroom-list');
      const showroomDiv = document.createElement('div');
      showroomDiv.innerHTML = `
          <h3>Showroom Submitted</h3>
          <p>Address: ${address}</p>
          <p>Manager Name: ${manager}</p>
      `;
      showroomList.appendChild(showroomDiv);
      showSection('vehicles');
  } else {
      alert("Please fill in all the fields.");
  }
}

function submitVehicle() {
  const cost = document.getElementById('vehicle-cost').value;
  const type = document.getElementById('vehicle-type').value;
  const colour = document.getElementById('vehicle-colour').value;

  if (cost && type && colour) {
      const vehicleList = document.getElementById('vehicle-list');
      const vehicleDiv = document.createElement('div');
      vehicleDiv.innerHTML = `
          <h3>Vehicle Submitted</h3>
          <p>Cost: ${cost}</p>
          <p>Type: ${type}</p>
          <p>Colour: ${colour}</p>
      `;
      vehicleList.appendChild(vehicleDiv);
      showSection('sales');
  } else {
      alert("Please fill in all the fields.");
  }
}

// Initial display setting
document.addEventListener('DOMContentLoaded', function() {
  showSection('showrooms');
});
