const headlineNewsTop = headlineNews;
const headlineNewsRight = headlineRight;
const otherNewsBottom = otherNews;

const headlineNewsList = document.getElementById("headline-news");
const headlineNewsRightList = document.getElementById("headline-news-right");
const otherNewsList = document.getElementById("other-news");

headlineNewsTop.forEach((item) => {
  headlineNewsList.innerHTML += `
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
            <img
              src="${item.img}"
              class="card-img-top"
              alt="${item.title}"
            />
            <div class="card-body">
              <h5 class="card-title fw-semibold">
                ${item.title}
              </h5>
              <p class="card-text text-muted small">
                ${item.desc}
              </p>
              <a href="berita-detail.html?slug=${item.slug}" class="text-primary fw-semibold">Baca Selengkapnya</a>
            </div>
          </div>
    `;
});

headlineNewsRight.forEach((item) => {
  headlineNewsRightList.innerHTML += `
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img
              src="${item.img}"
              class="card-img-top object-fit-cover"
              height="200"
              alt="${item.title}"
            />
            <div class="card-body">
              <h5 class="card-title fw-semibold">
                ${item.title}
              </h5>
              <p class="card-text text-muted small">
                ${item.desc}
              </p>
              <a href="berita-detail.html?slug=${item.slug}" class="text-primary fw-semibold">Baca Selengkapnya</a>
            </div>
          </div>
    `;
});

otherNewsBottom.forEach((item) => {
  otherNewsList.innerHTML += `
    <div class="col-md-4">
          <div class="card border-0 shadow-sm rounded-4 h-100">
            <img
              src="${item.img}"
              class="card-img-top object-fit-cover"
              height="250"
              alt="${item.title}"
            />
            <div class="card-body">
              <h5 class="card-title fw-semibold">
                ${item.title}
              </h5>
              <p class="card-text text-muted small">
                ${item.desc}
              </p>
              <a href="berita-detail.html?slug=${item.slug}" class="text-primary fw-semibold">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
    `;
});
