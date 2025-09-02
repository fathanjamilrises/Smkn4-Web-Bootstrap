const data = jurusan;

const jurusanList = document.getElementById("jurusan-list");

data.forEach((item) => {
  jurusanList.innerHTML += `<div class="col-lg-4 mb-4">
            <div
              class="px-4 py-2 shadow-sm border border-light h-100 d-flex flex-column justify-content-center align-items-center rounded-4"
            >
              <img
                src="${item.img}"
                class=""
                style="width: 100px"
                alt="..."
              />
              <div class="text-center d-flex flex-column gap-2 p-3">
                <h5 class="fw-bold">${item.nama}</h5>
                <p class="small">
                 ${item.desc}
                </p>
              </div>
              <a href="jurusan-detail.html?slug=${item.slug}" class="btn btn-outline-primary fw-medium mt-3 mb-3">Selengkapnya</a>
            </div>
          </div>`;
});
