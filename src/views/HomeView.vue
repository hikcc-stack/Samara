<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <nav>
    <div class="menu">
      <div class="menu-right">
        <div class="job-right">
          <img src="../assets/images/pin.svg" alt="pin">
          <p>Работаем в самаре с 2007 г.</p>
        </div>
        <p @click="router.push('/')">Главная</p>
        <p @click="router.push('/about_company')">О компании</p>
      </div>
      <div class="middle">
        <p @click="router.push('/delivery')">Доставка</p>
        <p @click="router.push('/reviews')">Отзывы</p>
        <p @click="router.push('/how_order')">Как сделать заказ</p>
      </div>
    </div>
  </nav>
</template>
