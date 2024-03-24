<template>
  <div
    class="article-container"
    @click="navigateToArticle"
    @mouseenter="startAnimation"
    @mouseleave="stopAnimation"
  >
    <div class="image-area"></div>
    <div class="content-area">
      <h3>記事のタイトル</h3>
      <div class="info">
        <span class="created-date">2023-03-22</span>
        <span class="likes">いいね数: 100</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleContainerComponent",
  methods: {
    navigateToArticle() {
      this.$router.push({ name: "articlePage" }); // 'articlePage'は遷移先のルート名
    },
    startAnimation(event) {
      const element = event.target;
      element.classList.add("rotate-border");
    },
    stopAnimation(event) {
      const element = event.target;
      element.classList.remove("rotate-border");
    },
  },
  // setup() {
  //   // setup関数内のコード
  // },
};
</script>

<style scoped>
/* コンテナのスタイル */
.article-container {
  width: 350px;
  height: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden; /* 角丸の外にはみ出す子要素を内側に収める */
  box-shadow: 8px 16px 16px rgba(0, 0, 0, 0.2);
  position: relative; /* 疑似要素の配置基準 */
}
/* コンテナのアニメーション1 */
.article-container:hover {
  border: 2px solid transparent; /* アニメーションの基本スタイル */
  box-shadow: 0 0 0 1.7px #6b9bc7,
    /* ホバー時の青色の枠線↑ */ 8px 16px 16px rgba(0, 0, 0, 0.2); /* ←影を維持 */
}
/* コンテナのアニメーション2 */
.article-container.rotate-border {
  animation: rotate-border-animation 2.5s linear infinite;
}
@keyframes rotate-border-animation {
  0% {
    border-color: transparent;
  }
  5% {
    border-color: #6b9bc7;
  }
  15% {
    border-color: transparent;
  }
  25% {
    border-color: #6b9bc7;
  }
  100% {
    border-color: transparent;
  }
}

.image-area {
  flex: 1;
  background-color: #e6f0f5;
  /* 実際の画像を背景として使用する場合は以下のコメントを解除 */
  /* background-image: url('適切な画像URL'); */
  /* background-size: cover; */
  /* background-position: center; */
}

.content-area {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column; /*縦に並べる */
  justify-content: space-between; /* タイトルと情報エリアを均等に配置 */
  padding: 10px;
}

h3 {
  margin: 0; /* タイトルの余白を除去 */
  color: #333; /* タイトルの色 */
}

.info {
  display: flex;
  justify-content: space-between; /* 作成日といいね数を両端に配置 */
  color: #333; /* 情報テキストの色 */
}

.created-date,
.likes {
  font-size: 0.8rem;
}
</style>
