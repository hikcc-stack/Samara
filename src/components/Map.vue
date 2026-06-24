<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <!-- карта -->
  <section class="map">
    <h2 class="map-title">Как добраться —</h2>

    <div class="map-bacground">
      <img class="map-img" src="../assets/images/map.svg" alt="карта">

      <!-- карточка с адресами -->
      <div class="map-cards">
        <div class="map-card">
          <div class="card-addres">
            <img src="../assets/images/pin.svg" alt="pin" class="card-pin">
            <p>Самара, ул. Садовая, 199</p>
          </div>
          <p class="card-time">Пн-Пт: с 8.00 до 19.00</p>
          <p class="card-phone">+7 (846) 215-15-15</p>
        </div>

        <div class="map-card">
          <div class="card-addres">
            <img src="../assets/images/pin.svg" alt="pin" class="card-pin">
            <p>Самара, парковка ТЦ Амбар</p>
          </div>
          <p class="card-time">Пн-Вс: с 8.00 до 19.00</p>
          <p class="card-phone">+7 (846) 215-16-16</p>
        </div>

        <div class="map-card">
          <div class="card-addres">
            <img src="../assets/images/pin.svg" alt="pin" class="card-pin">
            <p>Самара, ул. Алма-Атинская, 133</p>
          </div>
          <p class="card-time">Пн-Вс: с 8.00 до 19.00</p>
          <p class="card-phone">+7 (846) 215-16-16</p>
        </div>

        <div class="map-card">
          <div class="card-addres">
            <img src="../assets/images/pin.svg" alt="pin" class="card-pin">
            <p>Самарская обл., с. Преображенка</p>
          </div>
          <p class="card-time">Пн-Вс: с 8.00 до 19.00</p>
          <p class="card-phone">+7 (846) 215-18-18</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* секция карта */
.map-title {
  max-width: 1660px;
  margin: 0 auto;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  color: #000;
}

.map-bacground {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.map-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* списки адресов */
.map-cards {
  position: absolute;
  top: 110px;
  left: 130px;
  height: 72%;
  width: 340px;
  background: #fff;
  border-radius: 16px;
  padding: 30px 30px;
}
.map-card {
  height: 80px;
  width: 280px;
  margin-bottom: 24px;
}
.map-card:last-child {
  margin-bottom: 0;
}
.card-addres {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.card-pin {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 20px;
}
.card-addres p {
  font-family: Inter;
  font-size: 17px;
  font-weight: 600;
  color: #1F1F1F;
  margin-top: 20px;
}
.card-time{
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  color: #586067;
  padding-left: 24px;
  margin: 0 0 2px;
}
.card-phone {
  font-family: Inter;
  font-size: 16px;
  font-weight:400 ;
  color: #606060;
  padding-left: 24px;
  margin-top: 0;
}
</style>
