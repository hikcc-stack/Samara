<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <!-- Подвал -->
  <footer class="footer">
    <div class="footer-top">
      <!-- колонка 1 -->
      <div class="footer-col">
        <a @click="router.push('/')">Главная</a>
        <a @click="router.push('/about_company')">О компании</a>
        <a @click="router.push('/delivery')">Доставка</a>
        <a class="footer-reviews" @click="router.push('/reviews')">
          Отзывы <span class="footer-badge">452</span>
        </a>
        <a @click="router.push('/how_order')">Как сделать заказ</a>
        <a @click="router.push('/contacts')">Контакты</a>
      </div>

      <!-- колонка 2 -->
      <div class="footer-col">
        <a @click="router.push('/catalog')">Строительные материалы</a>
        <a>Наружная отделка</a>
        <a>Кровельные материалы</a>
        <a>Отопительное оборудование</a>
        <a>Внутренняя отделка</a>
        <a>Весь инструмент</a>
        <a>Крепеж и фурнитура</a>
        <a>Электрика и освещение</a>
      </div>

      <!-- колонка 3 -->
      <div class="footer-col">
        <a>Напольные покрытия</a>
        <a>Сантехника</a>
        <a class="footer-reviews">
          Товары для сада и огород <span class="footer-badge">Акция!</span>
        </a>
        <a>Водоснабжение и канализация</a>
        <a>Хозяйственные товары</a>
        <a>Вентиляция и кондиционирование</a>
        <a>Средства индивидуальной защиты</a>
      </div>

      <!-- колонка 4 — телефон -->
      <div class="footer-col footer-phone-col">
        <p class="footer-phone-label">Бесплатный звонок с любого номера</p>
        <p class="footer-phone">8 (800) 600-34-35</p>
        <p class="footer-phone-hours">Пн-Вс: с 8.00 до 19.00</p>
      </div>
    </div>

    <hr class="footer-divider">

    <div class="footer-bottom">
      <div class="footer-copy">
        <p class="footer-company">© 2007-2022 ООО Союз</p>
        <a class="footer-policy">Политика конфиденциальности</a>
        <a class="footer-policy">Условия возврата</a>
      </div>

      <p class="footer-legal">
        Заполняя любую форму обратной связи на данном сайте, вы соглашаетесь с политикой
        конфиденциальности. Также вы можете ознакомиться с правилами возврата товара.
        Сайт не является публичной офертой, информация размещена в ознакомительных целях.
      </p>

      <img class="footer-qr" src="../assets/images/qr.svg" alt="QR-код">
    </div>
  </footer>
</template>

<style scoped>

/* футер */
.footer {
  background: #718E79;
  padding: 40px 110px;
}

/* верхние колонки */
.footer-top {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.4fr 1fr;
  gap: 40px;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer-col a {
  font-family: Inter;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
}
.footer-col a:hover {
  color: #fff;
  text-decoration: underline;
}

/* бейдж в ссылке */
.footer-reviews {
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-badge {
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}

/* колонка с телефоном */
.footer-phone-col {
  text-align: right;
}
.footer-phone-label {
  font-family: Inter;
  font-size: 14px;
  color: #FFFFFF;
  margin: 0 0 8px;
}
.footer-phone {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
}
.footer-phone-hours {
  font-family: Inter;
  font-size: 14px;
  color: #FFFFFF;
  margin: 0;
}

/* разделитель */
.footer-divider {
  border: none;
  border-top: 1px solid #FFFFFF;
  margin: 32px 0;
}

/* нижняя часть */
.footer-bottom {
  display: grid;
  grid-template-columns: 1fr 1.5fr auto;
  gap: 40px;
  align-items: start;
}
.footer-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-company {
  font-family: Inter;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
}
.footer-policy {
  font-family: Inter;
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
}
.footer-legal {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1.6;
  margin: 0;
}
.footer-qr {
  width: 54px;
  height: 54px;
}
</style>
