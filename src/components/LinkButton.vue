<template>
  <a :href="link" target="_blank" class="link-button">
    <div class="icon-wrapper">
      <i :class="getIconClass"></i>
    </div>
    <span class="button-text">{{ text }}</span>
  </a>
</template>

<script>
// ... (script kısmı aynı kalıyor)
export default {
  name: 'LinkButton',
  props: {
    icon: String, // 'youtube', 'twitch', 'instagram'
    text: String,
    link: String
  },
  computed: {
    getIconClass() {
      if (this.icon === 'youtube') return 'fab fa-youtube';
      if (this.icon === 'twitch') return 'fab fa-twitch';
      if (this.icon === 'instagram') return 'fab fa-instagram';
      return '';
    }
  }
};
</script>

<style lang="scss" scoped>
.link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6a4f3b; /* Düğme ahşap rengi */
  border: 3px solid #ffd700; /* Altın border */
  border-radius: 50px; /* Ovalimsi şekil */
  padding: 15px 30px;
  text-decoration: none;
  color: #e0d0b0; /* Metin rengi */
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #8c6a4f; /* Hover ahşap rengi */
    transform: translateY(-3px); /* Hafif yukarı kalkma */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    color: #fff; /* Hover metin rengi */
  }

  .icon-wrapper {
    margin-right: 15px;
    font-size: 1.2em; /* İkon boyutu */
    color: #ffd700; /* İkon rengi */
  }

  /* ------------------------------------- */
  /* MOBİL UYUMLULUK KISMI       */
  /* ------------------------------------- */
  @media (max-width: 600px) {
    padding: 12px 25px; /* Padding'i azalt */
    font-size: 1.2em; /* Metin boyutunu küçült */
    letter-spacing: 1px;
    border-width: 2px; /* Kenarlık kalınlığını azalt */

    .icon-wrapper {
      margin-right: 10px;
      font-size: 1em; /* İkon boyutunu küçült */
    }
  }

  @media (max-width: 400px) {
    padding: 10px 20px;
    font-size: 1em;
    .icon-wrapper {
      margin-right: 8px;
      font-size: 0.9em;
    }
  }
}
</style>