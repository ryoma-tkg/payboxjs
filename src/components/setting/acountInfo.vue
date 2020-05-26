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
module.exports = {
  data: function () {
    return {
      settlements: [
        {text: '使用可能な決済アイコン1'},
        {text: '使用可能な決済アイコン2'}
      ],
      username: '',
      usermail: ''
    }
  }
}
</script>

<style>
  .top_speas{
    margin-top: 100px;
  }

  .user_name{
      margin-top:15px;
      font-size: 20px;
   }
</style>
