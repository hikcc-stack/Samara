<script setup>
import { useRouter } from 'vue-router'
import Reviews from "@/components/Reviews.vue";
const router = useRouter()
</script>
<template>
  <!-- блок с рекламой -->
  <section class="ad">
    <div class="ad-grid">
      <!-- лево -->
      <div class="ad-left">
        <!-- консультация -->
        <div class="consult-card">
          <h2 class="consult-title">Консультация — бесплатно</h2>
          <p class="consult-text">
            Обращайтесь к нашим профессиональным менеджерам.
            Мы поможем выбрать лучшие товары для ваших целей, чтобы не
            переплачивать и в то же время получить гарантированное качество.
            Консультация бесплатна и ни к чему вас не обязывает.
          </p>
          <div class="consult-buttons">
            <button class="consult-btn">Задать вопрос специалисту</button>
            <a class="consult-link" @click="router.push('/how_order')">Как сделать заказ на сайте?</a>
          </div>
          <img class="consult-home" src="../assets/images/home.svg" alt="house">
        </div>

        <!-- две карточки снизу -->
        <div class="ad-bottom">
          <!-- отзывы -->
          <div class="reviews-card">
            <div class="reviews-top">
              <img class="reviews-phone" src="../assets/images/phone-reviews.svg" alt="reviews">
              <div class="reviews-links">
                <a>Отзывы в Яндекс</a>
                <a>Отзывы в Гугл</a>
                <a>Отзывы в 2Гис</a>
              </div>
            </div>
            <h3 class="reviews-card-title">Отзывы</h3>
            <p class="reviews-card-text">Более 500 реальных отзывов от покупателей.</p>
          </div>

          <!-- телеграм -->
          <div class="tg-card">
            <div class="tg-head">
              <img class="tg-icon" src="../assets/images/tg.svg" alt="telegram">
              <a class="tg-link">https://t.me/<br>samara777_channel</a>
            </div>
            <h3 class="tg-title">Мы в Телеграме!</h3>
            <p class="tg-text">Новости нашей компании. Звоните и пишите в телеграм, уточним наличие и цены.</p>
            <p class="tg-text">Подписывайтесь на скидки и акции!</p>
          </div>
        </div>
      </div>
      <!-- право -->
      <div class="advantages-card">
        <h2 class="advantages-title">Наши преимущества</h2>

        <div class="advantage">
          <img src="../assets/images/icon-man.svg" alt="">
          <div>
            <p class="advantage-name">Прямые поставки с заводов</p>
            <p class="advantage-desc">Официальное представительство 20 заводов в Самаре</p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/images/stars-icon.svg" alt="">
          <div>
            <p class="advantage-name">Большой опыт работы с 2007 года</p>
            <p class="advantage-desc">Более 1500 коттеджей, 5000+ клиентов за 15 лет</p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/images/finger-icon.svg" alt="">
          <div>
            <p class="advantage-name">Одни из лучших шоу-румов</p>
            <p class="advantage-desc">5000 кв.м. продукции в наличии в разных частях города</p>
          </div>
        </div>
        <div class="advantage">
          <img src="../assets/images/car-icon.svg" alt="">
          <div>
            <p class="advantage-name">Собственный транспорт</p>
            <p class="advantage-desc">В штате нашей фирмы 8 собственных манипуляторов различных размеров</p>
          </div>
        </div>

        <div class="advantages-links">
          <a>О компании</a>
          <a>Условия доставки</a>
          <a>Схема проезда</a>
          <a>Все контакты</a>
        </div>
        <button class="advantages-btn">Напишите нам!</button>
      </div>
    </div>

    <!-- розовый баннер -->
    <div class="pink-banner">
      <div class="pinkbanner-text">
        <h2 class="pinkbanner-title">Правильный выбор стройматериалов!</h2>
        <p class="pinkbanner-desc">
          Не тратьте время на утомительные поиски, обращайтесь к нашим профессиональным продавцам.
          Консультация бесплатна и ни к чему вас не обязывает —
        </p>
      </div>
      <div class="pinkbanner-buttons">
        <button class="pinkbanner-btn">Рассчитать стоимость</button>
        <a class="pinkbanner-link">Калькулятор размеров</a>
      </div>
    </div>
  </section>
</template>

<style>
/* реклама блок */
.ad {
  max-width: 1280px;
  margin: 70px auto;
  padding: 24px;
}
.ad-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}

/* левая колонка */
.ad-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* карточка консультации */
.consult-card {
  position: relative;
  background: #f5f6f7;
  border-radius: 16px;
  padding: 32px;
  overflow: hidden;
}
.consult-title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 20px;
}
.consult-text {
  font-family: Inter;
  font-size: 18px;
  color: #586067;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 0 24px;
}
.consult-buttons {
  display: flex;
  align-items: center;
  gap: 24px;
}
.consult-btn {
  background: #6666AB;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 28px;
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
}
.consult-link {
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.consult-home {
  position: absolute;
  right: 0;
  top: 40px;
  width: auto;
  height: 256px;
}

/* нижние две карточки */
.ad-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.reviews-card,
.tg-card {
  background: #f5f6f7;
  border-radius: 16px;
  padding: 32px;
}

/* карточка отзывов */
.reviews-top {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}
.reviews-phone {
  width: 150px;
  height: 150px;
  position: relative;
  left: -30px;
}
.reviews-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 24px;
}
.reviews-links a {
  font-family: Inter;
  font-size: 17px;
  color: #49A9EF;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
}
.reviews-card-title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px;
}
.reviews-card-text {
  font-family: Inter;
  font-size: 17px;
  color: #586067;
  line-height: 1.5;
  margin: 0;
}
/* карточка телеграма */
.tg-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.tg-icon {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}
.tg-link {
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.tg-title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px;
}
.tg-text {
  font-family: Inter;
  font-weight: 400;
  font-size: 17px;
  color: #586067;
  line-height: 1.5;
  margin: 0 0 12px;
}

/* правая колонка — преимущества */
.advantages-card {
  background: #F7F7F7;
  border-radius: 16px;
  padding: 28px;
}
.advantages-title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 24px;
}
.advantage {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}
.advantage img {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}
.advantage-name {
  font-family: Inter;
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 4px;
}
.advantage-desc {
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  color: #586067;
  line-height: 1.5;
  margin: 0;
}
.advantages-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 24px 0;
}
.advantages-links a {
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
}
.advantages-btn {
  background: #6666AB;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
}

/* розовый баннер */
.pink-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: linear-gradient(90deg, #CF4294 0%, #D73B35 100%);
  border-radius: 16px;
  padding: 40px 48px;
  margin-top: 24px;
}
.pinkbanner-title {
  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}
.pinkbanner-desc {
  font-family: Inter;
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  max-width: 600px;
}
.pinkbanner-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.pinkbanner-btn {
  background: #fff;
  color: #D14078;
  border: none;
  border-radius: 30px;
  padding: 18px 40px;
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
}
.pinkbanner-link {
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
