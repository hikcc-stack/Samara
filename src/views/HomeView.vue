<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

// логика слайдера кирпичей
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    img: new URL('../assets/images/slider-1.svg', import.meta.url).href,
    sub: 'ВСЕ ВИДЫ', title: 'КИРПИЧА', city: 'В САМАРЕ',
    tags: ['Цокольный', 'Облицовочный', 'Печной', 'Шамотный', 'Ручной формовки', 'Силикатный']
  },
  {
    img: new URL('../assets/images/slider-2.svg', import.meta.url).href,
    sub: 'СТРОИТЕЛЬНЫЕ БЛОКИ', title: 'ГАЗОБЕТОН', city: 'В САМАРЕ',
    tags: ['Для дома', 'Для бани', 'Для перегородок']
  },
  {
    img: new URL('../assets/images/slider-3.svg', import.meta.url).href,
    sub: 'СТРОИТЕЛЬНЫЕ БЛОКИ', title: 'КЕРАКАМ И КАЙМАН', city: 'В САМАРЕ',
    tags: ['Не требует утепления', 'Экологически чистые', 'Удобные в монтаже', 'Недорогие']
  },
  {
    img: new URL('../assets/images/slider-4.svg', import.meta.url).href,
    sub: 'ОБЛИЦОВОЧНАЯ ПЛИТКА', title: 'ДЕКОРОТИВНАЯ И ФАСАДНАЯ',
    tags: ['Облицовочные камень для фасада иинтерьера', 'Фасадная клинкерная плитка']
  },
  {
    img: new URL('../assets/images/slider-5.svg', import.meta.url).href,
    sub: 'НАДЁЖНАЯ И НЕДОРОГАЯ', title: 'КРОВЛЯ', city: 'В САМАРЕ',
    tags: ['Мягкая кровля', 'Металлочерепица', 'Минеральная черепица', 'Керамическая черепица']
  },
  {
    img: new URL('../assets/images/slider-6.svg', import.meta.url).href,
    sub: 'СТРОИТЕЛЬНЫЕ', title: 'СУХИЕ СМЕСИ', city: 'В МКШКАХ',
    tags: ['Штукатурка', 'Шпатлевка', 'Печные смеси', 'Клей для газобетона', 'Клей для плитки', 'Цветные кладочные смеси']
  },
  {
    img: new URL('../assets/images/slider-7.svg', import.meta.url).href,
    sub: 'СТРОИТЕЛЬНЫЙ', title: 'ЦЕМЕНТ', city: 'В МЕШКАХ',
    tags: ['Цемент 25 кг', 'Цемент 40 кг', 'Цемент 50 кг', 'Цементно-песчаная смесь']
  },
  {
    img: new URL('../assets/images/slider-8.svg', import.meta.url).href,
    sub: 'ПЛИТКА И БРУСТЧАТКА', title: 'ТРОТУАРНАЯ', city: 'В САМАРЕ',
    tags: ['Тротуарная плитка', 'Брусчатка клинкерная', 'Бордюры', 'Доска террасная']
  },
]

const current = ref(0)
const prev = () => current.value = (current.value - 1 + slides.length) % slides.length
const next = () => current.value = (current.value + 1) % slides.length

let timer
onMounted(() => { timer = setInterval(next, 5000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <!-- навигация -->
  <nav>
    <div class="menu">
      <div class="menu-right">
        <div class="job-right">
          <img src="../assets/images/pin.svg" alt="pin">
          <p>Работаем в самаре с 2007 г.</p>
        </div>
        <div class="menu-right-links">
          <p @click="router.push('/')">Главная</p>
          <p @click="router.push('/about_company')">О компании</p>
        </div>
      </div>
      <div class="middle">
        <p @click="router.push('/delivery')">Доставка</p>
        <p @click="router.push('/reviews')">Отзывы</p>
        <p @click="router.push('/how_order')">Как сделать заказ</p>
      </div>
      <div class="menu-left">
        <div class="time">
          <img src="../assets/images/clock.svg" alt="clock"/>
          <p>контакт центр <br> с 8:00 до 19:00</p>
        </div>
        <img src="../assets/images/Telegram.svg" alt="telegram"/>
        <div class="menu-number-list">
          <label for="numb">8 (955) 888-08-08</label>
          <select class="numbers" name="numbers" id="numb">

          </select>
        </div>
      </div>
    </div>
  </nav>
  <!-- секция с поиском -->
  <section class="search-bar">
    <img class="logo" src="../assets/images/SamaraLogo.svg" alt="logo">
    <form class="search-form" action="" method="get">
      <input name="s" placeholder="Поиск по названию, бренду..." type="search">
      <button type="submit">
        <img src="../assets/images/serach-icon.svg" alt="search">
      </button>
    </form>
    <div class="cart">
      <div class="cart-info">
        <p class="cart-label">Корзина:</p>
        <p class="cart-price">0 ₽</p>
        <p class="cart-link" @click="router.push('/how_order')">Как сделать заказ</p>
      </div>
      <img src="../assets/images/cart.svg" alt="cart">
    </div>
  </section>

  <!--Секция товаров и меню -->
    <section class="catalog-bar">
      <div class="catalog-of-products">
        <button class="catalog-btn">
          <span class="burger">☰</span> Каталог продукции
        </button>
      </div>
      <nav class="catalog-nav">
        <a href="#">Кирпич</a>
        <a href="#">Керакам</a>
        <div class="catalog-item-wrap">
          <span class="badge">Акция!</span>
          <a href="#">Газоблок</a>
        </div>
        <a href="#">Утеплитель</a>
        <a href="#">Цемент</a>
        <a href="#">Керамзитный блок</a>
        <a href="#">Пенопласт</a>
        <a href="#">Гипсокартон</a>
        <a href="#">Товары для сада</a>
      </nav>
    </section>
  <!-- слайдер кирпичей -->
  <section class="slider">
    <div class="slider-track">
      <div
          v-for="(slide, i) in slides"
          :key="i"
          class="slide"
          :class="{ active: i === current }"
      >
        <img :src="slide.img" :alt="'slide ' + (i + 1)">
        <div class="slide-content">
          <div class="slide-text">
            <p class="slide-sub">{{ slide.sub }}</p>
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-city">{{ slide.city }}</p>
            <div class="slide-tags">
            <span v-for="tag in slide.tags" :key="tag">
              <img src="../assets/images/pin.svg" alt="">{{ tag }}
            </span>
            </div>
          </div>
          <div class="slide-form">
            <p>Укажите свой номер телефона:</p>
            <div class="slide-form-row">
              <input type="tel" placeholder="+7">
              <button>Отправить</button>
            </div>
            <p class="slide-form-note">
              Мы сообщим наличие, актуальные цены и стоимость доставки.
              Проконсультируем по любым вопросам.
              Консультация бесплатная и ни к чему вас не обязывает!
            </p>
          </div>
        </div>
      </div>
    </div>

    <button class="slider-arrow left" @click="prev">← предыдущий</button>
    <button class="slider-arrow right" @click="next">следующий →</button>

    <div class="slider-dots">
    <span
        v-for="(_, i) in slides"
        :key="i"
        class="dot"
        :class="{ active: i === current }"
        @click="current = i"
    ></span>
    </div>
  </section>
</template>


<style scoped>
/* навигация */
nav.menu {
  align-content: center;
  align-items: center;
  justify-content: center;

}
.menu {
  border-bottom: 2px solid #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  gap: 16px;
  max-width: 1660px;
  margin: 0 auto;
}
.menu-right {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: Montserrat ;
  font-size: 14px;
  font-weight: 700;
  color: #586067;
}
.job-right {
  display: flex;
  align-items: center;
  gap: 6px;
}
.job-right p {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #586067;
  white-space: nowrap;
}
.menu-right-links {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}
.middle {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  color: #586067;
  cursor: pointer;
}
.menu-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.menu-number-list {
  display: flex;
  align-items: center;
  gap: 6px;
}
select.numbers {
  border: none;
}
.menu-number-list label {
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 700;
  color: #7F9D87;
  white-space: nowrap;
}
.time {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #586067;
  white-space: nowrap;
}
/* секция с поиском */
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1660px;
  margin: 0 auto 20px;
  padding: 16px 24px;

}

.logo {
  height: 72px;
  flex-shrink: 0;
}

.search-form {
  position: relative;
  flex: 1;
}
.search-form input {
  width: 100%;
  height: 48px;
  padding: 0 80px 0 16px;
  border: 2px solid #E0E0E0;
  border-radius: 5px;
  outline: none;
  font-family: Inter;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}
.search-form input::placeholder {
  color: #AAAAAA;
}
.search-form button {
  position: absolute;
  top: 0;
  right: 0;
  width: 72px;
  height: 48px;
  border: none;
  background: #7F9D87;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-form button img {
  width: 20px;
  height: 20px;
}

/* корзина */
.cart {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.cart-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.cart-label {
  font-family: Montserrat;
  font-size: 14px;
  color: #586067;
  margin: 0;
}
.cart-price {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.cart-link {
  font-family: Inter;
  font-size: 13px;
  color: #7F9D87;
  cursor: pointer;
  text-decoration: underline;
  margin: 0;
}
.cart img {
  width: 40px;
  height: 40px;
}
/* каталог */
.catalog-bar {
  display: flex;
  align-items: center;
  max-width: 1660px;
  margin: 0 auto;
}
.catalog-of-products {
  margin-right: 20px;
}
.catalog-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #7F9D87;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  border: none;
  padding: 14px 24px;
  cursor: pointer;
  white-space: nowrap;
  height: 55px;
  border-radius: 7px;
}

.burger {
  font-size: 18px;
}

.catalog-nav {
  height: 55px;
  width: 1388px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  flex: 1;
  background: #949597;
  border-radius: 7px;
}

.catalog-nav a {
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

.catalog-nav a:hover {
  text-decoration: underline;
}

.catalog-item-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.badge {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF6B35;
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
}
/* слайдер кирпичей */
.slider {

  position: relative;
  max-width: 1660px;
  margin: 33px auto;
  overflow: hidden;
  border-radius: 12px;
}

.slider-track {
  display: flex;
  width: 100%;
}

.slide {
  min-width: 100%;
  position: relative;
  display: none;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.slide-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 48px;
}

.slide-text {
  color: #fff;
}

.slide-sub {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.slide-title {
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 900;
  margin: 4px 0;
  line-height: 1;
}

.slide-city {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
}

.slide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.slide-tags span {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Inter;
  font-size: 13px;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
}

.slide-tags span img {
  width: 14px;
  height: 14px;
}

/* форма */
.slide-form {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  max-height: 240px;
  max-width: 550px;
  flex-shrink: 0;
}

.slide-form p {
  font-family: Inter;
  font-size: 13px;
  color: #333;
  margin: 0 0 10px;
}

.slide-form-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.slide-form-row input {
  flex: 1;
  height: 53px;
  max-width: 264px;
  border: 1px solid #7F9D87;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
}

.slide-form-row button {
  height: 53px;
  width: 200px;
  background: #7F9D87;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.slide-form-note {
  font-size: 15px !important;
  color: #606060 !important;
}

/* стрелки */
.slider-arrow {
  position: absolute;
  margin-top: 20px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #555;
  font-family: Inter;
  font-size: 13px;
  cursor: pointer;
  padding: 4px 8px;
}

.slider-arrow.left { left: 8px; }
.slider-arrow.right { right: 8px; }

/* точки */
.slider-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 0 4px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #7F9D87;
}
</style>
