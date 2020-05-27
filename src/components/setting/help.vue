<template>
   <div>
      <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">ヘルプ</h1>
    </div>
    <div class="wrap">
    <div class="top_speas"></div>
      <div class="covid">
         <p>現在、新型コロナウイルス感染症（COVID-19)の影響を踏まえ、</p>
         <p>サポート担当者の予防対策の一環とし、人員を減らして業務を行っています。</p>
         <p>そのため、担当者の対応に通常より時間がかかる場合がありますが、</p>
         <p>ご了承のほどお願いいたします。</p>
      </div>
      <div class="koumoku">
         <h2>payboxとは</h2>
            <p>「paybox」は決済手段を包括的に管理し、直感的にお支払方法を決定できるようにするアプリです。</p>
            <p>  お客様の位置情報をもとに、お支払先の店舗を割り出し最もお得なお支払方法を瞬時にお伝えします。</p>
            <p> また、店舗検索機能も実装しており、お得にご利用できるお店を検索することもできます。</p>
      </div>
      <div class="koumoku">
         <h2>うまく動作しない</h2>
            <p>位置情報サービスの使用をアプリに許可していただいていますでしょうか。</p>
            <p>位置情報の取得を前提としたアプリですので、許可していただくようお願いいたします。</p>
            <p>それでも解決しない場合は、お手数ですが問い合わせフォームにてお問い合わせください。</p>
      </div>
      <div class="koumoku">
         <h2>いったお店で使えなかった</h2>
            <p>すべての店舗にてご利用できるように努力しておりますが、新店舗などへの対応が遅れている可能性がございます。</p>
            <p>ほかのお店でご利用いただけていれば、不具合等ではございませんので、対応が完了いたしますまでお待ちください。</p>
      </div>
      <div class="koumoku">
         <h2>パスワードが分からない</h2>
            <p>こちらから、パスワードの再設定を行ってください。</p>
      </div>
      <div class="koumoku">
         <h2>個人情報取り扱いに関して</h2>
            <p>お客様の個人情報に関しましては、プライバシー・ポリシーに従い適正な管理を行うとともに、個人情報の保護に努めます。</p>
            <p>詳細については、「設定」→「セキュリティー」にてご確認ください。</p>
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

