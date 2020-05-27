<template>
  <div>
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">このアプリについて</h1>
    </div>
    <div class="wrap">
    <div class="top_speas"></div>
    <div class="koumoku">
      <p>「paybox」は決済手段を包括的に管理し、直感的にお支払方法を決定できるようにするアプリです。</p>
      <p>  お客様の位置情報をもとに、お支払先の店舗を割り出し最もお得なお支払方法を瞬時にお伝えします。</p>
      <p> また、店舗検索機能も実装しており、お得にご利用できるお店を検索することもできます。</p>
    </div>
    <div class="koumoku">
    <h2>位置情報サービスについて</h2>
      <p> このアプリでは、位置情報サービスの使用を前提としております。</p>
      <p>位置情報サービスを有効にしてから、このアプリをご利用ください。</p>
    </div>
    <div class="koumoku">
    <h2>ご注意</h2>
      <p>情報更新は随時おこなってまいりますが、不正確な情報を含む可能性もございます。</p>
      <p>これによって生じたいかなる損害に関しましても一切の責任を負いかねますので、ご了承ください。</p>
    </div>
  </div>
  <div class="bottom_speas"></div>
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

.covid{
   padding:20px;
   border-radius: 20px;
   border:solid 2px #f0870e;
   background-color: #FFF;
   -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   -moz-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);

   margin:15px 0 15px 0;
}

.koumoku{
   padding:20px;
   border-radius: 20px;
   background-color: #FFF;
   -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   -moz-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);

   margin:15px 0 15px 0;
   
}

.koumoku h2{
   margin-bottom: 10px;
}

.bottom_speas{
   margin-bottom: 150px;
}

</style>