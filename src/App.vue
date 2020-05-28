<template>
  <div id="app">
    <!--コンポーネントが表示される場所です。-->
    <router-view></router-view>
    <div id="footer">
      <!--リンクタグを生成します。-->
    <ul>
      <li>
        <router-link to="/"><img src="../static/test/nav/home.svg" alt=""></router-link>
      </li>
      <li>
        <router-link to="/search"><img src="../static/test/nav/search.svg" alt=""></router-link>
      </li>
      <li>
        <router-link to="/info"><img src="../static/test/nav/bell.svg" alt=""></router-link></li>
      <li>
        <router-link to="/setting"><img src="../static/test/nav/acount.svg" alt=""></router-link>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    let userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('iphone') !== -1) {
      console.log('iPhoneをお使いですね')
    } else if (userAgent.indexOf('ipad') !== -1) {
      console.log('iPadをお使いですね')
    } else if (userAgent.indexOf('android') !== -1) {
      if (userAgent.indexOf('mobile') !== -1) {
        console.log('androidのスマホをお使いですね')
      } else {
        console.log('androidのタブレットをお使いですね')
      }
    } else {
      console.log('PCをお使いですね')
      if (!location.href.match(/pr/)) {
        this.$router.push('/pr')
      }
    }
  },
  beforeUpdate () {
    let userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('iphone') !== -1) {
      console.log('iPhoneをお使いですね')
    } else if (userAgent.indexOf('ipad') !== -1) {
      console.log('iPadをお使いですね')
    } else if (userAgent.indexOf('android') !== -1) {
      if (userAgent.indexOf('mobile') !== -1) {
        console.log('androidのスマホをお使いですね')
      } else {
        console.log('androidのタブレットをお使いですね')
      }
    } else {
      console.log('PCをお使いですね')
      if (!location.href.match(/pr/)) {
        this.$router.push('/pr')
      }
    }
  }
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
      padding-top: 20px;
      font-size: 20px;
      color: #626262;

      border-radius: 30px 30px 0 0;

      position: fixed;
      bottom:0px;

      -webkit-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      z-index: 100000;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#footer ul li{
  display: inline;
  list-style: none;
}

#footer ul{
  margin:0 auto;
}

#footer li{
  margin: 0 20px 0 20px;
  text-align: center;
}

#footer li img{
  width: 30px;
  height: 30px;;
}
</style>
