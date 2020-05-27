<template>
  <div>
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">支払い管理</h1>
    </div>
    <div class="top_speas"></div>
    <div class="wrap">
    <ul>
      <li>
        <img src="../../../static/test/kessai/au.svg" alt="決済方法1">
        <p>決済名</p>
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </li>
      <li>
        <img src="../../../static/test/kessai/au.svg" alt="決済方法2">
        <p>決済名</p>
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </li>
      <li>
        <img src="../../../static/test/kessai/au.svg" alt="決済方法3">
        <p>決済名</p>
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </li>
      <li>
        <img src="../../../static/test/kessai/au.svg" alt="決済方法4">
        <p>決済名</p>
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </li>
    </ul>
    </div>
    <button type="button"><img src="" alt="新規決済追加ボタン"></button>
  </div>
</template>

<script>
module.exports = {
  // 登録済決済方法一覧(初回読み込み時)
  payWay: function () {
    return {
      payWays: [
        {image: '使用可能な決済アイコン1'},
        {image: '使用可能な決済アイコン2'}
      ]
    }
  },
  methods: {
    // 変更ボタン押下時処理
    Update: function () {
      // 登録内容の変更ページへ遷移
    },
    // 削除ボタン押下時処理
    Delete: function () {
      const result = window.confirm('本当にこの決済方法を削除しますか？')
      if (result) {
        // 決済方法を削除するコード
        alert('削除しました')
      }
    }
  }
}
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

ul,li{
  list-style: none;
}

ul{
  background-color:#FFF;
  border-radius: 30px;
  padding: 20px;

  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.3);
}

li{
  height: 60px;
  margin: 10px 0 10px 0;
  background-color: limegreen;
  color:#707070;
  font-size: 20px;
}

li img{
  margin-left: auto;
  width: 16%;
  position: relative;
  top:5px;
  right: 80px;
}

li p{
  position: relative;
  bottom:40px;
}

li button{
  border: none;
  position: relative;
  bottom:70px;
  width: 50px;

}

</style>
