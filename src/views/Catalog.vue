<script setup>

import AppHeader from "@/components/AppHeader.vue";
import Description from "@/components/Description.vue";

import { ref, computed  } from 'vue'
import { useRouter } from 'vue-router'
import categoryData from '../data/category_of_catalog.json'
import productsData from '../data/products_of_catalog.json'
import Reviews from "@/components/Reviews.vue";
import ShopsPage from "@/components/ShopsPage.vue";
import AdComp from "@/components/AdComp.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter()
//картинки из json для каталога
const prodImages = import.meta.glob('../assets/images/recommended-products/*.svg', {
  eager: true, import: 'default',
})
const prodImg = (name) => prodImages[`../assets/images/recommended-products/${name}`]

// товары
const products = productsData

// состояние сортировки и фильтров
const filters = categoryData.filters
const topCategories = categoryData.topCategory
const productTabs = categoryData.sortByProd
const sortPrice = categoryData.sortByPrice
const sortName = categoryData.sortByName

const sortValue = ref('default')

const activeTopCategory = ref('gazobeton-block')
const activeProductTab = ref('default')
const priceFrom = ref('')
const priceTo = ref('')
const selectedProducers = ref([])
const selectedStructures = ref([])
const selectedWall = ref('Стены без утепления')

const parsePrice = (str) => {
  if (!str) return 0
  const clean = str.replace(/\s/g, '').replace('₽/шт.', '').replace(',', '.')
  return parseFloat(clean) || 0
}

// ШАГ 1 — фильтрация
const filteredProducts = computed(() => {
  return products.filter(prod => {
    const price = parsePrice(prod.price)

    // верхняя категория (Блоки керамические / газобетонные / керамзитобетонные)
    if (prod.topCategory && prod.topCategory !== activeTopCategory.value) return false

    // цена
    if (priceFrom.value && price < Number(priceFrom.value)) return false
    if (priceTo.value && price > Number(priceTo.value)) return false

    // производитель (если что-то выбрано)
    if (selectedProducers.value.length > 0 && !selectedProducers.value.includes(prod.producer)) return false

    // строение (если что-то выбрано)
    if (selectedStructures.value.length > 0 && !selectedStructures.value.includes(prod.structure)) return false

    return true
  })
})

// ШАГ 2 — сортировка отфильтрованного
const visibleProducts = computed(() => {
  const list = [...filteredProducts.value]
  if (sortValue.value === 'price-asc')  return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
  if (sortValue.value === 'price-desc') return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
  if (sortValue.value === 'name-asc')   return list.sort((a, b) => a.name.localeCompare(b.name))
  if (sortValue.value === 'name-desc')  return list.sort((a, b) => b.name.localeCompare(a.name))
  return list
})
// нумерация страниц
const currentPage = ref(1)
const totalPages = 27

// какие товары уже по айди
const addedIds = ref([])
const addToCart = (prod) => {
  if (!addedIds.value.includes(prod.id)) addedIds.value.push(prod.id)
}
</script>

<template>
  <AppHeader/>
  <!-- ссылки -->
  <div class="links">
    <a @click="router.push('/')">Главная </a>
    <a>/ Строительные материалы</a>
  </div>
  <Description/>
  <section class="catalog-page">
    <!-- верхние вкладки категорий -->
    <div class="top-tabs">
      <button
          v-for="cat in topCategories"
          :key="cat.id"
          class="top-tab"
          :class="{ active: cat.id === activeTopCategory }"
          @click="activeTopCategory = cat.id"
      >{{ cat.name }}</button>
    </div>

    <!-- фильтры и товары -->
    <div class="catalog-layout">
      <!-- ФИЛЬТРЫ -->
      <aside class="sidebar">
        <div class="filter-block">
          <h3 class="filter-title">Цена</h3>
          <div class="price-inputs">
            <input type="number" v-model="priceFrom" placeholder="от 0">
            <span>—</span>
            <input type="number" v-model="priceTo" placeholder="до 99 000">
          </div>
          <input type="range" min="0" max="99000" class="price-range">
        </div>

        <div class="filter-block">
          <h3 class="filter-title">Производитель</h3>
          <label v-for="p in filters['Производитель']" :key="p" class="filter-check">
            <input type="checkbox" :value="p" v-model="selectedProducers"> {{ p }}
          </label>
          <button class="filter-more">Развернуть</button>
        </div>

        <div class="filter-block">
          <h3 class="filter-title">Строение</h3>
          <label v-for="s in filters['Строение']" :key="s" class="filter-check">
            <input type="checkbox" :value="s" v-model="selectedStructures"> {{ s }}
          </label>
        </div>

        <div class="filter-block">
          <h3 class="filter-title">Стена</h3>
          <label v-for="w in filters['Стена']" :key="w" class="filter-check">
            <input type="radio" name="wall" :value="w" v-model="selectedWall"> {{ w }}
          </label>
        </div>

        <div class="filter-block">
          <h3 class="filter-title">Плотность</h3>
          <label v-for="d in filters['Плотность']" :key="d" class="filter-check">
            <input type="checkbox" :value="d"> {{ d }}
          </label>
        </div>
      </aside>

      <!-- ТОВАРЫ -->
      <div class="catalog-main">
        <!-- вкладки типа -->
        <div class="type-tabs">
          <button
              v-for="tab in productTabs"
              :key="tab.id"
              class="type-tab"
              :class="{ active: tab.id === activeProductTab }"
              @click="activeProductTab = tab.id"
          >{{ tab.label }}</button>
        </div>

        <!-- сортировка -->
        <div class="sort-bar">
          <span class="sort-label">Сортировать по:</span>
          <select class="sort-select" v-model="sortValue">
            <option v-for="o in sortPrice" :key="o.value" :value="o.value">{{ o.label }}</option>
            <option v-for="o in sortName" :key="o.value" :value="o.value">{{ o.label }}</option>
          </select>
          <button class="sort-btn">Популярности</button>
          <button class="sort-btn">Скидке</button>
        </div>

        <!-- сетка карточек -->
        <div class="catalog-grid">
          <div v-for="(prod, i) in visibleProducts" :key="i" class="cat-card" @click="router.push('/product/' + prod.id)">
            <span v-if="prod.discount" class="cat-discount">{{ prod.discount }}</span>
            <span v-if="prod.badge" class="cat-badge">{{ prod.badge }}</span>
            <img :src="prodImg(prod.img)" :alt="prod.name" class="cat-img">
            <p class="cat-name">{{ prod.name }}</p>
            <p class="cat-desc">{{ prod.desc }}</p>
            <div class="cat-prices">
              <p class="cat-price">
                {{ prod.price }}
                <span v-if="prod.oldprice" class="cat-oldprice">{{ prod.oldprice }}</span>
              </p>
              <p v-if="prod.price2" class="cat-price2">
                {{ prod.price2 }}
                <span v-if="prod.oldprice2" class="cat-oldprice">{{ prod.oldprice2 }}</span>
              </p>
            </div>
            <button class="cat-cart-btn" @click.stop="addToCart(prod)">{{ addedIds.includes(prod.id) ? 'Добавлено' : 'В корзину' }}</button>
          </div>
        </div>
        <p v-if="visibleProducts.length === 0" class="no-results">
          По вашему запросу ничего не найдено
        </p>
        <!-- нумерация страниц -->
        <div class="numeration">
          <span
              v-for="n in 4" :key="n"
              class="nume"
              :class="{ active: n === currentPage }"
              @click="currentPage = n"
          >{{ n }}</span>
          <span class="nume-dots">......</span>
          <span class="nume" @click="currentPage = totalPages">{{ totalPages }}</span>
          <a class="nume-nav" @click="currentPage > 1 && currentPage--">← Предыдущая</a>
          <a class="nume-nav" @click="currentPage < totalPages && currentPage++">Следующая →</a>
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

<style scoped>
.catalog-page {
  max-width: 1660px;
  margin: 0 auto;
  padding: 24px;
}

/* ссылки */
.links {
  cursor: pointer;
  font-family: Inter;
  font-size: 13px;
  color: #888;
  margin: 20px 20px 20px 110px;
}
.breadcrumbs a {
  color: #7F9D87;
  cursor: pointer;
}
.breadcrumbs a:hover { text-decoration: underline; }

/* заголовок */
.catalog-h1 {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  color: #000;
  margin: 0 0 12px;
}
.catalog-desc {
  font-family: Inter;
  font-size: 16px;
  color: #586067;
  line-height: 1.5;
  margin: 0 0 8px;
}
.catalog-desc-btn {
  background: none;
  border: none;
  color: #7F9D87;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
}

/* верхние вкладки */
.top-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.top-tab {
  background: #F7F7F7;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #586067;
  cursor: pointer;
}
.top-tab.active {
  background: #7F9D87;
  color: #fff;
}

/* раскладка */
.catalog-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  align-items: start;
}

/* сайдбар */
.sidebar {
  display: flex;
  flex-direction: column;
}
.filter-block {
  border-bottom: 1px solid #EEEEEE;
  padding: 20px 0;
}
.filter-title {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 16px;
}
.price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.price-inputs input {
  width: 80px;
  height: 36px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 13px;
  outline: none;
}
.price-range {
  width: 100%;
  accent-color: #7F9D87;
}
.filter-check {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter;
  font-size: 14px;
  color: #586067;
  margin-bottom: 12px;
  cursor: pointer;
}
.filter-check input { accent-color: #7F9D87; }
.filter-more {
  background: none;
  border: none;
  color: #7F9D87;
  font-family: Inter;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

/* товары */
.catalog-main { min-width: 0; }

.type-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
.type-tab {
  background: #fff;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
  padding: 8px 18px;
  font-family: Montserrat;
  font-size: 14px;
  color: #586067;
  cursor: pointer;
}
.type-tab.active {
  background: #7F9D87;
  border-color: #7F9D87;
  color: #fff;
}

.sort-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.sort-label {
  font-family: Inter;
  font-size: 14px;
  color: #888;
}
.sort-select,
.sort-btn {
  border: none;
  background: none;
  font-family: Inter;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

/* сетка карточек */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}
.cat-card {
  cursor: pointer;
  position: relative;
  border: 1px solid #EEEEEE;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.cat-discount {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
}
.cat-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #FC6904;
  color: #fff;
  font-family: Inter;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
}
.cat-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.cat-name {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px;
}
.cat-desc {
  font-family: Inter;
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  margin: 0 0 12px;
  flex: 1;
}
.cat-prices {
  margin-bottom: 12px;
}
.cat-price {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.cat-price2 {
  font-family: Inter;
  font-size: 13px;
  color: #888;
  margin: 2px 0 0;
}
.cat-oldprice {
  font-size: 12px;
  color: #BBB;
  text-decoration: line-through;
  margin-left: 6px;
  font-weight: 400;
}
.cat-cart-btn {
  background: #fff;
  border: 1px solid #7F9D87;
  color: #7F9D87;
  border-radius: 6px;
  padding: 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.cat-cart-btn:hover {
  background: #7F9D87;
  color: #fff;
}

/* пагинация */
.numeration {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nume {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-family: Montserrat;
  font-size: 14px;
  color: #586067;
  cursor: pointer;
}
.nume.active {
  background: #7F9D87;
  color: #fff;
}
.nume-dots {
  color: #888;
}
.nume-nav {
  font-family: Inter;
  font-size: 14px;
  color: #7F9D87;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 8px;
}
@media (max-width: 600px) {
  .catalog-page {
    padding: 16px;
  }
  .links {
    margin: 12px 0;        
  }
  .top-tabs {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .catalog-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .sidebar {
    display: none;
  }
  .type-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .type-tab {
    flex-shrink: 0;          
  }
  .sort-bar {
    flex-wrap: wrap;
    gap: 12px;
  }
  .catalog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .numeration {
    flex-wrap: wrap;
    justify-content: center;
  }
  .nume-nav {
    margin-left: 0;
  }
}
</style>
