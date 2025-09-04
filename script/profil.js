const data = dataSekolah;

const profilData = document.getElementById("table-profil");

data.forEach((item) => {
    profilData.innerHTML += `
              <tr>
                <th class="w-50">${item.label}</th>
                <td>${item.value}</td>
              </tr>
    `
})