<template>
   <div>
      <div>
         <p>設定</p>
      </div>
      <img src="プロフィール写真" alt="プロフィール写真">
      <div>"アカウント名"</div>
      <div>
         <router-link to="/setting/acountInfo"><button type="button"><img src="" alt="アカウント情報ボタン"></button></router-link><br>
         <router-link to="/setting/payManager"><button type="button"><img src="" alt="支払い管理ボタン"></button></router-link><br>
         <router-link to="/setting/notice"><button type="button"><img src="" alt="通知設定ボタン"></button></router-link><br>
         <router-link to="/setting/security"><button type="button"><img src="" alt="セキュリティボタン"></button></router-link><br>
      </div>
      <div>
         <router-link to="/setting/applicationInfo"><button type="button"><img src="" alt="このアプリについてボタン"></button></router-link><br>
         <router-link to="/setting/help"><button type="button"><img src="" alt="ヘルプボタン"></button></router-link><br>
         <router-link to="/setting/promoFriends"><button type="button"><img src="" alt="友達に紹介ボタン"></button></router-link><br>
         <router-link to="/setting/question"><button type="button"><img src="" alt="問い合わせボタン"></button></router-link><br>
      </div>
         <router-link to="/setting/logOut"><button type="button"><img src="" alt="ログアウトボタン"></button></router-link>
   </div>
</template>

<script>
</script>

<style>
</style>
