<template>
  <!-- templateの下に一旦divを入れるお作法 -->
  <div id="app">
    <!-- ヘッダー -->
    <HeaderComponent />
    <div class="main">
      <ArticleContainerComponent />
    </div>
  </div>
</template>

<script>
// HeaderComponentをインポート
import HeaderComponent from "./components/common/HeaderComponent.vue";
import ArticleContainerComponent from "./components/common/ArticleContainerComponent.vue";

export default {
  // nameプロパティは、自身のコンポーネントの名前を定義します。エントリポイントとなるのは慣例としてApp.vueとするのが一般的。
  name: "App",
  // componentsプロパティは、そのコンポーネントのテンプレートで使用される子コンポーネントを定義します。
  components: {
    HeaderComponent,
    ArticleContainerComponent,
  },
};
</script>

<style scoped>
.main {
  padding: 25px;
  background-color: #f7f7f7;
  width: 100vw; /* vh/vw: 「ビューポートの...」という意味で、「画面の見えてる範囲100%」ってこと */
  height: 100vh;
  box-sizing: border-box; /* パディングを含めたサイズでwidthとheightを計算 */
}
</style>
