<script setup>
import { ref } from 'vue'
// описание магазина
// первый абзац описания
const description = `ООО «Союз» – более 12 лет продает строителям и организациям города Самары газобетонные блоки гарантированного качества, сделанный по ГОСТам с соблюдением технологии.`
// второй абзац описания
const descriptionMore = `Основной ассортимент компании: блоки кайман, блоки керакам, недорогой кирпич, лицевой кирпич`

const isDescriptionOpen = ref(false)  //развернуто описание или нет

// переключатель развернутого описания
const unwrapDescription = () => {
  isDescriptionOpen.value = !isDescriptionOpen.value
}
</script>
<template>
  <section class="section-description">
    <div class="description-text">
      <h2>ООО Союз - магазин стройматериалов в Самаре</h2>
      <div class="description">
        <p>{{ description }}</p>
        <p v-if="isDescriptionOpen" class="description">{{ descriptionMore }}</p>
      </div>
      <button class="description-btn" @click="unwrapDescription">
        {{ isDescriptionOpen ? 'Свернуть описание' : 'Развернуть описание'}}
      </button>
    </div>
  </section>
</template>

<style>
.section-description{
  padding-left: 110px;
}
.description {
  max-width: 1660px;
}
.description-text h2 {
  font-family: Montserrat;
  font-size: 32px;
  color: #000000;
}
.description p {
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  color: #586067;
  line-height: 26px;
  text-align: left;
}
.description-btn {
  background: none;
  border: none;
  color: #7F9D87;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}
</style>
