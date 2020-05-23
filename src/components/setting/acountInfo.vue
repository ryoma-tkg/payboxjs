<template>
   <div>
      <h1>アカウント情報</h1>
      <h2>{{username}}</h2>
      <h3>{{usermail}}</h3>
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
      </div>
   </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      settlements: [
        {text: '使用可能な決済アイコン1'},
        {text: '使用可能な決済アイコン2'}
      ]
    }
  }
}
</script>

<style>
</style>
