const news = otherNews;

const carouselInner = document.getElementById("carousel-inner");

news.forEach((item, index) => {
  const slide = `
    <div class="carousel-item ${index === 0 ? "active" : ""} position-relative">
      <img
        src="${item.img}"
        class="d-block w-100 object-fit-cover"
        alt="${item.title}"
      />
      <div class="carousel-caption mb-4 text-start">
        <h2 class="fw-bold text-white" style="font-family: 'Clash Display', sans-serif">
          ${item.title}
        </h2>
        <p class="text-white">
          ${item.desc.substring(0, 100)}...
        </p>
        <a href="berita.html" class="btn btn-primary">
          Selengkapnya
        </a>
      </div>
    </div>`;
  carouselInner.innerHTML += slide;
});
