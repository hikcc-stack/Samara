<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import productsData from '../data/products_of_catalog.json'
import AppHeader from '../components/AppHeader.vue'
import Reviews from '@/components/Reviews.vue'
import ShopsPage from '@/components/ShopsPage.vue'
import AdComp from '@/components/AdComp.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const router = useRouter()

// загружаем все картинки товаров из папки потом достаём нужную по имени из json
const productImages = import.meta.glob('../assets/images/recommended-products/*.svg', 
{ 
    eager: true, import: 'default' 
})
const productImg = (name) => productImages[`../assets/images/recommended-products/${name}`]

const products = productsData
// текущий товар тот чей айди совпадает с айди из адреса если не нашёлся то пеервый
const product = computed(() =>
  products.find(p => p.id === Number(route.params.id)) ?? products[0]
)
// похожие товары той же категории но этот товар берём первые 4
const similar = computed(() =>
  products.filter(p => p.topCategory === product.value.topCategory && p.id !== product.value.id).slice(0, 4)
)

// галлеерея
const gallery = computed(() => product.value.images ?? [product.value.img])
// индекс выбранной миниатюры
const activeThumb = ref(0)

// характеристики товара часть значений общая те которые есть в json уже лично на товар
const specs = computed(() => ({
  'Тип': 'газобетонный блок стеновой',
  'Размер': '625 × 400 × 250 мм',
  'Плотность': 'D500',
  'Толщина стены': '40 см',
  'Марка прочности': 'B2.5',
  'Количество в 1 м³': '32 шт',
  'Производитель': product.value.producer,
}))

// текст описания
const description = 'Позволяет строить стены 30 см. Не требует утепления. Идеален для коттеджного строительства до 2 этажей.'
 
const priceMode = ref('cash') // активная вкладка цен наличный или безнал
// три варианта цены первый из json товара остальные образец
const priceOptions = computed(() => [
  { price: product.value.price,
    perM3: product.value.price2, label: 'Цена самовывозом с завода в г. Самара (пгт. Новосёлки)' },
  { price: '789,20 ₽/шт.', perM3: '9 540 ₽/м³', label: 'Самовывозом с базы в Самаре или доставка по Самаре' },
  { price: '789,20 ₽/шт.', perM3: '9 540 ₽/м³', label: 'Самовывозом с базы г. Самара или доставка по Самаре' },
])
const selectedPrice = ref(0) // индекс выбранного варианта цены 

const qty = ref(1)// количество товара
</script>

<template>
<AppHeader />
  <section class="product-page">
    <!-- ссылки -->
    <div class="links">
      <span @click="router.push('/')">Главная</span> /
      <span @click="router.push('/catalog')">Строительные материалы</span> /
      <span>{{ product.name }}</span>
    </div>

    <!-- заголовок над галлерекй-->
     <div class="gallery-header">
      <h1>{{ product.name }}</h1>
      <div class="article-row">
        <span class="article">Артикул: {{ product.id }}</span>
        <span class="fav">♡ в избранное</span>
      </div>
    </div>
    <div class="product-top">
     <!-- галерея -->
      <div class="gallery">
        <div class="thumbs">
          <img v-for="(img, i) in gallery" :key="i" :src="productImg(img)"
               class="thumb" :class="{ active: i === activeThumb }" @click="activeThumb = i">
        </div>
        <div class="main-image">
          <img :src="productImg(gallery[activeThumb])" :alt="product.name">
        </div>
      </div>


      <!-- информация о товаре -->
      <div class="product-info">
         <div class="price-tabs">
          <button :class="{ active: priceMode === 'cash' }" @click="priceMode = 'cash'">Цены за наличный расчёт</button>
          <button :class="{ active: priceMode === 'card' }" @click="priceMode = 'card'">Цены за безнал</button>
        </div>
        <div class="price-options">
          <label v-for="(opt, i) in priceOptions" :key="i" class="price-option" :class="{ active: i === selectedPrice }">
            <input type="radio" name="price" :value="i" v-model="selectedPrice">
            <span class="po-price">{{ opt.price }}</span>
            <span class="po-perm3">{{ opt.perM3 }}</span>
            <span class="po-label">{{ opt.label }}</span>
          </label>
        </div>

        <div class="actions">
          <button class="add-cart">Добавить в корзину</button>
          <div class="qty">
            <button @click="qty = Math.max(1, qty - 1)">−</button>
            <span>{{ qty }}</span>
            <button @click="qty++">+</button>
          </div>
          <span class="qty-unit">ед.</span>
        </div>
        <div class="actions-secondary">
          <button class="link-btn">Купить в 1 клик</button>
          <button class="link-btn">Нужна консультация</button>
          <button class="link-btn">Рассчитать количество</button>
        </div>

        <div class="order-block">
          <p class="order-title">Сделать заказ —</p>
          <p class="order-phone">8 (800) 600-34-35 <span>(бесплатный звонок по всей России)</span></p>
          <p class="order-sub">8 (846) 215-15-15 (магазин на Садовой, 199)</p>
          <div class="order-links">
            <a>Показать контакты</a>
            <a><span>Заказать обратный звонок</span></a>
          </div>
        </div>
      </div>
    </div>

    <!-- описание и характеристики -->
     <div class="product-bottom">
      <section class="desc-col">
        <h2>Описание</h2>
        <p class="desc-text">{{ description }}</p>

        <div class="specs">
          <div v-for="(value, key) in specs" :key="key" class="spec-row">
            <span class="spec-key">{{ key }}:</span>
            <span class="spec-dots"></span>
            <span class="spec-val">{{ value }}</span>
          </div>
        </div>

        <h2 class="delivery-title">Доставка и оплата</h2>
        <p class="delivery-text">
          Можем предложить доставку по Самаре и Самарской области или самовывоз из магазинов —
          <a>смотреть подробнее</a>
        </p>
      </section>


    <!-- похожие товары -->
    <section class="similar">
        <h2>Похожие товары</h2>
        <div class="similar-list">
          <div v-for="p in similar" :key="p.id" class="similar-card" @click="router.push('/product/' + p.id)">
            <img :src="productImg(p.img)" :alt="p.name">
            <p class="similar-name">{{ p.name }}</p>
            <p class="similar-desc">{{ p.desc }}</p>
            <p class="similar-price">
              {{ p.price }}
              <span v-if="p.oldprice" class="similar-old">{{ p.oldprice }}</span>
            </p>
            <p v-if="p.price2" class="similar-price2">{{ p.price2 }}</p>
          </div>
        </div>
        </section>
    </div>
</section>

  <Reviews />
  <ShopsPage />
  <AdComp />
  <Map />
  <Footer />
</template>

<style scoped>
.product-page {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}
.links{
  font-family: Inter;
  font-size: 13px;
  color: #888;
  margin-bottom: 24px;
  text-decoration: underline;
}
.links span {
  cursor: pointer;
}
.links span:hover {
  color: #7F9D87;
}

/* верх: галерея + инфо */
.product-top {
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 48px;
  margin-bottom: 56px;
}
.gallery {
  display: flex;
  gap: 12px;
}
.thumbs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.thumb {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  cursor: pointer;
}
.thumb.active {
  border-color: #7F9D87;
}
.main-image {
  position: relative;
  flex: 1;
}
.main-image img {
  width: 100%;
  border: 1px solid #eee;
  border-radius: 8px;
}

/* информация о товаре */
.gallery-header h1 {
  font-family: Montserrat;
  font-size: 46px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 6px;
}
.gallery-header {
  margin-bottom: 28px;
}
.article-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}
.article {
  font-family: Inter;
  font-size: 13px;
  background-color: #f5f6f7;
  color: #1F1F1F;
  padding: 15px 6px;
  border-radius: 15px;
}
.fav {
  font-family: Inter;
  font-size: 14px;
  color: #7F9D87;
  cursor: pointer;
  text-decoration: underline;
}

/* вкладки и варианты цен */
.price-tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}
.price-tabs button {
  text-decoration: underline #55535c;
  border-radius: 15px;
  border: none;
  font-family: Inter;
  font-size: 14px;
  color: #55535c;
  cursor: pointer;
  padding: 0 0 6px;
}
.price-tabs button.active {
  padding: 10px 10px;
  color: #55535c;
  font-weight: 700;
  background: #f5f6f7;
}
.price-options {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.price-option {
  flex: 1;
  display: grid;
  grid-template-columns:auto auto;
  column-gap: 8px;
  align-items: baseline;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
}

.price-option input {
  width: 20px;
  grid-column:1;
  grid-row: 3 ;
  margin-left: -4px;
  accent-color: #7F9D87;
}
.po-price {
  grid-row: 1;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  color: #1F1F1F;
}
.po-perm3 {
  grid-column: 1;
  grid-row: 2;
  font-family: Montserrat;
  font-size: 24px;
  color: #8B8B8B;
}
.po-label {

  grid-column: 1;
  grid-row:3 ;
  font-family: Montserrat;
  font-size: 15px;
  color: #586067;
  line-height: 1.3;
  margin-top: 4px;
  margin-left: 20px;
}

/* кнопки действий */
.actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}
.add-cart {
  background: #7F9D87;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 20px 12px 20px 13px ;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}
.qty {
  font-family: Inter;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #D7D7D7;
  border-radius: 3px;
  padding: 10px 10px;
}
.qty button {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}
.qty-unit {
  font-family: Inter;
  font-size: 14px;
  color: #888;
}
.actions-secondary {
  display: flex;
  gap: 9px;
  margin-bottom: 28px;
}
.link-btn {
  background: #fff;
  border: 1px solid #7F9D87;
  border-radius: 6px;
  padding: 8px 20px 9px 20px;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #7F9D87;
  cursor: pointer;
}
/* блок "Сделать заказ" */
.order-block {
  border-top: 1px solid #eee;
  padding-top: 16px;
}
.order-title {
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px;
}
.order-phone {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0 0 4px;
}
.order-phone span {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  color: #888;
}
.order-sub {
  font-family: Inter;
  font-size: 13px;
  color: #586067;
  margin: 0 0 8px;
}
.order-links {
  display: flex;
  gap: 24px;
}
.order-links a {
  font-family: Inter;
  font-size: 13px;
  color: #7F9D87;
  text-decoration: underline;
  cursor: pointer;
}
.order-links span {
  color: #49A9EF;
  text-decoration: underline #49A9EF;
}
/* низ: описание + похожие */
.product-bottom {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  margin-bottom: 48px;
}
.desc-col h2 {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px;
}
.desc-text {
  font-family: Inter;
  font-size: 18px;
  color: #1F1F1F;
  line-height: 1.6;
  margin: 0 0 16px;
}
.specs {
  margin: 0 0 32px;
}
.spec-row {
  display: flex;
  align-items: baseline;
  padding: 7px 0;
}
.spec-key {
  font-family: Inter;
  font-size: 17px;
  color: #1F1F1F;
  font-weight: 400;
  flex-shrink: 0;
}
.spec-dots {
  flex: 1;
  margin: 0 6px;
  border-bottom: 1px dotted #CCC;
  transform: translateY(-3px);
}
.spec-val {
  font-family: Inter;
  font-size: 17px;
  color: #1F1F1F;
  font-weight: 400;
  flex-shrink: 0;
  max-width: 320px;
}
.delivery-title {
  margin-top: 8px;
}
.delivery-text {
  font-family: Inter;
  font-size: 14px;
  color: #586067;
}
.delivery-text a {
  color: #7F9D87;
  text-decoration: underline;
  cursor: pointer;
}

/* похожие товары */
.similar-list {

  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}
.similar-card {
  cursor: pointer;
}
.similar h2 {
  margin-top: 0;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 26px;
}
.similar-card img {
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 8px;
}
.similar-name {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  color: #1F1F1F;
  margin: 0 0 6px;
  line-height: 1.3;
}
.similar-desc {
  font-family: Inter;
  font-size: 16px;
  color: #606060;
  line-height: 1.4;
  margin: 0 0 8px;
}
.similar-price {
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 700;
  color: #1F1F1F;
  margin: 0;
}
.similar-old {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  color: #8B8B8B;
  text-decoration: line-through;
  margin-left: 6px;
}
.similar-price2 {
  font-family: Inter;
  font-size: 13px;
  color: #888;
  margin: 2px 0 0;
}
</style>
