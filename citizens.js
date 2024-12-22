// 50 ta fuqaro uchun random ma'lumotlar generatsiya qilish
const citizens = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Fuqaro ${Math.floor(Math.random() * 1000)}`,
  birthDate: `${Math.floor(Math.random() * 31 + 1).toString().padStart(2, '0')}-` +
             `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}-` +
             `${Math.floor(Math.random() * 50 + 1970)}`,
  address: `Manzil ${Math.floor(Math.random() * 100)}, Ko'cha ${Math.floor(Math.random() * 50)}`,
  workplace: `Ish joyi ${Math.floor(Math.random() * 100)}`,
  passport: `AA${Math.floor(Math.random() * 900000 + 100000)}`,
}));

// Sahifada fuqaro ma'lumotlarini jadvalga kiritish
const citizenTableBody = document.querySelector('#citizen-table tbody');

citizens.forEach((citizen) => {
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
});
