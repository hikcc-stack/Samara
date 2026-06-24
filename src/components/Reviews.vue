<script setup>
import revData from "@/data/reviews.json";

const reviews = revData.items
const reviewsCount = revData.count

</script>
<template>
  <section class="reviews">
    <div class="reviews-head">
      <h2 class="reviews-title">Отзывы покупателей</h2>
      <span class="reviews-count">{{ reviewsCount }}</span>
      <a class="reviews-all" @click="router.push('/reviews')">Смотреть все отзывы</a>
    </div>
    <div class="reviews-grid">
      <div v-for="(review, i) in reviews" :key="review.name" class="review-card">
        <div class="review-author">
          <p class="review-name">{{ review.name }}</p>
          <div class="review-stars">
          <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= review.rating }"
          >★</span>
          </div>
        </div>
        <p class="review-text">{{ review.text }}</p>
      </div>
    </div>
  </section>
</template>

<style>
.reviews {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}
.reviews-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}
.reviews-title {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.reviews-count {
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  align-self: flex-start;
}
.reviews-all {
  font-family: Inter;
  font-size: 14px;
  color: #7F9D87;
  text-decoration: underline;
  cursor: pointer;
}

.reviews-grid {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 16px;
  gap: 40px;
}
.review-card {
  flex: 0 0 calc((100% - 80px) / 3);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.review-name {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.review-author {
  display: flex;
  align-items: center;
  gap: 8px;
}
.review-stars {
  display: flex;
  gap: 2px;
}
.star {
  font-size: 19px;
  color: #E0E0E0;
}
.star.filled {
  color: #FFB800;
}
.review-text {
  font-family: Inter;
  font-size: 19px;
  color: #1F1F1F;
  line-height: 1.6;
  margin: 0;
}
</style>
