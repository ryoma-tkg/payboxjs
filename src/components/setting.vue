<template>
  <div>
    <div class="wrap">
      <div class="title">
        <h1>設定</h1>
      </div>
    </div>
    <div class="top_speas_s"></div>
    <!--<div class="user_info">
      <img src="../../static/test/47365_main.jpg" alt="プロフィール写真" id="user_image">
      <p class="user_name">{{ LogInInfo }}</p>
    </div>-->
    <ul class="setting">
      <!--<router-link to="/setting/acountInfo">
        <li id="acount_info"><button>アカウント情報</button></li>
      </router-link>-->
      <router-link to="/manage_pay">
        <li id="pay_manager"><button>支払い管理</button></li>
      </router-link>
      <router-link to="/setting/notice">
        <li id="notice_setting"><button>通知設定</button></li>
      </router-link>
      <router-link to="/setting/security">
        <li id="security"><button>セキュリティ</button></li>
      </router-link>
    </ul>
    <ul class="others">
      <router-link to="/setting/applicationInfo">
        <li id="about_app"><button>このアプリについて</button></li>
      </router-link>
      <router-link to="/setting/help">
        <li id="help"><button>ヘルプ</button></li>
      </router-link>
      <router-link to="/setting/promoFriends">
        <li id="prom_friends"><button>友達に紹介</button></li>
      </router-link>
      <router-link to="/setting/question">
        <li id="query"><button>問い合わせ</button></li>
      </router-link>
    </ul>
    <div id="log_out"><!--<button @click="Logout">ログアウト</button>--></div>
    <div class="spacing"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      LogInInfo: 'マツコデラックス'
    }
  },
  methods: {
    Logout: function () {
      const result = window.confirm('ログアウトしますか？')
      if (result) {
        // ログアウトするコードを記入する(今回は仮にアカウント名を消す)
        this.LogInInfo = 'ログインしていません'
        alert('ログアウトしました')
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

body{
  margin: 0 auto;
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

.title h1 {
  text-align: center;
  margin: 0 auto;
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

/*項目*/

ul {
  margin-top: 30px;
  margin-bottom: 60px;
}

li {
  margin: 10px auto;
  list-style: none;
  border-radius: 25px;
  width: 90%;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.2);
}

li button {
  width: 100%;
  font-size: 17px;
  border: none;
  height: 50px;
  background-color: #FFF;
  color: #626262;
  text-align: center;

  border-radius: 25px;

  transition: all 0.1s ease-out;
}

li button:active {
  color: #FFF;
  background-color: #AAA;
}

/*ログアウト*/

#log_out button {
  font-size: 17px;
  color: #C40303;

  width: 100%;
  margin-bottom: 20px;
  height: 50px;
  background-color: #FFF;
  text-align: center;

  border: none;

  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-out;
}

#log_out button:active {
  background-color: #AAA;
}

.spacing {
  height: 100px;
}

.top_speas_s {
  margin-top: 100px
}

</style>
