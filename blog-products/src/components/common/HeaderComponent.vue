<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/img/product-logo.png" alt="ロゴ" class="logo" />
    </div>
    <!-- ハンバーガーメニューボタン -->
    <button class="hamburger" @click="toggleMenu">&#9776;</button>
    <!-- ナビゲーションメニュー -->
    <nav class="navigation" :class="{ 'is-active': isActive }">
      <a href="/front">フロント</a>
      <a href="/server">サーバー</a>
      <a href="/others">その他</a>
      <a href="/user">ユーザー</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6f0f5;
}

.logo {
  max-width: 150px;
  height: auto;
}

.navigation {
  display: flex;
  gap: 20px; /* ナビゲーション項目間のスペース */
  text-align: right;
}

.navigation a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.navigation.is-active {
  display: flex;
}

@media (max-width: 768px) {
  .header {
    padding: 10px 8px;
    flex-direction: column;
  }

  .hamburger {
    display: block;
  }
  .navigation {
    display: none;
    flex-direction: column;
    gap: 10px;
  }
}
</style>

<script>
export default {
  // コンポーネントの名前を定義
  name: "HeaderComponent",
  //data()関数は、Vueコンポーネントの状態を保つデータを定義するために使用される。
  //この関数から返されるオブジェクト内で宣言されたプロパティ(今回は「isActive」)は、Vueのリアクティビティシステムによって追跡され、
  //テンプレート内でそのデータが更新されると、対応するDOMも自動的に更新されます。
  data() {
    return {
      isActive: false, // ナビゲーションにおけるハンバーガーメニュー表示状態を定義し、デフォルトfalse
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive; // ハンバーガーメニュー表示状態の切り替え
    },
  },
};
</script>
