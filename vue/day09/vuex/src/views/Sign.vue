<template>
  <div>
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
    />

    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>

    <p>
      <van-button type="default">默认按钮</van-button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      sms: ""
    };
  }
};
</script>

<style scoped>
van-button {
  text-align: center;
}
</style>

