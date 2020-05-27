<template>
    <div>
      <div class="title">
          <!-- 戻るボタン -->
          <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
          <h1 class="sub_con">このアプリについて</h1>
      </div>
      <div class="top_speas"></div>
    <h2 class="position">位置情報サービス</h2>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
    <p>※位置情報サービスは、お客様の位置を取得し、</p>
    <p>今いるお店や周辺のお店を割り出すことにのみ使われます。</p>
    <h2 class="settlement">決済情報取り扱いに関して</h2>
    <p class="explanation">本アプリは決済手段の種類のみを取得しており、</p>
    <p class="explanation">お客様の決済情報は一切取得しておりません。</p>
    <p class="explanation">アプリ使用によって、お客さまの決済情報が</p>
    <p class="explanation">流出することはございません。</p>
    </div>
</template>

<script>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrap{
   width: 90%;
   margin:0 auto;
}

.top_speas {
  margin-top: 120px;
}

.title {
  height: 45px;
  width: 100%;
  background-color: #FFF;
  text-align: center;
  padding-top: 25px;
  color: #626262;
  font-size: 10px;

  border-radius: 0 0 30px 30px;

  margin-bottom: 30px;

  position: fixed;
  top: 0px;

  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
}

.title button,
.title img {
  z-index: 200000;
  width: 15px;
  border: none;
}

.sub_con {
  padding-right: 60px;
  text-align: center;
}

.title button {
  z-index: 1000;
  margin-left: 30px;
  width: 33px;
  height: 33px;
  float: left;
  background-color: #FFF;
}
</style>
