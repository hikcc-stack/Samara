<script setup>

defineProps({ show: Boolean })
const emit = defineEmits(['close'])

const form = { name: '', phone: '', question: '' }

</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="overlay" @click.self="emit('close')">
      <div class="modal">
        <button class="close" @click="emit('close')">✕</button>
        <h2>Нужна консультация —</h2>
        <p class="subtitle">Остались вопросы? Мы с радостью на них ответим. Поможем сориентироваться в выборе.</p>

        <input v-model="form.name" class="field" placeholder="Имя">
        <input v-model="form.phone" class="field" placeholder="Телефон *">
        <textarea v-model="form.question" class="field area" placeholder="Напишите ваш вопрос"></textarea>

        <div class="footer-row">
          <label class="agree">
            <input type="checkbox" checked>
            <span>отправляя данные я даю согласие на обработку персональной информации согласно
              <a href="#">политике конфиденциальности</a> данного сайта
            </span>
          </label>
          <button class="submit">Отправить</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  width: 540px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.close {
  position: absolute;
  top: 16px; right: 16px;
  border: none; background: none;
  font-size: 18px; cursor: pointer; color: #888;
}
h2 {
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.subtitle {
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #586067;
  margin: 0 0 8px;
}
.field {
  width: 100%;
  border: none;
  background: #F5F5F5;
  border-radius: 8px;
  padding: 14px 16px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  outline: none;
}
.area {
  height: 100px;
  resize: none;
}
.footer-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 4px;
}
.agree {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: Inter, sans-serif;
  font-size: 11px;
  color: #888;
  flex: 1;
}
.agree input { margin-top: 2px; accent-color: #7F9D87; flex-shrink: 0; }
.agree a { color: #7F9D87; }
.submit {
  background: #7F9D87;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.submit:hover { background: #6b8a74; }
</style>
