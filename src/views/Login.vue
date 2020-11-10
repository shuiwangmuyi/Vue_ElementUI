<template>
     <div class="login">
       <!-- 头像 -->
    <div class="avater_box">
      <img
        src="../assets/logo.png"
        alt="" >
      </div>
      <!-- 登录 -->
    <el-form
      :label-position="labelPosition"
      :model="user"
      status-icon
      :rules="rules"
      ref="user"
      class="login_form">
        <el-form-item prop="userAccout">
            <el-input
                type="text"
                v-model="user.userAccout"
                autocomplete="off"
                prefix-icon="el-icon-s-custom"
                clearable>
            </el-input>
        </el-form-item>
        <el-form-item prop="pass">
            <el-input
                type="password"
                prefix-icon="el-icon-s-goods"
                v-model="user.pass"
                autocomplete="off"
                show-password>
            </el-input>
        </el-form-item>
        <el-form-item class="btns">
            <el-button
                type="primary"
                :loading="loading"
                @click.prevent="submitForm('user')" >
            登录</el-button>
            <el-button @click.prevent="resetForm('user')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data () {
    var checkAccout = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'left',
      user: {
        userAccout: '',
        pass: ''
      },
      color1: '#409EFF',
      loading: false,
      rules: {
        userAccout: [{ validator: checkAccout, trigger: 'blur' }],
        pass: [{ validator: checkPass, trigger: 'blur' }]
      }
    }
  },
  mounted () {
    if (window.history && window.history.pushState) {
      // 向历史记录中插入了当前页
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false)
  },
  methods: {
    goBack () {
      // console.log("点击了浏览器的返回按钮");
      // sessionStorage.clear();
      // window.history.back();
      this.$router.replace({ path: '/Login' }).catch(error => error)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 传数据给后台，验证是否正确
          this.axios({
            method: 'get',
           // url: 'http://122.51.230.174:5000/api/Login',
           url:'http://localhost:5000/api/Login',
            params: {
              userName: this.user.userAccout,
              userPas: this.user.pass
            }
          }).then(res => {
            if (res.data.message) {
              // this.$router.push({name:'index',params:{userName:this.user.userAccout}})
              this.$router.push({ path: '/Home', query: { userName: this.user.userAccout } })
              this.$message({
                message: '登录成功',
                center: true
              })
              this.loading = true
            } else {
              const h = this.$createElement
              this.$notify({
                title: '提示',
                position: 'top-right',
                type: 'error',
                message: h(
                  'b',
                  {
                    style: 'color:red'
                  },
                  '账号密码错误'
                )
              })
            }
          })
        } else {
          // 没有输入数据进入===> valid 为false
          return false
        }
      })
    },
    resetForm (formName) {
      this.loading = false
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
    .login {
        width: 450px;
        height: 300px;
        background-color: antiquewhite;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .avater_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #eee;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
    }
    .avater_box img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
    .btns {
        display: flex;
        justify-content: flex-end;
    }
    .login_form {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 20px;
        box-sizing: border-box;
     }
    .el-input {
        width: 100%;
        }
</style>
