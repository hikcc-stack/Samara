<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <!-- Магазины в Самаре -->
  <section class="stores">
    <div class="stores-head">
      <h2 class="stores-title">Магазины в Самаре</h2>
      <a class="stores-all" @click="router.push('/contacts')">Все контакты</a>
    </div>

    <div class="stores-grid">
      <!-- карточка 1 -->
      <div class="store-card">
        <div class="store-address">
          <img src="../assets/images/pin.svg" alt="pin" class="store-pin">
          <p>Самара, ул. Садовая, 199</p>
        </div>
        <p class="store-desc">Наш центральный офис с <br>
          выставочным залом,<br>
          (вывеска "Мир кирпича")</p>
        <p class="store-phone">8 (846) 215-15-15</p>
        <p class="store-manager">менеджер Олег</p>
        <div class="store-messengers">
          <a><img src="../assets/images/viber.svg" alt="viber"></a>
          <a><img src="../assets/images/whatsapp.svg" alt="whatsapp"></a>
          <a><img src="../assets/images/tg.svg" alt="telegram"></a>
          <a><img src="../assets/images/email.svg" alt="mail"></a>
        </div>
      </div>

      <!-- карточка 2 -->
      <div class="store-card">
        <div class="store-address">
          <img src="../assets/images/pin.svg" alt="pin" class="store-pin">
          <p>Самара, Южное шоссе, 5К</p>
        </div>
        <p class="store-desc">Наш дополнительный офис с<br>
          выставочным залом, (вывеска<br>
          "Мир кирпича"), павильон находится на парковке ТЦ<br>
          Амбар</p>
        <p class="store-phone">8 (846) 215-15-16</p>
        <p class="store-manager">менеджер Виктор</p>
        <div class="store-messengers">
          <a><img src="../assets/images/viber.svg" alt="viber"></a>
          <a><img src="../assets/images/whatsapp.svg" alt="whatsapp"></a>
          <a><img src="../assets/images/tg.svg" alt="telegram"></a>
          <a><img src="../assets/images/email.svg" alt="mail"></a>
        </div>
      </div>

      <!-- карточка 3 -->
      <div class="store-card">
        <div class="store-address">
          <img src="../assets/images/pin.svg" alt="pin" class="store-pin">
          <p>Самара, ул. Алма-Атинская, 133</p>
        </div>
        <p class="store-desc">Наша торговая база и офис с<br> выставочным залом,<br>
          (вывеска "Мир кирпича")</p>
        <p class="store-phone">8 (846) 215-15-16</p>
        <p class="store-manager">менеджер Виктор</p>
        <div class="store-messengers">
          <a><img src="../assets/images/viber.svg" alt="viber"></a>
          <a><img src="../assets/images/whatsapp.svg" alt="whatsapp"></a>
          <a><img src="../assets/images/tg.svg" alt="telegram"></a>
          <a><img src="../assets/images/email.svg" alt="mail"></a>
        </div>
      </div>

      <!-- карточка 4 -->
      <div class="store-card">
        <div class="store-address">
          <img src="../assets/images/pin.svg" alt="pin" class="store-pin">
          <p>Самарская обл., с.Преображенка</p>
        </div>
        <p class="store-desc">Наша торговая база, Южное<br>
          шоссе, 27<br>
          (вывеска "Мир кирпича")</p>
        <p class="store-phone">8 (846) 215-15-16</p>
        <p class="store-manager">менеджер Виктор</p>
        <div class="store-messengers">
          <a><img src="../assets/images/viber.svg" alt="viber"></a>
          <a><img src="../assets/images/whatsapp.svg" alt="whatsapp"></a>
          <a><img src="../assets/images/tg.svg" alt="telegram"></a>
          <a><img src="../assets/images/email.svg" alt="mail"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* магазины в Самаре */
.stores {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}
.stores-head {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.stores-title {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0;
}
.stores-all {
  margin-top: 10px;
  font-family: Inter;
  font-size: 17px;
  color: #49A9EF;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
}

/* сетка карточек */
.stores-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
.store-card {
  display: flex;
  flex-direction: column;
}

/* адрес с иконкой */
.store-address {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
}
.store-pin {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 3px;
}
.store-address p {
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  color: #586067;
  margin: 0;
}

/* описание */
.store-desc {
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  color: #8B8B8B;
  line-height: 20px;
  margin: 0;
  flex: 1;
}

/* телефон и менеджер */
.store-phone {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 700;
  color: #7F9D87;
  margin: 0;
}
.store-manager {
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #586067;
  margin: 0 0 16px;
}
/* мессенджеры */
.store-messengers {
  display: flex;
  gap: 10px;
}
.store-messengers a {
  cursor: pointer;
}
.store-messengers img {
  width: 32px;
  height: 32px;
}
@media (max-width: 600px) {
  .stores { 
    padding: 16px; 
  }
  .stores-head { 
    flex-direction: column; 
    align-items: flex-start; 
    gap: 8px; 
  }
  .stores-title { 
    font-size: 22px; 
  }
  .stores-grid { 
    grid-template-columns: 1fr; 
    gap: 24px; 
  }
}
</style>
