<script>
import { useRouter } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import ShopsPage from "@/components/ShopsPage.vue";
import Reviews from "@/components/Reviews.vue";
import AdComp from "@/components/AdComp.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import {defineComponent} from "vue";

const router =useRouter()

// логика калькулятора
export default defineComponent({
  components: { Footer, Map, AdComp, Reviews, ShopsPage, AppHeader },
  data() {
    return {
      objects: 1,
      sqm: 250,
      pricePerSqm: 1500,
      discountPct: 25,
    }
  },
  computed: {
    total() {
      return this.objects * this.sqm * this.pricePerSqm
    },
    profit() {
      return Math.round(this.total * this.discountPct / 100)
    }
  }
})
</script>

<template>
  <AppHeader/>
  <section class="dealer-hero">
    <div class="dealer-hero-content" >
      <div class="deeler-left">
        <h1>Приглашаем дилеров!</h1>
        <p class="dealer-main-text">
          Отделочный камень White Hills - это популярный, кчественный и <br>
          изысканный продукт, который станет настоящим украшением любого<br>
          дома.
        </p>
        <p class="dealer-main-text">
          Мы являемся официальным дистрибьютором в Самаре и Самарской <br>
          области и предлагаем экслюзивные условия сотрудничества.<br>
          Предлагайте наш отеделочный камень своим клиентам и <br>
          зарабатывайте вместе с нами!
        </p>
        <div class="deeler-actions">
          <button class="catdlog-btn" @click="router.push('/catalog')">Смотреть каталог →</button>
          <button class="deller-btn" @click="router.push('/')">Хочу стать диллером</button>
          <a href="#" class="dellers-entrance">вход для диллеров</a>
        </div>
      </div>
      <div class="deeler-right">
        <div class="dealer-рimg">
          <img src="../assets/images/man.svg" alt="дилер">
        </div>
      </div>
    </div>
  </section>
      <section class="dealer-pluses-section">
      <div class="deleers-pluses">
        <div class="dealer-pluses">
          <div class="dealer-plus">
            <span class="ds-num">Диллерская скидка 25%</span>
            <img src="../assets/images/plus1.svg">
            <span class="ds-label">Оптовые цены на отделочный камень</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
          <div class="dealer-plus">
            <span class="ds-num">Склад с наличием продукции в Самаре</span>
            <img src="../assets/images/plus2.svg">
            <span class="ds-label">Самара, ул. Алма-Атинская, 133</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
          <div class="dealer-plus">
            <span class="ds-num">Гарантированный заработок</span>
            <img src="../assets/images/plus3.svg">
            <span class="ds-label">Работа только через дилерскую сеть со стоп-ценами</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
          <div class="dealer-plus">
            <span class="ds-num">Высокое качество продукциир</span>
            <img src="../assets/images/plus4.svg">
            <span class="ds-label">Фирменная гарантия на все материалы</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
          <div class="dealer-plus">
            <span class="ds-num">Быстрая доставка</span>
            <img src="../assets/images/plus5.svg">
            <span class="ds-label">Осуществляем доставку по региону</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
          <div class="dealer-plus">
            <span class="ds-num">Профессиональная поддержка</span>
            <img src="../assets/images/plus6.svg">
            <span class="ds-label">Бесплатные планшеты с образцами, персональный менеджер, личный кабинет дилера</span>
            <a class="link" href="#">узнать подробнее</a>
          </div>
        </div>
      </div>
      </section>

  <!-- калькулятор -->
  <section class="calculator">
    <div class="calculator-text">
      <h2>Сколько можно заработать с 1 заказа?</h2>
      <p class="calc-text">
        Вот смотрите, для отделки например, фасада дома <br>
        требуется в среднем 250 квадратных метров<br>
        искусственного камня, для интерьера квартиры<br>
        обычно около 50 квадратных метров.
      </p>
      <p class="calc-text">
        Средняя стоимость обличовочного камня для  <br>
        клиента 1500 руб./м2, ваша скидка 25%, таким <br>
        образом с одного коттеджа вы можете заработать<br>
        <span class="bold">93750</span> руб., а с квартиры - <span class="bold"> 18750 руб.</span>
      </p>
      <p class="calc-text">
        Вы можете ввести свои данные по требуемому  <br>
        метражу в калькулятор и посчитаете свою выгоду!
      </p>
    </div>
    <div class="calculator-counting">
      <div class="calc-row">
        <div class="calc-cell">
          <input type="number" v-model.number="objects" min="1">
          <label>объект</label>
        </div>
        <span class="calc-x">×</span>
        <div class="calc-cell">
          <input type="number" v-model.number="sqm" min="1">
          <label>м2</label>
        </div>
        <span class="calc-x">×</span>
        <div class="calc-cell">
          <input type="number" v-model.number="pricePerSqm" min="1">
          <label>средняя цена за м2</label>
        </div>
        <span class="calc-eq">=</span>
        <span class="calc-total">{{ total.toLocaleString('ru-RU') }}р.</span>
      </div>

      <div class="calc-row2">
        <div class="calc-cell">
          <input type="number" v-model.number="discountPct" min="0" max="100">
          <label>ваша скидка</label>
        </div>
        <span class="calc-spacer"></span>
        <span class="calc-label-right">ваш заработок</span>
        <span class="calc-eq">=</span>
        <span class="calc-total calc-total-accent">{{ profit.toLocaleString('ru-RU') }}р.</span>
      </div>

      <div class="calc-row calc-row-end">
        <button class="calc-btn">Начать зарабатывать!</button>
      </div>
    </div>
  </section>

  <!-- направления -->
  <section class="directions">
    <h2>Мы успешно сотрудничаем с —</h2>
    <div class="dir-list">
      <div class="dir-card">
        <div class="dir-img">
          <img src="../assets/images/dir1.svg">
        </div>
        <div class="dir-body">
          <h3>Дизайнерами интерьеров</h3>
          <p>Камень WhiteHills применяется в отделке интерьеров, он экологичен, безопасен,<br>
            имеет широкую гамму цветов и оттенков. Идеально подходит для оформления стен,<br>
            колонн, каминов и др.</p>
          <button class="dir-btn">Оставить заявку</button>
        </div>
      </div>
      <div class="dir-card dir-card--rev">
        <div class="dir-img">
          <img src="../assets/images/dir2.svg">
        </div>
        <div class="dir-body">
          <h3>Архитекторами</h3>
          <p>Продукция White Hills имитирует фактуру природного материала, при этом она легче<br>
            натурального камня, проще в использовании и подходит для решения любой<br>
            архитектурной задачи.</p>
          <button class="dir-btn">Оставить заявку</button>
        </div>
      </div>
      <div class="dir-card">
        <div class="dir-img">
          <img src="../assets/images/dir3.svg">
        </div>
        <div class="dir-body">
          <h3>Строительными компаниями и магазинами</h3>
          <p>Искусственный облицовочный камень White Hills имеет высокое качество. <br>
            Соблюдение норм и правил монтажа декоративного камня гарантирует долгосрочную<br>
            эксплуатацию облицовочных материалов White Hills в течение многих десятилетий.</p>
          <button class="dir-btn">Оставить заявку</button>
        </div>
      </div>
    </div>
  </section>

  <!-- как стать дилером -->
  <section class="become-dealer">
    <h2>Как стать дилером —</h2>
    <div class="bd-top">
      <div class="bd-container">
        <p class="bd-manager">Менеджер Денис Конюхов</p>
        <p class="bd-manager-desc">Пишите и звоните нам, ответим на любой вопрос, подскажем по условиям работы, наличию продукции на складе, доставке и т.п.</p>
      </div>
      <div class="bd-container">
        <p class="bd-container-title">Напишите нам</p>
        <div class="bd-socials">
          <img src="../assets/images/viber.svg" alt="viber">
          <img src="../assets/images/whatsapp.svg" alt="whatsapp">
          <img src="../assets/images/tg.svg" alt="telegram">
        </div>
        <a class="bd-email">Email: konyukhov@samara777.ru</a>
      </div>
      <div class="bd-container">
        <p class="bd-container-title">Позвоните</p>
        <a class="bd-phone-green">+7 (927) 297-44-77</a>
        <span class="bd-phone-label">(мобильный)</span>
        <a class="bd-phone-green">+7 (846) 215-00-15</a>
        <span class="bd-phone-label">(городской)</span>
      </div>
      <div class="bd-container">
        <p class="bd-container-title">Приезжайте</p>
        <p class="bd-address">г. Самара, ул. Садовая, дом 199, офис 8 (вывеска "Мир кирпича")</p>
      </div>
    </div>
    <div class="bd-form-container">
      <p class="bd-form-title">Или заполните форму</p>
      <div class="bd-form">
        <input class="bd-input" placeholder="Имя">
        <input class="bd-input" placeholder="Телефон *">
        <textarea class="bd-input bd-textarea" placeholder="Расскажите о вас или вашем бизнесе"></textarea>
        <div class="bd-form-bottom">
          <label class="bd-agree">
            <input type="checkbox" checked>
            <span>отправляя данные я даю согласие на обработку персональной информации согласно <a href="#">политике конфиденциальности</a> данного сайта</span>
          </label>
          <button class="bd-submit">Отправить</button>
        </div>
      </div>
    </div>
  </section>

  <!-- видео -->
  <section class="videos">
    <h2>Видео по отделочному камню —</h2>
    <div class="video-list">
      <div class="video-card">
        <div class="video-thumb">
          <img src="../assets/images/video1.svg" alt="видео">
          <img src="../assets/images/video1.svg" alt="видео">
          <img src="../assets/images/group-videos.svg" alt="видео">
        </div>
      </div>
    </div>
  </section>

  <section class="faq">
  <div class="faqAll">
    <div class="faq-container">
      <h1 class="faq-title">Ответы на популярные вопросы</h1>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Какие сроки поставок декоративных материалов White Hills? </span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Сроки поставок зависят от количества поставляемой партии, объема заказа и могут варьироваться от 7 - 10 дней до двух недель. </p>
        </div>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Возможна ли укладка искусственного камня в зимний период?р</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Возможна ли укладка искусственного камня в зимний период?</p>
        </div>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Можно ли использовать искусственный камень для бассейна? </span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Можно ли использовать искусственный камень для бассейна? </p>
        </div>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Возможна ли укладка искусственного камня в зимний период?</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Возможна ли укладка искусственного камня в зимний период?</p>
        </div>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Возможна ли укладка искусственного камня в зимний период?</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Возможна ли укладка искусственного камня в зимний период?</p>
        </div>
      </details>

      <details class="faq-item">
        <summary class="faq-question">
          <span>Возможна ли укладка искусственного камня в зимний период?</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </summary>
        <div class="faq-answer">
          <p>Возможна ли укладка искусственного камня в зимний период?</p>
        </div>
      </details>
    </div>
  </div>
  </section>
  <section class="opt-price">
    <div class="opt-price-left">
      <h1>Получите оптовые цены</h1>
      <p>Сообщите вам номер телефона и получите<br>
      специальные усдовия партнерства для оптовых<br>
      клиентов ООО "Союз" и бренда White Hills</p>
      <form>
        <label>Ваш номер для связи</label>
        <input type="number" placeholder="+7">
        <button class="opt-price-btn">Получить партнерские условия</button>
      </form>
      <p class="opt-price-mini">Нажимая на кнопку, вы даете согласие на обработку своих<br>
        персональных данных и соглашаетесь с Политикой<br>
        конфиденциальности</p>
    </div>
    <div class="opt-price-right">
      <img src="../assets/images/opt-price.svg"/>
    </div>
  </section>
  <ShopsPage/>
  <Reviews/>
  <AdComp/>
  <Map/>
  <Footer/>
</template>

<style>
* {
  box-sizing: border-box;
}
section {
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}

/* первая секциям */
.dealer-hero {
  margin-top: 0;
}
.dealer-hero-content {
  display: grid;
  gap: 40px;
  align-items: start;
  max-width: 1660px;
  margin-top: 0;
}
.deeler-left{
  grid-column: 1;
}
.deeler-right{
  grid-column: 2;
}
.dealer-hero-content h1 {

  font-family: Montserrat, sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px;

}
.dealer-main-text {
  white-space: nowrap;
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: #1F1F1F;
  line-height: 1.6;
  margin: 0 0 12px;

}

.catdlog-btn {

  background: #6666AB;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 15px   32px  15px 32px;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

}
.catdlog-btn:hover {
  background: #6677AA;
}
.deller-btn {

  background: #F6F8FB;
  border: none;
  color: #071d37;
  border-radius: 8px;
  padding: 15px   32px  15px 32px;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

}
.dellers-entrance {

  font-family: Inter, sans-serif;
  font-size: 15px;
  color: #6F90D1;
  text-decoration: underline;
  cursor: pointer;

}
.deeler-actions button{
  margin-right: 14px;
}
.dealer-рimg img {
  grid-column: 1;

}

/* плюсы дилера — 6 колонок */
.dealer-hero {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}

.dealer-pluses-section {
  width: 100%;
  border-top: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  padding: 32px;
  max-width: 1660px;
  margin: 0 auto;
}

.dealer-pluses {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}

.dealer-plus {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.ds-num {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1F1F1F;
  line-height: 1.3;
  min-height: 40px;
}

.dealer-plus img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  padding: 12px;
}

.ds-label {
  font-family: Inter, sans-serif;
  font-size: 18px;
  color: #1F1F1F;
  line-height: 1.4;
}

.link {
  font-family: Inter, sans-serif;
  font-size: 15px;
  color: #6F90D1;
  text-decoration: underline;
  cursor: pointer;
}
/* калькулятор */
.calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}
.calculator h2 {
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px;
}
.calc-text {
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #586067;
  line-height: 1.6;
  margin: 0 0 14px;
}
.bold { font-weight: 700; color: #333; }

.calculator-counting {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.calc-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.calc-row-end {
  justify-content: flex-end;
}
.calc-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}
.calc-cell input {
  width: 68px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 10px;
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  outline: none;
  background: #fff;
}
.calc-cell label {
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #888;
  white-space: nowrap;
}
.calc-x {
  font-size: 16px;
  color: #aaa;
  flex-shrink: 0;
}
.calc-spacer { flex: 1; }
.calc-eq {
  font-size: 18px;
  color: #333;
  flex-shrink: 0;
}
.calc-label-right {
  font-family: Inter, sans-serif;
  font-size: 13px;
  color: #888;
  white-space: nowrap;
}
.calc-total {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
}
.calc-total-accent { color: #FC6904; }
.calc-btn {
  background: #7F9D87;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 24px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.calc-btn:hover { background: #6b8a74; }
/*направления*/
.directions {
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}
.directions h2 {
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 28px;
}
.dir-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dir-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  border-radius: 12px;
  overflow: hidden;
  background-color: #F9F9F9;
}
.dir-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.dir-body {
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}
.dir-body h3 {
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.dir-body p {
  font-family: Inter, sans-serif;
  font-size: 18px;
  color: #1F1F1F;
  line-height: 1.6;
  margin: 0;
}
.dir-btn {
  align-self: flex-start;
  background: #89A386;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 15px 32px  15px 32px;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
}

/*как стать дилером */
.become-dealer {
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}
.become-dealer h2 {
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 28px;
}
.bd-top {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 36px;
}
.bd-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bd-manager {
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #586067;
  margin: 0;
}
.bd-manager-desc {
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #606060;
  line-height: 1.5;
  margin: 0;
}
.bd-container-title {
  font-family: Inter, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #606060;
  margin: 0;
}
.bd-socials {
  display: flex;
  gap: 8px;
  margin: 4px 0;
}
.bd-socials img { width: 36px; height: 36px; cursor: pointer; }
.bd-email {
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #6F90D1;
  text-decoration: underline;
  cursor: pointer;
}
.bd-phone-green {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #6F90D1;
  cursor: pointer;
  display: block;
}
.bd-phone-label {
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #606060;
  display: block;
  margin-bottom: 6px;
}
.bd-address {
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #606060;
  line-height: 1.5;
  margin: 0;
}
.bd-form-title {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #586067;
  margin: 0 0 16px;
}
.bd-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;
}
.bd-input {
  border: none;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 13px 16px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  outline: none;
  width: 100%;
}
.bd-textarea { height: 100px; resize: none; }
.bd-form-bottom {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 4px;
}
.bd-agree {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #888;
  flex: 1;
}
.bd-agree input { accent-color: #7F9D87; flex-shrink: 0; margin-top: 2px; }
.bd-agree a { color: #7F9D87; }
.bd-submit {
  background: #7F9D87;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 28px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

/* видео  */
.videos {
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}
.videos h2 {
  font-family: Montserrat, sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #333;
  margin: 0 0 24px;
}

.video-thumb {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.video-thumb img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 16/9;
  display: block;
}

.video-thumb img:nth-child(3) {
  grid-column: 1 / -1;
  aspect-ratio: auto;
  border-radius: 0;
}
/*оптовые цены */
.opt-price {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 56px;
  align-items: center;
  max-width: 1660px;
  margin: 0 auto;
  padding: 48px 32px;
}
.opt-price-left h1 {
  font-family: Montserrat, sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #000000;
  margin: 0 0 16px;
  line-height: 1.2;
}
.opt-price-left p {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight:400 ;
  color: #586067;
  line-height: 1.6;
  margin: 0 0 24px;
}
.opt-price-left form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 340px;
  border:none;

}
.opt-price-left label {
  font-family: Inter, sans-serif;
  font-size: 13px;
  color: #888;
}
.opt-price-left input {
  border-bottom: 1px solid #E0E0E0;
  border-top:none;
  border-right: none;
  border-left: none;
  border-radius: 8px;
  padding: 13px 16px;
  font-family: Inter, sans-serif;
  font-size: 15px;
  outline: none;
  width: 100%;
}
.opt-price-btn {
  background: #6c6cbf;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 32px 25px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.opt-price-btn:hover { background: #5a5aaa; }
.opt-price-mini {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #808688;
  margin: 4px 0 0;
}
.opt-price-right img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}
.faqAll{
  padding-top: 40px;
  padding-bottom: 40px;
}
.faq-container {
  max-width: 70%;
  margin: 0 auto;
  padding: 50px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-title {
  font-family: Montserrat, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 32px;
  text-align: center;
}
.faq span{
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}
.faq-item {

  padding: 0 20px;
  background-color: #F6F6F6;
  border-radius: 10px;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  font-size: 16px;
  font-weight: 500;
  color: #1a1a2e;
  cursor: pointer;
  list-style: none;
  user-select: none;
  line-height: 1.6;
  gap: 20px;
  min-width: 0;
}
.idk {
  padding-top: 20px;
}
.faq-text {
  flex: 1;
  white-space: normal;
  word-wrap: break-word;
  min-width: 0;
}

.faq-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  color: #8b8d92;
  margin-left: 10px;
}

.faq-item[open] .faq-icon {
  transform: rotate(180deg);
  color: #2d7aff;
}

.faq-answer {
  padding-bottom: 20px;
  animation: fadeIn 0.3s ease;
}

.faq-answer p {
  font-family: Inter, sans-serif;
  font-weight: 4000;
  margin: 0;
  font-size: 18px;
  line-height: 1.8;
  color: #000000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
