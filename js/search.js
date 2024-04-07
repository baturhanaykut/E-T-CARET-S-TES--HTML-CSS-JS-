function productRoute() {
    const resultItemDOM = document.querySelectorAll(".search-result .result-item");
    resultItemDOM.forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            if (id) {
                localStorage.setItem("productId", JSON.stringify(id));
                window.location.href = "single-product.html"
            }
        })
    })
}

function searchFunc(products) {
    const searchWrapperDOM = document.querySelector(".search-result .results");

    let result = "";
    products.forEach(product => {
        result += `<a href="#" class="result-item" data-id=${product.id}>
        <img src="${product.img.singleImage}" class="search-thumb" alt="">
        <div class="search-info">
          <h4>${product.name}</h4>
          <span class="search-sku">SKU:PD0016</span>
          <span class="search-price">$${product.price.newPrice.toFixed(2)}</span>
        </div>
      </a>`
    });
    searchWrapperDOM.innerHTML = result;
    productRoute();

    const searchInputDOM = document.querySelector(".search-form input");
    let value = "";
    let filtered = [];
    searchInputDOM.addEventListener("input", (e) => {
        value = e.target.value;
        value = value.trim().toLowerCase();
        filtered = products.filter((item) => item.name.trim().toLowerCase().includes(value));
        let result = "";
        if (filtered.length > 1) {
            searchWrapperDOM.style.gridTemplateColumns = "1fr";
            filtered.forEach((product) => {
                result += `<a href="#" class="result-item" data-id=${product.id}>
                <img src="${product.img.singleImage}" class="search-thumb" alt="">
                <div class="search-info">
                  <h4>${product.name}</h4>
                  <span class="search-sku">SKU:PD0016</span>
                  <span class="search-price">$${product.price.newPrice.toFixed(2)}</span>
                </div>
              </a>`;
            });
            searchWrapperDOM.innerHTML = result;
        } else if (filtered.length < 2) {
            searchWrapperDOM.style.gridTemplateColumns = "1fr";
            if (filtered == 0) {
                searchWrapperDOM.innerHTML = `
                        <a href="#" class="result-item" style="justify-content: center">
                        😔Aradığınız Ürün Bulunamadı😔
                        </a>
                        `;
            } else {
                filtered.forEach((item) => {
                    result += `
                  <a href="#" class="result-item" data-id=${item.id}>
                      <img src=${item.img.singleImage} class="search-thumb" alt="">
                      <div class="search-info">
                          <h4>${item.name}</h4>
                          <span class="search-sku">SKU: PD0016</span>
                          <span class="search-price">$${item.price.newPrice.toFixed(
                        2
                    )}</span>
                      </div>
                  </a>
                  `;
                });
                searchWrapperDOM.innerHTML = result;
            }
        }
        productRoute();
    })

}

export default searchFunc;