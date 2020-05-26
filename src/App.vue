<template>
  <div id="app">
    <!--コンポーネントが表示される場所です。-->
    <router-view></router-view>
    <div id="footer">
      <!--リンクタグを生成します。-->
      <router-link to="/">home</router-link>
      <router-link to="/search">search</router-link>
      <router-link to="/info">info</router-link>
      <router-link to="/setting">settting</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0px;
    padding:0px;
  }

  #footer{
      height:60px;
      width: 100%;
      background-color: #FFF;
      text-align: center;
      padding-top: 25px;
      font-size: 20px;
      color: #626262;

      border-radius: 30px 30px 0 0;

      position: fixed;
      bottom:0px;

      -webkit-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
