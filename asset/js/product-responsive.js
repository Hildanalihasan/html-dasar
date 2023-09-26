let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


products = [
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

document.getElementById('list-product').innerHTML=""
products.forEach(function(product)  {
   let gambar = document.createElement('div')
   gambar.className= "gambar"

   let gambar1= document.createElement('div')
   gambar1.className="gambar1"
   gambar.appendChild(gambar1)

   let image = document.createElement('img')
   image.src=product.gambar
   gambar1.appendChild(image)

   let detail = document.createElement('div')
   detail.className="detail-gambar1"
   gambar1.appendChild(detail)

   let nama = document.createElement('h4')
   nama.innerHTML=product.nama
   detail.appendChild(nama)

   let harga = document.createElement('p')
   harga.innerHTML=product.harga
   harga.style.fontStyle= "italic"
   detail.appendChild(harga)

   let output = document.getElementById('list-product')
   output.appendChild(gambar)
});

