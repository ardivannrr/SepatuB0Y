produk = [
  {
    nama: "Sepatu Air Jordan",
    harga: "10000000",
    gambar: "../img/produk/sepatu1.jpg",
  },
  {
    nama: "Sepatu Cloudtec",
    harga: "8000000",
    gambar: "../img/produk/sepatu2.jpg",
  },
  {
    nama: "Sepatu Power",
    harga: "15500000",
    gambar: "../img/produk/sepatu3.jpg",
  },
  {
    nama: "Sepatu Nike",
    harga: "7500000",
    gambar: "../img/produk/sepatu4.jpg",
  },
  {
    nama: "Sepatu Super Hero",
    harga: "5000000",
    gambar: "../img/produk/sepatu5.jpg",
  },
  {
    nama: "Sepatu Gel-Nimbus",
    harga: "9000000",
    gambar: "../img/produk/sepatu6.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector("header nav");

  menuButton.addEventListener("click", function (event) {
    nav.classList.toggle("active");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      nav.classList.remove("active");
    }
  });

  const cardContainer = document.querySelector(".card-container");

  produk.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");
    img.src = item.gambar;
    img.alt = item.nama;
    cardImage.appendChild(img);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const name = document.createElement("h3");
    name.textContent = item.nama;
    const price = document.createElement("p");

    price.textContent =
      "Rp " +
      parseInt(item.harga.replace(/\./g, ""), 10).toLocaleString("id-ID");

    const buyButton = document.createElement("button");
    buyButton.textContent = "Beli Sekarang";
    buyButton.classList.add("buy-button");

    buyButton.addEventListener("click", function () {
      let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

      keranjang.push(item);

      localStorage.setItem("keranjang", JSON.stringify(keranjang));

      Swal.fire({
        title: "Berhasil!",
        text: item.nama + " telah ditambahkan ke keranjang!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    });

    cardContent.appendChild(name);
    cardContent.appendChild(price);
    cardContent.appendChild(buyButton);

    card.appendChild(cardImage);
    card.appendChild(cardContent);
    cardContainer.appendChild(card);
  });

  document.getElementById("cart").addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
});
