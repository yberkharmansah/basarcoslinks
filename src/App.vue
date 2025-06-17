<template>
  <div id="app" :style="backgroundStyle">
    <div class="main-frame">
      <h1 class="site-title">Basarcos</h1>

      <div class="links-container">
        <LinkButton
          icon="youtube"
          text="YouTube"
          link="https://www.youtube.com/@basarcos"
        />
        <LinkButton
          icon="twitch"
          text="Twitch"
          link="https://www.twitch.tv/basarcos"
        />
        <LinkButton
          icon="instagram"
          text="Instagram"
          link="https://www.instagram.com/basarcos/"
        />
        </div>
      <div class="bottom-section">
        <BottomSectionItem text="Hakkımda" @action="dialog = true" />

        <BottomSectionItem text="Destekle" link="https://streamlabs.com/basarcos/tip" />
      </div>

      <v-dialog
        v-model="dialog"
        max-width="600"
        content-class="hearthstone-modal"
      >
        <v-card class="hearthstone-modal-card">
          <v-card-title class="hearthstone-modal-title">
            <span class="text-h5">Hakkımda</span>
          </v-card-title>
          <v-card-text class="hearthstone-modal-content">
            <p>
              Welcome to the channel! I am Başar Coşkunoğlu, aka BasarCos, 46, I work at Istanbul University, Faculty of Science, Astronomy and Space Sciences as an Assist. Prof. I have been streaming for more than 10 years. I have a long history regarding card games, I have started playing Magic: the Gathering in 1996. These days I stream Diablo IV. Happy watching!
            </p>
            <p>
              You can download Raid: Shadow Legends from my links if you so wish:
            </p>
            <p class="raid-links">
              <a href="https://plrm.info/BasarCosAndroid" target="_blank">Android Link</a><br>
              <a href="https://plrm.info/BasarCosiOS" target="_blank">iOS Link</a>
            </p>
            <p>
              For sponsorship offers: <a href="mailto:basarcostwitch@gmail.com">basarcostwitch@gmail.com</a>
            </p>
          </v-card-text>
          <v-card-actions class="hearthstone-modal-actions">
            <v-spacer></v-spacer>
            <v-btn class="close-modal-button" @click="dialog = false">Kapat</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import LinkButton from './components/LinkButton.vue';
import BottomSectionItem from './components/BottomSectionItem.vue';

export default {
  name: 'App',
  components: {
    LinkButton,
    BottomSectionItem,
  },
  data() {
    return {
      dialog: false, // Modalın açık/kapalı durumunu kontrol eder
      // backgroundStyle: { /* Mevcut arka plan stiliniz */ },
    };
  },
  // Vuetify'yi kullanıyorsanız, iconlar için mdi'yı (Material Design Icons) kurmanız gerekebilir
  // npm install @mdi/font
  // main.js dosyanıza da: import '@mdi/font/css/materialdesignicons.css' eklemeyi unutmayın
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');

#app {
  font-family: 'Cinzel', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c9b183;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a1a0f;
}

.main-frame {
  background-color: #4a3d2c;
  border: 10px solid #7c5e3d;
  box-shadow:
    0 0 20px rgba(0, 0, 0, 0.5),
    inset 0 0 10px rgba(255, 215, 0, 0.7);
  padding: 40px 60px;
  border-radius: 15px;
  position: relative;
  width: 500px;
  max-width: 90vw;
}

.site-title {
  font-size: 3.5em;
  color: #ffd700;
  text-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.7),
    -2px -2px 5px rgba(255, 255, 255, 0.2);
  margin-bottom: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.bottom-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

/* Hakkımda butonu için özel stil (BottomSectionItem yerine) */

/* Hearthstone Temalı Modal Stilleri */
.hearthstone-modal.v-overlay__content {
  box-shadow: none; /* Vuetify'nin varsayılan gölgesini kaldır */
}

.hearthstone-modal-card {
  background-color: #4a3d2c !important; /* Ahşap arka plan */
  border: 5px solid #ffd700 !important; /* Altın kenarlık */
  border-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50LTczZDE1MDkiIHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWcolorPSIjZmZkNzAwIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNhNjg3MTciIG9mZnNldD0iMTAwJSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC03M2QxNTA5KSIvPgo8L3N2Zz4=') 20 / 10px stretch !important; /* Altın bordür için SVG kullanabilirsiniz */
  border-radius: 15px !important;
  color: #e0d0b0 !important; /* Metin rengi */
  font-family: 'Cinzel', serif !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
  overflow: hidden; /* İçerik taşmasını engelle */
}

.hearthstone-modal-title {
  background-color: #5c4330 !important; /* Başlık arka plan rengi */
  color: #ffd700 !important; /* Başlık metin rengi */
  font-size: 1.8em !important;
  font-weight: bold !important;
  text-transform: uppercase;
  border-bottom: 2px solid #a08050; /* Başlık alt çizgisi */
  padding: 15px 25px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hearthstone-modal-content {
  padding: 25px !important;
  text-align: left; /* Metin sola hizalı */
  font-size: 1.1em;
  line-height: 1.6;
}

.hearthstone-modal-content p {
  margin-bottom: 15px;
}

.hearthstone-modal-content a {
  color: #a0c0ff; /* Link rengi */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
}

.hearthstone-modal-content a:hover {
  color: #f0f8ff;
  text-decoration: underline;
}

.hearthstone-modal-content .raid-links {
  margin-top: -10px; /* Raid linkleri ile üstteki paragraf arasını azalt */
  margin-bottom: 10px;
  line-height: 1.4;
}

.hearthstone-modal-actions {
  background-color: #5c4330 !important; /* Alt kısım arka plan */
  border-top: 2px solid #a08050; /* Üst çizgi */
  padding: 10px 25px !important;
  display: flex;
  justify-content: flex-end; /* Butonu sağa hizala */
}

.close-button.v-btn {
  color: #ffd700 !important; /* Kapat butonu rengi */
  background: transparent !important;
  box-shadow: none !important;
  &:hover {
    color: #fff !important;
    background: rgba(255, 255, 255, 0.1) !important;
  }
}

.close-modal-button {
  background-color: #3d2a1b !important;
  border: 2px solid #a08050 !important;
  color: #e0d0b0 !important;
  font-weight: bold !important;
  border-radius: 5px !important;
  text-transform: uppercase !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) !important;

  &:hover {
    background-color: #5d4a3b !important;
    color: #fff !important;
    transform: translateY(-1px) !important;
  }
}
</style>