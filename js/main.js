// storeis section
let storys = [
  {
    img: "./img/s1.jpg",
    title: "مشاوره خرید موبایل",
  },
  {
    img: "./img/s2.jpg",
    title: "پک لوازم تحریر فکتیس",
  },
  {
    img: "./img/s3.jpg",
    title: "لوازم التحریر طرح کرومی ",
  },
  {
    img: "./img/s4.jpg",
    title: "طراحی کن، خلق کن",
  },
  {
    img: "./img/s5.jpg",
    title: "ماژیک چند منظوره",
  },
  {
    img: "./img/s6.jpg",
    title: "دانگل بلوتوث ماشین",
  },
  {
    img: "./img/s7.jpg",
    title: "رفیق بی برقی",
  },
  {
    img: "./img/s8.jpg",
    title: "هندزفری میانرده ناتینگ",
  },
  {
    img: "./img/s9.jpg",
    title: "گربه عاشقش میشه",
  },
  {
    img: "./img/s10.jpg",
    title: "یه استند خیلی شیک!",
  },
  {
    img: "./img/s11.jpg",
    title: "پاکشوما با فن خشک کن",
  },
  {
    img: "./img/s12.jpg",
    title: "مسترجک ویژه",
  },
];

let storysection = document.querySelector("div.story");
storysection.innerHTML = "";
storys.forEach((elem) => {
  storysection.innerHTML += `
  <div class="swiper-slide w-[150px] text-center text-[14px] flex flex-col justify-center items-center gap-2 mr-5">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="ستوری ها"  class="w-[90px] h-[90px] rounded-full p-[5px] mx-auto border-[3px] border-pink-300">
      </div>
      <div class="title mx-auto">
          <span>${elem.title}</span>
      </div>
    </a>
  </div>
    `;
});

// type product section
let tpro = [
  {
    img: "./img/tpro1.jpg",
    title: "بیت‌کوین‌ با‌سوپرمارکت",
  },
  {
    img: "./img/tpro2.png",
    title: "بازگشت به مدرسه",
  },
  {
    img: "./img/tpro3.png",
    title: "طلای‌دیجیتال بدون‌کارمزد",
  },
  {
    img: "./img/tpro4.png",
    title: "لپ‌تاپ",
  },
  {
    img: "./img/tpro5.png",
    title: "خانه‌دانشجویی",
  },
  {
    img: "./img/tpro6.png",
    title: "پوشاک",
  },
  {
    img: "./img/tpro7.png",
    title: "زیبایی",
  },
  {
    img: "./img/tpro8.png",
    title: "طلا",
  },
  {
    img: "./img/tpro9.png",
    title: "اولین‌iPhone17 رو ببر",
  },
  {
    img: "./img/tpro10.png",
    title: "بیشتر",
  },
];
let typeprodudt = document.querySelector("div.tpro");
typeprodudt.innerHTML = "";
tpro.forEach((elem) => {
  typeprodudt.innerHTML += `
  <div class="tpro-box w-[100px] text-center flex flex-col justify-start items-center gap-[5px]">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="دسته‌بندی" class="w-[50px] h-[50px] mx-auto">
      </div>
      <div class="title mx-auto">
          <span>${elem.title}</span>
      </div>
    </a>
  </div>
    `;
});

// spacial product section
let spro = [
  {
    img: "./img/product/pro1.webp",
    name: "هدفون بلوتوثی گردنی مدل A897BL",
    dicost: 45,
    disprice: "۱,۶۲۵,۰۰۰",
    price: "۲,۹۵۰,۰۰۰",
  },
  {
    img: "./img/product/pro2.webp",
    name: "هدفون بلوتوثی ریمکس مدل RB-S1",
    dicost: 29,
    disprice: "۶۴۵,۰۰۰",
    price: "۹۱۰,۰۰۰",
  },
  {
    img: "./img/product/pro3.webp",
    name: "هدست بی سیم اوی مدل A997BL",
    dicost: 13,
    disprice: "۱,۲۹۹,۰۰۰",
    price: "۱,۴۹۵,۰۰۰",
  },
  {
    img: "./img/product/pro4.webp",
    name: "هدفون بلوتوثی انکر مدل K20i",
    dicost: 10,
    disprice: "۸۹۹,۰۰۰",
    price: "۹۹۹,۰۰۰",
  },
  {
    img: "./img/product/pro5.webp",
    name: "دفتر مشق ۵۰ برگ دایان طرح کرومی  ",
    dicost: 13,
    disprice: "۲۸۰,۰۰۰",
    price: "۳۲۰,۰۰۰",
  },
  {
    img: "./img/product/pro6.webp",
    name: "دفتر مشق ۵۰ برگی دایان مدل حاشیه  ",
    dicost: 11,
    disprice: "۸۰۰,۰۰۰",
    price: "۹۰۰,۰۰۰",
  },
  {
    img: "./img/product/pro7.webp",
    name: "دفتر مشق 80 برگ آوان مدل حاشیه   ",
    dicost: 11,
    disprice: "۱۱۴,۰۰۰",
    price: "۱۲۸,۰۰۰",
  },
  {
    img: "./img/product/pro8.webp",
    name: "دفتر مشق ۸۰ برگ دایان طرح فیفا کد ۵۳۶۴۲   ",
    dicost: 10,
    disprice: "۳۶۰,۰۰۰",
    price: "۴۰۰,۰۰۰",
  },
  {
    img: "./img/product/pro9.webp",
    name: "لپ تاپ 16 اینچی ایسر مدل Nitro",
    dicost: 11,
    disprice: "۹۴,۴۹۹,۰۰۰",
    price: "۱۰۵,۹۲۸,۴۰۰",
  },
  {
    img: "./img/product/pro10.webp",
    name: "لپ تاپ 15.6 اینچی ام اس آی مدل Cyborg",
    dicost: 6,
    disprice: "۵۹,۹۹۹,۰۰۰",
    price: "۶۴,۱۳۵,۰۰۰",
  },
  {
    img: "./img/product/pro11.webp",
    name: " لپ تاپ 15.6 اینچی لنوو مدل IdeaPad",
    dicost: 5,
    disprice: "۲۱,۱۹۹,۰۰۰",
    price: "۲۲,۳۰۲,۲۰۰",
  },
  {
    img: "./img/product/pro12.webp",
    name: " لپ تاپ 15.6 اینچی ایسوس مدل Vivobook ",
    dicost: 5,
    disprice: "۴۰,۹۰۰,۰۰۰",
    price: "۴۳,۰۰۰,۰۰۰",
  },
];
let spacial = document.querySelector("div.spro");
spacial.innerHTML = `
<div class="swiper-slide stitle text-white font-bold mx-[10px] p-[10px] w-[150px]">
  <img src="./img/spro0.svg" alt="" class="w-[110px]">
  <div class="clock">
      <span class=" bg-white w-[40px] text-black p-[7px] rounded-[8px]">00</span>
      <span>:</span>
      <span class="bg-white w-[40px] text-black p-[7px] rounded-[8px]">26</span>
      <span>:</span>
      <span class="bg-white w-[40px] text-black p-[7px] rounded-[8px]">12</span>
  </div>
  <img src="./img/spro00.svg" alt="">
  <span>مشاهده همه ></span>
</div>
`;
spro.forEach((elem) => {
  spacial.innerHTML += `
<div class="swiper-slide mr-[5px] w-[160px] h-[300px] bg-white p-2 flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
  <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="">
      </div>
      <div class="subtitle flex flex-col gap-[7px]">
          <p>${elem.name}</p>
          <div class="flex gap-[7px]">
              <span class="bg-[#d32f2f] w-[40px] text-white px-2 py-1 rounded-[16px] text-[12px]">${elem.dicost}%</span>
              <div class="pric flex text-[14px] text-[#3f4064]">
                  <span>${elem.disprice}</span>
                  <img src="./img/tomanprice.png" alt="toman" class="w-[20px] h-[20px]">
              </div>
          </div>
          <p class="line-through text-left">${elem.price}</p>
      </div>
  </a>
</div>
`;
});
spacial.innerHTML += `
<a href="#">
  <div class="swiper-slide mr-[5px] w-[160px] h-[250px] bg-white p-2 flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <div class="more w-[100px] h-[100px] leading-[100px] rounded-[50px] text-[14px] text-center bg-slate-300">مشاهده همه</div>
  </div>
</a>`;

// populer section
let populerpro = [
  {
    name: "piril",
    img: "./img/populerbrand/pbrand1.png",
  },
  {
    name: "prsi;",
    img: "./img/populerbrand/pbrand2.png",
  },
  {
    name: "charm",
    img: "./img/populerbrand/pbrand3.jpg",
  },
  {
    name: "chini",
    img: "./img/populerbrand/pbrand4.png",
  },
  {
    name: "vistion",
    img: "./img/populerbrand/pbrand5.jpg",
  },
  {
    name: "vital",
    img: "./img/populerbrand/pbrand7.png",
  },
  {
    name: "charm",
    img: "./img/populerbrand/pbrand8.jpg",
  },
  {
    name: "farrerr",
    img: "./img/populerbrand/pbrand9.png",
  },
  {
    name: "vita",
    img: "./img/populerbrand/pbrand10.png",
  },
  {
    name: "active",
    img: "./img/populerbrand/pbrand11.jpg",
  },
  {
    name: "kale",
    img: "./img/populerbrand/pbrand12.png",
  },
  {
    name: "life",
    img: "./img/populerbrand/pbrand13.jpg",
  },
];
let populer = document.querySelector("div.brand");
populer.innerHTML = "";
populerpro.forEach((elem) => {
  populer.innerHTML += `
<div class="swiper-slide w-[150px]text-center text-[14px] flex flex-col justify-center items-center gap-[10px] mr-[20px]">
  <a href="#">
    <div class="img">
        <img src="${elem.img}" alt="${elem.name}" class="w-[150px] h-[150px] p-[5px]">
    </div>
  </a>
</div>
    `;
});

// product dasde section
let bagphones = [
  {
    img: "./img/productdasde/bagphones/bagphone.pic1.jpg",
    name: "کاور قاب گارد مدل ژله ای فانتزی",
    dicost: 20,
    disprice: "۱۵۸,۰۰۰",
    price: "۱۹۸,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic2.jpg",
    name: "برچسب پوششی ماهوت مدل Painted-Flowers",
    dicost: 20,
    disprice: "۱۴۹,۸۶۰",
    price: "۱۸۷,۳۳۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic3.jpg",
    name: "برچسب پوششی ماهوت مدل Teacher-FullSkin",
    dicost: 13,
    disprice: "۲۸۰,۰۰۰",
    price: "۳۲۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic4.jpg",
    name: "برچسب پوششی ماهوت مدل KIA-Logo",
    dicost: 22,
    disprice: "۱۴۰,۴۰۰",
    price: "۱۸۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic5.jpg",
    name: "برچسب پوششی ماهوت مدل Night-Army ",
    dicost: 22,
    disprice: "۱۴۰,۴۰۰",
    price: "۱۸۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic6.jpg",
    name: "پوششی ماهوت مدل Purple",
    dicost: 22,
    disprice: "۱۸۷,۳۸۰",
    price: "۲۴۰,۲۴۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic7.jpg",
    name: "برای گوشی موبایل سامسونگ Galaxy S5 ",
    dicost: 40,
    disprice: "۱۴۹,۴۰۰",
    price: "۲۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic8.jpg",
    name: "برچسب پوششی ماهوت مدل",
    dicost: 21,
    disprice: "۳۸۳,۱۵۰",
    price: "۴۸۵,۰۰۰",
  },
  {
    img: "./img/productdasde/bagphones/bagphone.pic9.jpg",
    name: "برچسب پوششی ماهوت مدل",
    dicost: 11,
    disprice: "۳۸۳,۱۵۰",
    price: "۴۸۵,۰۰۰",
  },
];
let bphone = document.querySelector("div.bphone");
bphone.innerHTML = "";
bagphones.forEach((elem) => {
  bphone.innerHTML += `
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="" class="h-[120px]">
      </div>
      <div class="subtitle flex flex-col gap-[7px]">
          <p>${elem.name}</p>
          <div class="flex justify-between gap-[10px]">
              <span class="bg-[#d32f2f] text-white px-[8px] py-[4px] rounded-[16px] text-[12px]">${elem.dicost}%</span>
              <div class="pric flex text-[14px] text-[#3f4064]">
                  <span>${elem.disprice}</span>
                  <img src="./img/tomanprice.png" alt="toman" class="w-[20px] h-[20px]">
              </div>
          </div>
          <p class="line-through text-left">${elem.price}</p>
      </div>
    </a>
  </div>
`;
});
bphone.innerHTML += `
<a href="#">
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <div class="more w-[100px] h-[100px] leading-[100px] rounded-[50px] text-[14px] text-center bg-slate-300">مشاهده همه</div>
  </div>
</a>`;

let phones = [
  {
    img: "./img/productdasde/phones/phones.pic1.jpg",
    name: "گوشی موبایل تکنو مدل Spark 30 Pro",
    dicost: 3,
    disprice: "۱۵,۴۹۹,۰۰۰",
    price: "۱۵,۹۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic2.jpg",
    name: "گوشی موبایل اپل مدل iPhone 16 CH",
    dicost: 3,
    disprice: "۱۵,۴۹۹,۰۰۰",
    price: "۱۵,۹۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic3.jpg",
    name: "گوشی موبایل شیائومی مدل Redmi",
    dicost: 3,
    disprice: "۱۵,۴۹۹,۰۰۰",
    price: "۱۵,۹۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic4.jpg",
    name: "گوشی موبایل موتورولا مدل Edge 50 Fusion",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic5.jpg",
    name: "گوشی موبایل وان پلاس مدل ",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic6.jpg",
    name: "گوشی موبایل شیائومی مدل 15 Ultra",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic7.jpg",
    name: "گوشی موبایل موتورولا مدل Moto G35",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic8.jpg",
    name: "موبایل سامسونگ مدل Galaxy Z Fold",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
  {
    img: "./img/productdasde/phones/phones.pic9.jpg",
    name: "گوشی موبایل شیائومی مدل Poco X7 Pro",
    dicost: 1,
    disprice: "۸۱,۵۰۷,۷۷۰",
    price: "۸۲,۷۴۹,۰۰۰",
  },
];
let phone = document.querySelector("div.phone");
phone.innerHTML = "";
phones.forEach((elem) => {
  phone.innerHTML += `
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="" class="h-[120px]">
      </div>
      <div class="subtitle flex flex-col gap-[7px]">
          <p>${elem.name}</p>
          <div class="flex justify-between gap-[10px]">
              <span class="bg-[#d32f2f] text-white px-[8px] py-[4px] rounded-[16px] text-[12px]">${elem.dicost}%</span>
              <div class="pric flex text-[14px] text-[#3f4064]">
                  <span>${elem.disprice}</span>
                  <img src="./img/tomanprice.png" alt="toman" class="w-[20px] h-[20px]">
              </div>
          </div>
          <p class="line-through text-left">${elem.price}</p>
      </div>
    </a>
  </div>
`;
});
phone.innerHTML += `
<a href="#">
  <div class="swiper-slide  border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <div class="more w-[100px] h-[100px] leading-[100px] rounded-[50px] text-[14px] text-center bg-slate-300">مشاهده همه</div>
  </div>
</a>`;

let airpads = [
  {
    img: "./img/productdasde/airpads/airpads.pic1.jpg",
    name: "هدفون بلوتوثی ماکس007 مدل IBY-A4",
    dicost: 32,
    disprice: "۴۷۶,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic2.jpg",
    name: "هدفون بلوتوثی فوربری مدل Dmooster D36",
    dicost: 32,
    disprice: "۴۷۶,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic3.jpg",
    name: "هدفون بلوتوثی ویسمی مدل T11",
    dicost: 32,
    disprice: "۴۷۶,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic4.jpg",
    name: "هدفون بلوتوثی ویسمی مدل T12",
    dicost: 25,
    disprice: "۵۲۵,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic5.jpg",
    name: "هدفون بلوتوثی موزیک آپولو مدل HSK5 ",
    dicost: 45,
    disprice: "۱,۲۶۵,۰۰۰",
    price: "۲,۳۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic6.jpg",
    name: "هدفون بی سیم مدل wireless headset p68",
    dicost: 25,
    disprice: "۵۲۵,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic7.jpg",
    name: "گوشی موبایل موتورولا مدل Moto G35",
    dicost: 45,
    disprice: "۱,۲۰۰,۰۰۰",
    price: "۲,۲۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic8.jpg",
    name: "هدفون بلوتوثی بیرداینامیک مدل",
    dicost: 45,
    disprice: "۱,۲۰۰,۰۰۰",
    price: "۲,۲۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/airpads/airpads.pic9.jpg",
    name: "هدفون بلوتوثی وونک مدل AIR MAX",
    dicost: 34,
    disprice: "۶۵۰,۰۰۰",
    price: "۹۹۰,۰۰۰",
  },
];
let airpad = document.querySelector("div.airpad");
airpad.innerHTML = "";
airpads.forEach((elem) => {
  airpad.innerHTML += `
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="" class="h-[120px]">
      </div>
      <div class="subtitle flex flex-col gap-[7px]">
          <p>${elem.name}</p>
          <div class="flex justify-between gap-[10px]">
              <span class="bg-[#d32f2f] text-white px-[8px] py-[4px] rounded-[16px] text-[12px]">${elem.dicost}%</span>
              <div class="pric flex text-[14px] text-[#3f4064]">
                  <span>${elem.disprice}</span>
                  <img src="./img/tomanprice.png" alt="toman" class="w-[20px] h-[20px]">
              </div>
          </div>
          <p class="line-through text-left">${elem.price}</p>
      </div>
    </a>
  </div>
`;
});
airpad.innerHTML += `
<a href="#">
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <div class="more w-[100px] h-[100px] leading-[100px] rounded-[50px] text-[14px] text-center bg-slate-300">مشاهده همه</div>
  </div>
</a>`;

let bagpacks = [
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic1.jpg",
    name: "کوله پشتی مدل ماینکرفت",
    dicost: 15,
    disprice: "۶۳۷,۵۰۰",
    price: "۷۵۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic2.jpg",
    name: " طرح کرومی ملودی عروسک دار کد",
    dicost: 32,
    disprice: "۴۷۶,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic3.jpg",
    name: "روه موسیقی آسترو به همراه کلاسور ",
    dicost: 6,
    disprice: "۱,۲۲۲,۰۰۰",
    price: "۱,۳۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic4.jpg",
    name: "کوله پشتی مدل لبوبو کد 2",
    dicost: 15,
    disprice: "۶۳۷,۵۰۰",
    price: "۷۵۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic5.jpg",
    name: "کوله پشتی مدرسه مدل شفاف",
    dicost: 6,
    disprice: "۱,۲۲۲,۰۰۰",
    price: "۱,۳۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic6.jpg",
    name: "کوله پشتی مدرسه مدل فضانورد کد Fz_Nan",
    dicost: 29,
    disprice: "۴۹۷,۰۰۰",
    price: "۷۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic7.jpg",
    name: "کوله پشتی فوروارد  کد 6008 به همراه جامدادی",
    dicost: 45,
    disprice: "۱,۲۰۰,۰۰۰",
    price: "۲,۲۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic8.jpg",
    name: "کوله پشتی مدل یونیکورن 1-1019",
    dicost: 45,
    disprice: "۱,۲۰۰,۰۰۰",
    price: "۲,۲۰۰,۰۰۰",
  },
  {
    img: "./img/productdasde/bagpacks/bagpacks.pic9.jpg",
    name: "کوله پشتی مدل رونالدو کد ",
    dicost: 34,
    disprice: "۶۵۰,۰۰۰",
    price: "۹۹۰,۰۰۰",
  },
];
let bagpack = document.querySelector("div.bagpack");
bagpack.innerHTML = "";
bagpacks.forEach((elem) => {
  bagpack.innerHTML += `
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <a href="#">
      <div class="img">
          <img src="${elem.img}" alt="" class="h-[120px]">
      </div>
      <div class="subtitle flex flex-col gap-[7px]">
          <p>${elem.name}</p>
          <div class="flex justify-between gap-[10px]">
              <span class="bg-[#d32f2f] text-white px-[8px] py-[4px] rounded-[16px] text-[12px]">${elem.dicost}%</span>
              <div class="pric flex text-[14px] text-[#3f4064]">
                  <span>${elem.disprice}</span>
                  <img src="./img/tomanprice.png" alt="toman" class="w-[20px] h-[20px]">
              </div>
          </div>
          <p class="line-through text-left">${elem.price}</p>
      </div>
    </a>
  </div>
`;
});
bagpack.innerHTML += `
<a href="#">
  <div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] w-[160px]  bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <div class="more w-[100px] h-[100px] leading-[100px] rounded-[50px] text-[14px] text-center bg-slate-300">مشاهده همه</div>
  </div>
</a>`;

// maghale slider
let maghales = [
  {
    img: "./img/articels/articels.pic1.webp",
    title: "معرفی بهترین کوکتل مزوتراپی مو، پوست و لاغری",
  },
  {
    img: "./img/articels/articels.pic2.webp",
    title:
      "ثبت‌نام کتاب درسی ۱۴۰۴ &#8211; ۱۴۰۵؛ آموزش کامل مراحل، زمان‌بندی و هزینه‌ها",
  },
  {
    img: "./img/articels/articels.pic3.webp",
    title: "نام خود را با مأموریت آرتمیس ۲ ناسا به ماه بفرستید!",
  },
  {
    img: "./img/articels/articels.pic4.webp",
    title: "طرز تهیه کیک خیس",
  },
  {
    img: "./img/articels/articels.pic5.webp",
    title: "ماسک پیلاف چیست؛ معرفی بهترین برندها",
  },
  {
    img: "./img/articels/articels.pic6.webp",
    title:
      "تمام بازی‌هایی که استودیوهای پلی‌استیشن در دست ساخت دارند (تابستان ۱۴۰۴)",
  },
  {
    img: "./img/articels/articels.pic7.webp",
    title: "فیلم «احضار: آخرین مراسم» گیشه را تسخیر کرد (باکس آفیس هفته)",
  },
  {
    img: "./img/articels/articels.pic8.webp",
    title: "پربازدیدترین ویدیوهای یوتیوب در ایران و جهان را بشناسید",
  },
  {
    img: "./img/articels/articels.pic9.webp",
    title: "بهترین کرم ضد جوش فوری؛ پمادهای ارزان، موثر و فوری",
  },
  {
    img: "./img/articels/articels.pic10.webp",
    title: "بهترین عکس‌های ماه‌گرفتگی ۱۶ شهریور را ببینید!",
  },
];
let maghale = document.querySelector("div.maghale");
maghale.innerHTML = "";
maghales.forEach((elem) => {
  maghale.innerHTML += `
<div class="swiper-slide border border-[#d4d4d4] rounded-[10px] mr-[5px] mt-[20px] !h-[200px] !w-[250px] bg-white p-[8px] flex flex-col justify-center items-center gap-[10px] font-semibold text-[#62666d] text-[12px]">
    <a href="#">
        <div class="img">
            <img src="${elem.img}" alt="" class="w-full">
        </div>
        <div class="subtitle flex flex-col gap-[7px]">
            <p class="p-[5px]">${elem.title}</p>
        </div>
    </a>
</div>
`;
});

// footer buttom mobile
let btn1 = document.querySelector("div.btn1");
let btn2 = document.querySelector("div.btn2");
let btn3 = document.querySelector("div.btn3");
let btn4 = document.querySelector("div.btn4");

btn1.addEventListener("click", function () {
  document.querySelector(".subtitle1").classList.toggle("hiden");
  document.querySelector(".subtitle2").classList.add("hiden");
  document.querySelector(".subtitle3").classList.add("hiden");
  document.querySelector(".subtitle4").classList.add("hiden");
});

btn2.addEventListener("click", function () {
  document.querySelector(".subtitle2").classList.toggle("hiden");
  document.querySelector(".subtitle1").classList.add("hiden");
  document.querySelector(".subtitle3").classList.add("hiden");
  document.querySelector(".subtitle4").classList.add("hiden");
});

btn3.addEventListener("click", function () {
  document.querySelector(".subtitle3").classList.toggle("hiden");
  document.querySelector(".subtitle1").classList.add("hiden");
  document.querySelector(".subtitle2").classList.add("hiden");
  document.querySelector(".subtitle4").classList.add("hiden");
});

btn4.addEventListener("click", function () {
  document.querySelector(".subtitle4").classList.toggle("hiden");
  document.querySelector(".subtitle1").classList.add("hiden");
  document.querySelector(".subtitle2").classList.add("hiden");
  document.querySelector(".subtitle3").classList.add("hiden");
});
