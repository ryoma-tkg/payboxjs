<template>
  <div id="app">
    <div id="header">
      <!--リンクタグを生成します。-->
      <router-link to="/">home</router-link>
      <router-link to="/search">search</router-link>
      <router-link to="/info">info</router-link>
      <router-link to="/setting">settting</router-link>
    </div>
    <!--コンポーネントが表示される場所です。-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
