<script setup>
import { ref,onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const catalogOpen = ref(false)   // открыт ли список каталога

// переход в каталог и закрытие списка
const goToCatalog = () => {
  catalogOpen.value = false
  router.push('/catalog')
}
// логика открывания меню с контактами

const contactsOpen = ref(false)
const closeContacts = (e) => {
  if (!e.target.closest('.menu-number-list')) contactsOpen.value = false
}
onMounted(() => document.addEventListener('click', closeContacts))
onUnmounted(() => document.removeEventListener('click', closeContacts))
</script>

<template>
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
          <div class="contacts-trigger" @click="contactsOpen = !contactsOpen">
              <span class="contacts-phone">8(955)888-08-08</span>
              <span class="contacts-arrow"><</span>
            <div class="contacts-dropdown" v-if="contactsOpen">
              <div class="cd-left">
                <p class="cd-addr"><b>Самара, ул. Садовая, 199</b><br>(вывеска "Мир кирпича")</p>
                <a class="cd-link">схема проезда</a>
                <p class="cd-office">
                  Наш центральный офис с выставочным залом
                  <img class="tv" src="../assets/images/tv.svg" alt="">
                </p>
                <p class="cd-main-phone">+7 (846) 215-15-15</p>
                <p class="cd-hours">с 8:00 до 19:00 по Самаре<br>менеджер Виктор</p>
                <div class="icons">
                  <img src="../assets/images/viber.svg" alt="viber">
                  <img src="../assets/images/whatsapp.svg" alt="whatsapp">
                  <img src="../assets/images/tg.svg" alt="telegram">
                  <img src="../assets/images/email.svg" alt="mail">
                </div>
                <a class="cd-email">samara777@samara777.ru</a>
                <p class="cd-worktime">Режим работы: Понедельник-Пятница с 8:00 до 17:00, суббота и воскресенье — по предварительной договорённости</p>
                <img src="../assets/images/photo.svg" alt="">
              </div>
              <div class="cd-right">
                <p class="cd-free">Бесплатный звонок с любого номера</p>
                <p class="cd-big-phone">8 (800) 600-34-35</p>
                <p class="cd-hours">с 8:00 до 19:00 по всей России</p>
                <p class="cd-free">Мобильный телефон в Москве</p>
                <p class="cd-big-phone">+7 (995) 888-08-08</p>
                <p class="cd-hours">с 8:00 до 19:00 по МСК</p>
                <p class="cd-shops-title">Адреса магазинов:</p>
                <ul class="cd-shops">
                  <li>Самара, ул. Садовая, 199 ›</li>
                  <li>Самара, Южное шоссе, 5К ›</li>
                  <li>Самара, ул. Алма-Атинская, 133 ›</li>
                  <li>Самарская обл., с.Преображенка ›</li>
                </ul>
                <button class="cd-callback">Обратный звонок</button>
                <div class="menegers">
                  <p>Наши доброжелательные<br>
                  менеджеры всегда будут рады<br>
                  ответить на Ваш звонок, письмо, <br>
                  или лично проконсультировать Вас<br>
                  в офисах продаж.</p>
                </div>
              </div>
            </div>
          </div>
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
      <button class="catalog-btn" @click="catalogOpen = !catalogOpen">
        <span class="burger">☰</span> Каталог продукции
      </button>
      <ul class="catalog-menu" v-if="catalogOpen">
        <li @click="goToCatalog">Строительные материалы</li>
      </ul>
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
</template>

<style scoped>
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
.menu-number-list {
  position: relative;
}
.contacts-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.contacts-phone {
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 700;
  color: #7F9D87;
  white-space: nowrap;
}
.contacts-arrow {
  font-size: 20px;
  color: #7F9D87;
  transform: rotate(270deg);
  transition: transform 0.2s;
}
.contacts-arrow.open {
  transform: rotate(180deg);
}
.contacts-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,.15);
  display: flex;
  gap: 40px;
  padding: 32px;
  z-index: 200;
  width: 620px;
}
.cd-left, .cd-right {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.cd-addr {
  font-family: Inter;
  font-weight: 700;
  font-size: 18px;
  color: #586067;
  margin: 0;
}
.cd-addr br {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  color: #586067;
}
.cd-link {
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.cd-office {
  display: grid;
  grid-column: 1;
  font-family: Inter;
  font-size: 14px;
  color: #586067;
  font-weight: 400;
  max-width: 280px;
  margin-bottom: 0;
}
.cd-office img {
  display: grid;
  grid-column: 2;
  width: 40px;
  height: 40px;
}
.cd-main-phone {
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 700;
  color: #7F9D87;
  margin-top: 0;
  margin-bottom: 0;
}
.cd-big-phone {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 700;
  color: #7F9D87;
  margin: 2px 0;
}
.cd-hours {
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #586067;
  margin-top: 0;
  margin-bottom: 12px;
}
.icons img {
  width: 32px;
  height: 32px;
}
.cd-free {
  font-family: Inter;
  font-size: 13px;
  color: #333;
  margin: 8px 0 0;
}
.cd-email {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.cd-worktime {
  font-family: Inter;
  font-weight: 400;
  font-size: 15px;
  color: #949597;
  line-height: 1.5;
  margin-top: 8px;
}
.cd-shops-title {
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  color: #586067;
  margin: 8px 0 4px;
}
.cd-shops {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cd-shops li {
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  color: #586067;
  cursor: pointer;
}
.cd-shops li:hover {
  color: #7F9D87;
}
.cd-callback {
  margin-top: 12px;
  border: 1px solid #7F9D87;
  color: #7F9D87;
  background: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-family: Montserrat;
  font-size: 13px;
  cursor: pointer;
  align-self: center;
}
.menegers p {
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  color:#586067;
  text-align: center;
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
  position: relative;
  margin-right: 20px;
}
.catalog-menu {
  position: absolute;
  top: calc(100% + 4px);   
  left: 0;
  z-index: 20;            
  min-width: 262px;        
  margin: 0;
  padding: 8px 0;
  list-style: none;        
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.catalog-menu li {
  padding: 12px 24px;
  font-family: Montserrat;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}
.catalog-menu li:hover {
  background: #f3f3f3;
  color: #7F9D87;
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
</style>
