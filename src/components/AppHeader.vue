<script setup>

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
</style>
