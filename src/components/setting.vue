<template>
   <div>
      <div>
         <p>設定</p>
      </div>
      <img src="プロフィール写真" alt="プロフィール写真">
      <div>"アカウント名"</div>
      <div>
         <div id="acount_info"><button v-on:click="遷移処理">アカウント情報</button></div>
         <div id="pay_manager"><button v-on:click="遷移処理">支払い管理</button></div>
         <div id="notice_setting"><button v-on:click="遷移処理">通知設定</button></div>
         <div id="security"><button v-on:click="遷移処理">セキュリティ</button></div>
      </div>
      <div>
         <div id="about_app"><button v-on:click="遷移処理">このアプリについて</button></div>
         <div id="help"><button v-on:click="遷移処理">ヘルプ</button></div>
         <div id="prom_friends"><button v-on:click="遷移処理">友達に紹介</button></div>
         <div id="query"><button v-on:click="遷移処理">問い合わせ</button></div>
      </div>
         <div id="log_out"><button v-on:click="遷移処理">ログアウト</button></div>
   </div>
</template>

<script>
</script>

<style>
</style>
