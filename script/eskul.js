const data = ekstrakulikuler;

const eskulList = document.getElementById('eskul-list')

data.forEach((item)=> {
    eskulList.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm text-center border-light h-100">
            <img
              src="${item.img}"
              class="card-img-top w-50 mx-auto py-3"
              alt="${item.nama}"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">${item.nama}</h5>
              <p class="card-text">
                ${item.deskripsi}
              </p>
            </div>
          </div>
        </div>`
})