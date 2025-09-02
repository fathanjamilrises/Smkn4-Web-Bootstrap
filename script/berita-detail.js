const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const headlineNewsData = headlineNews.find((item) => item.slug === slug);
const headlineRightData = headlineRight.find((item) => item.slug === slug);
const otherNewsData = otherNews.find((item) => item.slug === slug);

const container = document.getElementById("berita-detail");
const newsData = headlineNewsData || headlineRightData || otherNewsData;

if (newsData) {
  container.innerHTML = `
    <div class="col-lg-10 mx-auto">
    <a href="berita.html" class="link-dark mt-2 fs-6 fw-semibold align-items-start mb-3 d-flex gap-3 "><i class="bi bi-arrow-left"></i> Kembali Ke Halaman Berita</a>
      <h1 class="fw-bold fs-1 mb-2">${newsData.title}</h1>
      <p class ="fw-medium small text-muted mb-5">${newsData.publisher}</p>
      <img
        src="${newsData.img}"
        class="w-100 rounded-3 mb-4 shadow-sm"
        alt="${newsData.title}"
      />
      <p class="small lh-lg text-justify">
        ${newsData.detail}
      </p>
      
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="alert alert-danger text-center">
      Berita tidak ditemukan!
    </div>
  `;
}
