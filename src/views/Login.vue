<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import {mapActions} from 'vuex'
import {accountLogin} from '@/service/getData'
export default {
  data: function() {
    return {
      _data:  null, //传递的用户信息
      userInfo: null, //获取到的用户信息
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    validate(formName) {
      let flag = true
      this.$refs[formName].validate(valid => {
        if (!valid) flag = false 
        const _data = {
          'account': this.ruleForm.username,
          'password': this.ruleForm.password
        }
        this._data = _data
      })
      return flag
    },
    // 发送登录信息
    async submitForm(formName) {
      if(!this.validate(formName)) return
      //用户名登录
      this.userInfo = await accountLogin(this._data);
      debugger
      // this.getUserInfo()
      // Cookie.set('accountData', _data)
      // this.$router.push("/")
    },


    // ...mapActions(['getUserInfo'])
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>