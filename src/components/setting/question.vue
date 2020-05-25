<template>
  <div>
    <h1>アプリについての問い合わせ</h1>
    <div>
      <h3>電話での問い合わせ</h3>
      <h2>0120-000-000</h2>
    </div>
    <div>
      <h3>メールでの問い合わせ</h3>
      <form action="" method="">
        <ul>
          <li>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name">
          </li>
          <li>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_email">
          </li>
          <li>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message">
              お問い合わせ内容をご入力ください
            </textarea>
          </li>
          <li class="button">
            <button type="submit">送信</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
