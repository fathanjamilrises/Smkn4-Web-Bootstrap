
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const data = jurusan.find((item) => item.slug === slug);
const container = document.getElementById("detail-jurusan");

if (data) {
  container.innerHTML = `
    <div class="card shadow-sm p-4 border-0">
      <div class="text-center">
        <img src="${data.img}" alt="${data.nama}" style="width: 150px" />
        <h2 class="mt-3 fw-bold">${data.nama}</h2>
      </div>
      
      <p class="mt-4">${data.detail}</p>
      <div class="text-center mt-3">
        <a href="index.html" class="btn btn-primary rounded fw-semibold ">Kembali Ke Beranda</a>
      </div>
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="alert alert-danger text-center">
      Jurusan tidak ditemukan!
    </div>
    <div class="text-center">
      
    </div>
  `;
}
