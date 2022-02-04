const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "KONAHAN",
      price: 2000,
      colors: [
        {
          code: "black",
          img: "./img/nftpuma1.png",
        },
        {
          code: "purple",
          img: "./img/pumaroxa.png",
        },
      ],
    },
    {
      id: 2,
      title: "SHIMTSUI",
      price: 1600,
      colors: [
        {
          code: "Brown",
          img: "./img/havainft.png",
        },
        {
          code: "lightgray",
          img: "./img/havainft2.png",
        },
      ],
    },
    {
      id: 3,
      title: "MURAKAMI",
      price: 1580,
      colors: [
        {
          code: "lightgray",
          img: "./img/loiracelestialnft.png",
        },
        {
          code: "green",
          img: "./img/loiranft.png",
        },
      ],
    },
    {
      id: 4,
      title: "HODOSHIK",
      price: 2300,
      colors: [
        {
          code: "black",
          img: "./img/anjonft.png",
        },
        {
          code: "lightgray",
          img: "./img/demonionft.png",
        },
      ],
    },
    {
      id: 5,
      title: "TAKASHI",
      price: 999,
      colors: [
        {
          code: "gray",
          img: "./img/monganft.png",
        },
        {
          code: "black",
          img: "./img/monganfthiper.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //alterar o slide atual
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //alterar o produto escolhido
      choosenProduct = products[index];
  
      //alterar textos do produto atual
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //atribuindo novas cores
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
  