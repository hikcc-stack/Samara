<script setup>

import { useRouter } from 'vue-router'
import slidesData from '@/data/slider.json'
import popularProductsData from '@/data/popular_products.json'
import recData from '@/data/recommended_products.json'
import AppHeader from '@/components/AppHeader.vue'
import ShopsPagePage from '@/components/ShopsPage.vue'
import AdComp from "@/components/AdComp.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter()

// логика слайдера кирпичей
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import Reviews from "@/components/Reviews.vue";

//наполнение слайдера
const sliderImages = import.meta.glob('../assets/images/slider-*.svg', { //импорт сразу всех изображений для садйдера
  eager: true, //загрузить сразу 
  import: 'default', //взять сам путь к картинке
})
const iconImages = import.meta.glob('../assets/images/slider-icons/*.svg', { // тоже самое что и сладйеримаджес только с иконками слайдера
  eager: true, import: 'default',
})
// функции достают готовый путь картинке по имени из json
const sliderImg = (name) => sliderImages[`../assets/images/${name}`]
const iconImg = (name) => iconImages[`../assets/images/slider-icons/${name}`]
const slides = slidesData // короткое имя для данных из json

// работа стрелок слайдера
const current = ref(0) // текущий слайд
const prev = () => current.value = (current.value - 1 + slides.length) % slides.length // предыдущий слайд
const next = () => current.value = (current.value + 1) % slides.length // следующий слайд
// интервал самостоятельного перехода на другой слайд
let timer
onMounted(() => { timer = setInterval(next, 10000) })
onUnmounted(() => clearInterval(timer))

// форма в слайдере локации
const phone = ref('') // значение поля телефона
const formOpen = ref(false) // раскрыта ли форма
const locations = [ // варианты локаций
    'База "на Алма-Атинской"',
    'База "в Преображенкее"',
    'Офис "на Садовой"',
    'Офис "на Амбаре"',
]
const selectedLocation = ref('Офис "на Садовой"') // то что стоит по умолчанию 

// описание магазина
// первый абзац описания
const description = `ООО «Союз» – более 12 лет продает строителям и организациям города Самары газобетонные блоки гарантированного качества, сделанный по ГОСТам с соблюдением технологии.`
// второй абзац описания
const descriptionMore = `Основной ассортимент компании: блоки кайман, блоки керакам, недорогой кирпич, лицевой кирпич`

const isDescriptionOpen = ref(false)  //развернуто описание или нет

// переключатель развернутого описания
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
const productIcon = import.meta.glob('../assets/images/popularproducts-icon/*.svg', { // тоже самое что и у слайлера
  eager: true, import: 'default',
})
const productImg = (name) => productIcon[`../assets/images/popularproducts-icon/${name}`] // готовый путь к картинке по имени из json
const popularProductsList = popularProductsData // данные из json


// слайдер рекомендаций, новинок, распрадаж
// картинки рекомендованных товаров
// анологичное что и у остальных слайдеров и т.д.
const recImages = import.meta.glob('../assets/images/recommended-products/*.svg', {
  eager: true, import: 'default',
})
const recImg = (name) => recImages[`../assets/images/recommended-products/${name}`]

const recommendList = recData
const recommendTabs = Object.keys(recData) // названия вкладок из ключей данных(рекомендуем, новинки, распродажа)
const activeRecommend = ref('Рекомендуем') // активная вкладка

// горизонтальная прокрутка карточек
const recTrack = ref(null) // ссылка на саму ленту товаров на странице
const atStart = ref(true) // находимся ли мы на самой левой позиции
const atEnd = ref(false) // находимся ли мы на самой правой позиции
// пересчитывает положение ленты и показывает либо прячет стрелки
const recArrows = () => {
  const element = recTrack.value // берем блок ленты
  if (!element) return // елси блока нет, выходим
  atStart.value = element.scrollLeft <= 0 // проверяем на левой ли мы позиции, если да левая стрелка не нужна
  atEnd.value = element.scrollLeft >= element.scrollWidth - element.clientWidth -1 // проверяем на правой ли мы позиции, если да правая стрелка не нужна
}
//прокрутка ленты, elem задает направление 1-вправо, -1-влево
const scrollRec = (elem = 1) => {
  recTrack.value?.scrollBy({ left: 320 * elem, behavior: 'smooth' })
}
onMounted(() => nextTick(recArrows)) // при монтировании компонента пересчитываем стрелки
watch(activeRecommend, () => nextTick(recArrows)) // при смене активной вкладки пересчитываем стрелки
// отзывы слайдер
// переделано в переиспользуемый компонент
</script>

<template>
  <!-- навигация -->
  <!-- переделана как переиспользуемый компонент -->
  <AppHeader />
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
      <div class="description">
        <p>{{ description }}</p>
        <p v-if="isDescriptionOpen" class="description">{{ descriptionMore }}</p>
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
  <!-- Доставка и оплата -->
  <section class="delivery">
    <div class="delivery-text">
      <h2 class="delivery-title">Доставка и оплата</h2>
      <p>Можем предложить доставку по Самаре и Смарской области или самовывоз из магазинов - <span class="blue-link"> смотреть подробнее</span> </p>
    </div>
  </section>
  <!-- Секция слайдер рекомендаций, новинок и распродажи -->
  <section class="recommend">
    <div class="recommend-head">
      <span class="recommend-stock-badge">В наличии</span>
      <button
          v-for="tab in recommendTabs"
          :key="tab"
          class="recommend-tab"
          :class="{ active: tab === activeRecommend }"
          @click="activeRecommend = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="recommend-wrap">
      <div class="recommend-track" ref="recTrack" @scroll="recArrows">
        <div
            v-for="prod in recommendList[activeRecommend]"
            :key="prod.name"
            class="rec-card">
          <span v-if="prod.discount" class="rec-discount">{{ prod.discount }}</span>
          <span v-if="prod.badge" class="rec-badge">{{ prod.badge }}</span>
          <img :src="recImg(prod.img)" :alt="prod.name" class="rec-img">
          <p class="rec-name">{{ prod.name }}</p>
          <p class="rec-desc">{{ prod.desc }}</p>
          <div class="rec-prices">
            <p class="rec-price">{{ prod.price }}</p>
            <p v-if="prod.price2" class="rec-price2">{{ prod.price2 }}</p>
          </div>
          <button class="rec-cart-btn">В корзину</button>
        </div>
      </div>
      <button class="recommend-arrow left" @click="scrollRec(-1)" v-if="!atStart"><</button>
      <button class="recommend-arrow right" @click="scrollRec(1)" v-if="!atEnd">></button>
    </div>
  </section>
  <!-- секция отзывов со слайдером -->
  <!-- переделано в переиспользуемый компонент -->
  <Reviews/>
  <!-- секция с магазинами
  переиспользуемый компонент-->
  <ShopsPagePage/>
  <!-- секция с рекламой
  как переиспользуемый компонент -->
  <AdComp/>
  <!-- секция с картой
  как переиспользуемый компонент-->
  <Map/>
  <!-- Футер
  переиспользуемый компонент -->
  <Footer/>
</template>


<style scoped>
/* навигация */
/* переделана в переиспользуемый компонент*/
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
/* круглая радио-кнопка */
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
  font-size: 32px;
  color: #000000;
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
  font-size: 20px;
  font-weight: 600;
  color: #586067;
  margin: 0;
}
.product-price {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  color: #1F1F1F;
  margin: 0;
}

/* секция с доставкой и оплатой */
.delivery-title{
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 5px;
  font-family: Montserrat;
  font-size: 32px;
  color: #000000;
}
.delivery-text p {
  line-height: 24px;
  font-family: Inter ;
  font-size: 17px;
  color: #586067;
}
.blue-link {
  font-family: Inter;
  font-weight: 400;
  font-size: 17px;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.delivery {
  margin-left: 110px;
}
/* секция слайдер рекомендаций новинок распродажи */
.recommend {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}
.recommend-head {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}
.recommend-stock-badge {
  position: absolute;
  top: 1490px;
  left: 220px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}
.recommend-tab {
  background: none;
  border: none;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  color: #B0B0B0;
  cursor: pointer;
  padding: 0;
}
.recommend-tab.active {
  color: #333;
}

.recommend-wrap {
  position: relative;
}
.recommend-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
/* прячем скроллбар */
.recommend-track::-webkit-scrollbar { display: none; }

.rec-card {
  position: relative;
  flex: 0 0 240px;

  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.rec-discount {
  position: absolute;
  top: 12px;
  left: 200px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}
.rec-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
.rec-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.rec-name {
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px;
}
.rec-desc {
  font-family: Inter;
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  margin: 0 0 12px;
  flex: 1;
}
.rec-prices {
  margin-bottom: 12px;
}
.rec-price {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.rec-price2 {
  font-family: Inter;
  font-size: 13px;
  color: #888;
  margin: 2px 0 0;
}
.rec-cart-btn {
  background: #ffffff;
  border: #7F9D87 1px solid;
  color: #7F9D87;
  border-radius: 6px;
  padding: 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.rec-cart-btn:hover {
  background: #7F9D87;
  color: #fff;
}

/* стрелка */
.recommend-arrow {
  position: absolute;
  top: 50%;
  transform:translateY(-50%) ;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background: #BBD0C1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  font-size: 50px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recommend-arrow.right { right: -20px; }
.recommend-arrow.left  { left: -20px; }
/* отзывы покупателей */
/* переделано в переиспользуемый компонент */
</style>
