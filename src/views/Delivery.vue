<script>
import AppHeader from "@/components/AppHeader.vue";
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
export default defineComponent({
  components: {AppHeader}
})

</script>

<template>
<AppHeader/>
  <section class="delivery">
    <div class="ddelivery-content" >
      <div class="delivery-left">
        <h1>Заказ образца</h1>
        <p class="delivery-main-text">
          Предлагаем новую услугу: доставка образцов товаров к вам на дом <br>
          или на объект.
        </p>
        <p class="delivery-main-text">
          Наш сотрудник возьмет выбранные вами образцы и приедет в <br>
          удобное для вас время, чтобы вы могли примерить образцы “вживую”<br>
          и сделать правильный выбор.
        </p>
        <div class="delivery-actions">
          <button class="catdlog-btn" @click="router.push('/')">Оставить заявку на доставку →</button>
          <button class="delivery-btn" @click="router.push('/catalog')">Каталог продукции</button>
          <a href="#" class="delivery-entrance">вход для диллеров</a>
        </div>
      </div>
      <div class="delivery-right">
        <div class="delivery-img">
          <img src="../assets/images/photo2.svg" alt="дилер">
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
