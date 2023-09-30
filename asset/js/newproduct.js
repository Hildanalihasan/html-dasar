let products = [
    {
      nama: "Adidas Predator Accuracy.3",
      harga: "Rp. 2.100.000",
      gambar: "../asset/img/product/adidaspredator.jpg",
    },
    {
      nama: "Adidas Speedportal Leyenda",
      harga: "Rp. 3.300.000",
      gambar: "../asset/img/product/leyenda.jpg",
    },
    {
      nama: "Nike Zoom Mercurial Vapor 15 Elite",
      harga: "Rp. 2.700.000",
      gambar: "../asset/img/product/nike-removebg-preview.png",
    },
    {
      nama: "Nike Phantom GX Elite",
      harga: "Rp. 1.800.000",
      gambar: "../asset/img/product/nikephantomgxelite-removebg-preview.png",
    },
    {
      nama: "Puma Future Ultimate",
      harga: "Rp. 1.680.000",
      gambar: "../asset/img/product/puma_future_ultimate-removebg-preview.png",
    },
    {
      nama: "Puma Ultra Ultimate",
      harga: "Rp. 2.239.300",
      gambar: "../asset/img/product/puma_ultra_ultimate-removebg-preview.png",
    },
  ];

  let product = document.getElementById("card")
  let html = "";
  products.forEach(produk => {
    html += `
    <div class="card" style="width: 18rem;">
  <img src=${produk.gambar} class="card-img-top" alt="products">
  <div class="card-body">
  <h4 class="card-text">${produk.nama}</h4>
    <p class="card-text">${produk.harga}</p>
  </div>
</div>
    `
  });
  product.innerHTML=html;