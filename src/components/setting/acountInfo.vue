<template>
   <div>
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">アカウント情報</h1>
    </div>
      <div class="top_speas"></div>
      <div class="user_info">
         <img src="../../../static/test/47365_main.jpg" alt="プロフィール写真" id="user_image">
       </div>

      <p class="user_name">{{username}}</p>
      <p>{{usermail}}</p>

      <router-link to="/setting/acountInfo"><li id="acount_info"><button>アカウント情報の変更</button></li></router-link>

      <!--
      <div>
         <h3>使用可能な決済機能</h3>
         <div id="settleView">
            <ol>
               <li v-for="settlement in settlements" :key="settlement.text">
                  {{settlement.text}}
               </li>
            </ol>
         </div>
      </div>
      <div>
        <h3>アカウント情報の変更</h3>
      </div>-->
   </div>
</template>

<script>
// import acountInfo from '../setting'
export default {
  data: function () {
    return {
      settlements: [
        {text: '使用可能な決済アイコン1'},
        {text: '使用可能な決済アイコン2'}
      ],
      username: 'マツコデラックス',
      usermail: 'matsuko-dx@gmo.jp'
    }
  }
}
</script>

<style scoped>
   *{
      margin:0;
      padding:0;
   }

   .top_speas{
    margin-top: 120px;
   }

   .title{
      height:45px;
      width: 100%;
      background-color: #FFF;
      text-align: center;
      padding-top: 25px;
      color: #626262;
      font-size: 10px;

      border-radius: 0 0 30px 30px;

      margin-bottom: 30px;

      position: fixed;
      top:0px;

      -webkit-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
      box-shadow: 0px 5px 50px 0px rgba(0,0,0,0.2);
   }

   .title button,.title img{
      z-index: 200000;
      width:15px;
      border:none;
   }

   .sub_con{
    padding-right: 60px;
    text-align: center;
   }

   .title button{
    z-index: 1000;
    margin-left: 30px;
    width:33px;
    height: 33px;
    float: left;
    background-color: #FFF;
   }

   .top_speas{
    margin-top: 110px;
   }

#user_image {
  width: 135px;
  height: 135px;
  object-fit: cover;
  border-radius: 50%;

  border: solid 7px #FFF;
  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
}

#user_name {
  margin-top: 15px;
  font-size: 20px;
}

li{
   margin-top:20px;
   list-style: none;
}

li button {
  width: 85%;
  font-size: 17px;
  border: none;
  height: 50px;
  background-color: #FFF;
  color: #626262;
  text-align: center;

  border-radius: 25px;

  transition: all 0.1s ease-out;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
}

</style>
