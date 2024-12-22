// Fuqarolarni saqlash uchun massiv
let citizens = [];

// DOM elementlarini olish
const citizenTableBody = document.querySelector('#citizen-table tbody');
const addCitizenForm = document.getElementById('add-citizen-form');

// Yangi fuqaro qo'shish funksiyasi
function addCitizen(citizen) {
  // Yangi fuqaro massivga qo'shiladi
  citizens.push(citizen);

  // Jadvalga fuqaro qo'shiladi
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${citizen.id}</td>
    <td>${citizen.name}</td>
    <td>${citizen.birthDate}</td>
    <td>${citizen.address}</td>
    <td>${citizen.workplace}</td>
    <td>${citizen.passport}</td>
  `;
  citizenTableBody.appendChild(row);
}

// Forma yuborilganda yangi fuqaro qo'shish
addCitizenForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Formadan ma'lumotlarni olish
  const newCitizen = {
    id: citizens.length + 1, // Avtomatik ID
    name: document.getElementById('name').value,
    birthDate: document.getElementById('birthDate').value,
    address: document.getElementById('address').value,
    workplace: document.getElementById('workplace').value,
    passport: document.getElementById('passport').value,
  };

  // Fuqaroni qo'shish
  addCitizen(newCitizen);

  // Formani tozalash
  addCitizenForm.reset();
});

// Dastlabki fuqarolarni yuklash (demo ma'lumotlar)
const initialCitizens = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Fuqaro ${Math.floor(Math.random() * 1000)}`,
  birthDate: `${Math.floor(Math.random() * 31 + 1).toString().padStart(2, '0')}-` +
             `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}-` +
             `${Math.floor(Math.random() * 50 + 1970)}`,
  address: `Manzil ${Math.floor(Math.random() * 100)}, Ko'cha ${Math.floor(Math.random() * 50)}`,
  workplace: `Ish joyi ${Math.floor(Math.random() * 100)}`,
  passport: `AA${Math.floor(Math.random() * 900000 + 100000)}`,
}));

initialCitizens.forEach((citizen) => addCitizen(citizen));
