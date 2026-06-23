<script setup>

import { useRouter } from 'vue-router'
import slidesData from '../data/slider.json'
import popularProductsData from '../data/popular_products.json'

const router = useRouter()

// логика слайдера кирпичей
import { ref, onMounted, onUnmounted } from 'vue'

//наполнение слайдера
const sliderImages = import.meta.glob('../assets/images/slider-*.svg', {
  eager: true, import: 'default',
})
const iconImages = import.meta.glob('../assets/images/slider-icons/*.svg', {
  eager: true, import: 'default',
})
const sliderImg = (name) => sliderImages[`../assets/images/${name}`]
const iconImg = (name) => iconImages[`../assets/images/slider-icons/${name}`]
const slides = slidesData

// работа стрелок слайдера
const current = ref(0)
const prev = () => current.value = (current.value - 1 + slides.length) % slides.length
const next = () => current.value = (current.value + 1) % slides.length
// интервал самостоятельного перехода на другой слайд
let timer
onMounted(() => { timer = setInterval(next, 10000) })
onUnmounted(() => clearInterval(timer))

// форма в слайдере локации
const phone = ref('')
const formOpen = ref(false) // раскрыта ли форма
const locations = [
    'База "на Алма-Атинской"',
    'База "в Преображенкее"',
    'Офис "на Садовой"',
    'Офис "на Амбаре"',
]
const selectedLocation = ref('Офис "на Садовой"')

// описание магазина
const description = `ООО «Союз» – более 12 лет продает строителям и организациям города Самары газобетонные блоки гарантированного качества, сделанный по ГОСТам с соблюдением технологии.
Основной ассортимент компании: блоки кайман, блоки керакам, недорогой кирпич, лицевой кирпич`

const isDescriptionOpen = ref(false)

const unwrapDescription = () => {
  isDescriptionOpen.value = !isDescriptionOpen.value
}
// секция с популярными товарами
// сами категории в списке
const popularCategories = [
    'Кирпич',
    'Строительные блоки',
    'Кровля',
    'Фасад',
    'Утеплители',
    'Тротуарная плитка',
    'Щебень'
]
// какая категория активная
const activeCategorie =ref('Кирпич')
// наполнение активной категории
const productIcon = import.meta.glob('../assets/images/popularproducts-icon/*.svg', {
  eager: true, import: 'default',
})
const productImg = (name) => productIcon[`../assets/images/popularproducts-icon/${name}`]
const popularProductsList = popularProductsData
</script>

<template>
  <!-- навигация -->
  <nav>
    <div class="menu">
      <div class="menu-right">
        <div class="job-right">
          <img src="../assets/images/pin.svg" alt="pin">
          <p>Работаем в Самаре с 2007 г.</p>
        </div>
        <div class="menu-right-links">
          <p @click="router.push('/')">Главная</p>
          <p @click="router.push('/about_company')">О компании</p>
          <p @click="router.push('/delivery')">Доставка</p>
          <div class="reviews-block">
            <p @click="router.push('/reviews')">Отзывы</p>
            <span class="badge-reviews">452</span>
          </div>
          <p @click="router.push('/how_order')">Как сделать заказ</p>
        </div>
      </div>
      <div class="menu-left">
        <div class="time">
          <img src="../assets/images/clock.svg" alt="clock"/>
          <p>контакт-центр <br> с 8:00 до 19:00</p>
        </div>
        <img src="../assets/images/Telegram.svg" alt="telegram"/>
        <div class="menu-number-list">
          <label for="numb">8 (995) 888-08-08</label>
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
        <img :src="sliderImg(slide.img)" :alt="'slide ' + (i + 1)">
        <div class="slide-content">
          <div class="slide-text">
            <p class="slide-sub">{{ slide.sub }}</p>
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-city">{{ slide.city }}</p>
            <div class="slide-tags">
            <span v-for="tag in slide.tags" :key="tag.text">
              <img class="tag-icon" :src="iconImg(tag.icon)" alt="">{{ tag.text }}
            </span>
            </div>
          </div>
          <!-- форма в слайдере -->
          <div class="slide-form">
            <p>Укажите свой номер телефона:</p>
            <div class="slide-form-row">
              <input type="tel" placeholder="+7" v-model="phone" @focus="formOpen = true">
              <button>Отправить</button>
            </div>
            <p class="slide-form-note">
              Мы сообщим наличие, актуальные цены и стоимость доставки.
              Проконсультируем по любым вопросам.
              Консультация бесплатная и ни к чему вас не обязывает!
            </p>
            <div class="slide-form-locations" v-if="formOpen">
              <p class="locations-title">Куда отправить запрос:</p>
              <label v-for="loc in locations" :key="loc" class="location-option">
                <input type="radio" name="location" :value="loc" v-model="selectedLocation">
                {{ loc }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- стрелки слайдера -->
    <button class="slider-arrow left" @click="prev">← предыдущий</button>
    <button class="slider-arrow right" @click="next">следующий →</button>
    <!-- точки под слайдерем -->
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
  <!-- Секция с описанием -->
  <section class="section-description">
    <div class="description-text">
      <h2>ООО Союз - магазин стройматериалов в Самаре</h2>
      <div v-if="isDescriptionOpen" id="product-description" class="description">
        <p>{{ description }}</p>
      </div>
      <button class="description-btn" @click="unwrapDescription">
        {{ isDescriptionOpen ? 'Свернуть описание' : 'Развернуть описание'}}
      </button>
    </div>
  </section>
  <!-- Секция популярных товаров -->
  <section class="popular-products">
      <h2 class="popular-title">Популярные товары -</h2>
    <div class="popular-list">
      <!-- вкладки в списке -->
      <div class="popular-tabs">
        <button
            v-for="cat in popularCategories"
            :key="cat"
            class="popular-tab"
            :class="{ active: cat === activeCategorie }"
            @click="activeCategorie = cat">
          {{ cat }}
        </button>
      </div>
      <!-- карточки с товарами -->
      <div class="popular-grid">
        <div
            v-for="prod in popularProductsList[activeCategorie]"
            :key="prod.name"
            class="product-card">
          <span v-if="prod.badge" class="product-badge">{{ prod.badge }}</span>
          <img :src="productImg(prod.img)" :alt="prod.name" class="product-img">
          <div class="product-info">
            <p class="product-name">{{ prod.name }}</p>
            <p v-if="prod.price" class="product-price">{{ prod.price }}</p>
          </div>
        </div>
      </div>
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
  gap: 24px;
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
  gap: 20px;
  text-transform: uppercase;
  cursor: pointer;
}
.menu-right-links {
  margin: 0;
  white-space: nowrap;
}
.reviews-block {
  position: relative;
  display: flex;
  align-items: center;
}
.badge-reviews {
  margin-bottom: 11px;
  margin-left: 4px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.4;
  padding: 1px 7px;
  border-radius: 20px;
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
  background: #FC6904;
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
  overflow: visible;
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

.slide > img {
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
/* теги слайдера */
.slide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 44px;
  max-width: 720px;
  margin-top: 28px;
}
.slide-tags span {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter;
  font-size: 16px;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
}
.tag-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
  flex-shrink: 0;
}
/* форма */
.slide-form {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  max-width: 550px;
  flex-shrink: 0;
  align-self: flex-start;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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
/* локации в форме*/
.slide-form-locations {
  margin-top: 16px;
}
.locations-title {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px;
}
.location-option {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Inter;
  font-size: 15px;
  color: #333;
  margin-bottom: 12px;
  cursor: pointer;
}
/* кастомная круглая радио-кнопка */
.location-option input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid #c4c4c4;
  border-radius: 50%;
  margin: 0;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
}
.location-option input[type="radio"]:checked {
  border-color: #7F9D87;
  background: #7F9D87;
}
.location-option input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 6px;
  height: 11px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
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

/* описание */
.section-description{
  padding-left: 110px;
}
.description {
  max-width: 1660px;
}
.description-text h2 {
  font-family: Montserrat;
  font-size: 24px;
  color: #333;
}
.description p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  color: #586067;
  line-height: 26px;
  text-align: left;
}
.description-btn {
  background: none;
  border: none;
  color: #7F9D87;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}
/* популярные товары */
.popular-products {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}
.popular-title {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
}
.popular-list {
  display: flex;
  gap: 24px;
}

/* вкладки */
.popular-tabs {
  display: flex;
  flex-direction: column;
  width: 280px;
  flex-shrink: 0;
  background: #F7F7F7;
  border-radius: 12px;
  padding: 12px;
  height: fit-content;
}
.popular-tab {
  text-align: left;
  background: none;
  border: none;
  font-family: Montserrat;
  font-size: 16px;
  color: #586067;
  padding: 16px 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}
.popular-tab:hover {
  background: #ededed;
}
.popular-tab.active {
  background: #fff;
  font-weight: 700;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

/* сетка карточек */
.popular-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-content: start;
}
.product-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #EEEEEE;
  border-radius: 12px;
  padding: 16px;
  height: fit-content;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
.product-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  flex-shrink: 0;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.product-name {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.product-price {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  color: #7F9D87;
  margin: 0;
}
</style>
