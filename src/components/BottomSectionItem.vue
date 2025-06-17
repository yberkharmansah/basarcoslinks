<template>
  <a v-if="link" :href="link" target="_blank" class="bottom-item">
    <span>{{ text }}</span>
    <span v-if="count" class="count-bubble">{{ count }}</span>
  </a>
  <div v-else class="bottom-item" @click="$emit('action')">
    <span>{{ text }}</span>
    <span v-if="count" class="count-bubble">{{ count }}</span>
  </div>
</template>

<script>
export default {
  name: 'BottomSectionItem',
  props: {
    text: String,
    link: String,
    count: [Number, String] // İsteğe bağlı sayaç
  },
  emits: ['action'] // 'action' olayını emit edeceğimizi belirtiyoruz
};
</script>

<style lang="scss" scoped>
.bottom-item {
  background-color: #3d2a1b; /* Alt öğe arka plan rengi */
  border: 2px solid #a08050; /* Altın kenarlık */
  border-radius: 8px;
  padding: 10px 20px;
  text-decoration: none;
  color: #e0d0b0;
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer; /* Tıklanabilir olduğunu göstermek için */

  &:hover {
    background-color: #5d4a3b;
    color: #fff;
    transform: translateY(-2px);
  }

  .count-bubble {
    background-color: #cc0000; /* Kırmızı renk */
    color: white;
    border-radius: 50%;
    padding: 2px 8px;
    margin-left: 10px;
    font-size: 0.8em;
    font-weight: normal;
  }
}
</style>