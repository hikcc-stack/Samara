<script setup>

import AppHeader from "@/components/AppHeader.vue";
import Reviews from "@/components/Reviews.vue";
import ShopsPage from "@/components/ShopsPage.vue";
import AdComp from "@/components/AdComp.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <AppHeader/>
  <!-- контакты -->
  <section class="employees">
    <h2 class="employees-title">Наши сотрудники</h2>
    <p class="employees-intro">
      Отделочный камень White Hills - это популярный, качественный и изысканный продукт, который станет настоящим украшением любого дома.
    </p>
    <p class="employees-intro">
      Мы являемся официальным дистрибьютором в Самаре и Самарской области и предлагаем эксклюзивные условия сотрудничества. Предлагайте наш отделочный камень своим клиентам и зарабатывайте вместе с нами!
    </p>

    <div class="employees-grid">
      <!-- 1 -->
      <div class="employee-card">
        <img src="../assets/images/employees/AlexErmoshkin.svg" alt="Александр Ермошкин" class="employee-photo">
        <p class="employee-name">Александр Ермошкин</p>
        <p class="employee-role">менеджер по продажам</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>Офис на ТЦ Амбар</p>
        </div>
      </div>

      <!-- 2 -->
      <div class="employee-card">
        <img src="../assets/images/employees/VladTimofeev.svg" alt="Влад Тимофеев" class="employee-photo">
        <p class="employee-name">Влад Тимофеев</p>
        <p class="employee-role">коммерческий директор</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>База в Преображенке</p>
        </div>
      </div>

      <!-- 3 -->
      <div class="employee-card">
        <img src="../assets/images/employees/DenisBlesnov.svg" alt="Денис Блеснов" class="employee-photo">
        <p class="employee-name">Денис Блеснов</p>
        <p class="employee-role">менеджер по продажам</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>База на Алма-Атинской</p>
        </div>
      </div>

      <!-- 4 -->
      <div class="employee-card">
        <img src="../assets/images/employees/DenisKonuhov.svg" alt="Денис Конюхов" class="employee-photo">
        <p class="employee-name">Денис Конюхов</p>
        <p class="employee-role">менеджер по продажам</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>База на Алма-Атинской</p>
        </div>
      </div>

      <!-- 5 -->
      <div class="employee-card">
        <img src="../assets/images/employees/IvanShuvaev.svg" alt="Иван Шуваев" class="employee-photo">
        <p class="employee-name">Иван Шуваев</p>
        <p class="employee-role">менеджер по продажам</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>Офис на Садовой</p>
        </div>
      </div>

      <!-- 6 -->
      <div class="employee-card">
        <img src="../assets/images/employees/OlegZadiraiko.svg" alt="Олег Задирайко" class="employee-photo">
        <p class="employee-name">Олег Задирайко</p>
        <p class="employee-role">менеджер по продажам</p>
        <div class="employee-location">
          <img src="../assets/images/pin.svg" alt="pin" class="employee-pin">
          <p>База в Преображенке</p>
        </div>
      </div>
    </div>
  </section>
  <Reviews/>
  <ShopsPage/>
  <AdComp/>
  <Map/>
  <Footer/>
</template>

<style>
/* наши сотрудники */
.employees {
  max-width: 1660px;
  margin: 0 auto;
  padding: 50px;
}
.employees-title {
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin: 0 0 24px;
}
.employees-intro {
  font-family: Inter;
  font-size: 22px;
  color: #1F1F1F;
  line-height: 1.6;
  margin: 0 0 16px;
}

/* сетка карточек */
.employees-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 54px;
  margin-top: 32px;
}
.employee-card {
  box-shadow: 0 0 50px 0 rgba(34, 60, 80, 0.3);
  border-radius: 12px;
  padding: 20px;
  height: 352px;
  width: 244px;

}
.employee-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  margin-left: 22px;
}
.employee-name {
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin: 0 22px 4px;
}
.employee-role {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #8B8B8B;
  margin: 0 22px 50px;
}
.employee-location {
  display: flex;
  align-items: center;
  gap: 6px;
}
.employee-pin {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.employee-location p {
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  color: #49A9EF;
  text-decoration: underline;
  margin: 0;
}
</style>
