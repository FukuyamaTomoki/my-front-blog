<template>
  <div id="app">
    <HeaderComponent />
  </div>
  <div>こんにちは</div>
</template>

<script>
// HeaderComponentをインポート
import HeaderComponent from "./components/common/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    // HeaderComponentを登録
    HeaderComponent,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
