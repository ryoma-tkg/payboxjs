<template>
  <div>
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">お問い合わせ</h1>
    </div>

    <div class="top_speas"></div>

    <div class="denwa">
      <h2>電話での問い合わせ</h2>
      <p>0120-000-000</p>
    </div>
    <div class="toiawase">
      <h2>メールでの問い合わせ</h2>
      <form action="" method="">
        <ul>
          <li>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" placeholder="お名前">
          </li>
          <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_email" placeholder="メールアドレス">
          </li>
          <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message" placeholder="お問い合わせ内容をご入力ください。">
            </textarea>
          </li>
          <li class="button">
            <button type="submit">送信</button>
          </li>
        </ul>
      </form>
    </div>
    <div class="top_speas"></div>
  </div>
</template>

<script>
</script>

<style>

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
    margin-top: 120px;
   }

   .denwa{
    margin:0 auto;
    width: 90%;
    padding: 10px;
    background-color: #FFF;
    margin-bottom: 40px;

    border-radius: 50px;

    -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   }

   .denwa h2{
    font-size: 20px;
   }

   .denwa p {
    font-size: 30px;
   }

   .toiawase{
    width: 90%;
    padding: 10px 10px 0 10px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 50px;
    -webkit-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
   }

   .toiawase h2{
    font-size: 20px;
    padding-top: 20px
   }

   .toiawase ul li{
    list-style: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
   }

   .toiawase ul{
   }

   .toiawase li{
   }

   .toiawase input{
    width: 90%;
    padding-left: 20px;
    border:solid 3px #989898;
    font-size: 25px;
    height: 50px;
    border-radius: 100px;

    transition: all 0.2s ease;
   }

    .toiawase input:focus{
    border:solid 3px #0B74DD;
   }

   .toiawase textarea{
    width: 89%;
    height: 200px;
    padding: 10px;
    border:solid 3px #989898;
    font-size: 16px;
    border-radius: 20px;
    transition: all 0.2s ease;
   }

   .toiawase textarea:focus{
    border:solid 3px #0B74DD;
   }

   .toiawase button{
    background-color: #5082B4;
    margin-bottom: 30px;
    font-size: 20px;
    color:#FFF;
   }

   .toiawase li label{
    display: none;
   }
</style>
