<template>
     <div>
        <el-container>
          <el-header
            height="80px"
            :style="obj_style">
            <el-image
              style="width: 80px; height: 80px"
              src="../assets/logo.png"
              fit="fill" >
            </el-image>
            <ul class="header-operations">
              <li><span>管理员：{{userName}}</span></li>
              <li @click="showThemeDialog">切换主题</li>
              <li
                class="header-download"
                @click="downloadZip">
                下载
              </li>
              <li @click="showHelpDialog">帮助</li>
              <li>
                <span
                  @click="switchLang('/zh-CN')"
                  class="header-lang">中文
                </span>
                <span>/</span>
                <span
                  @click="switchLang('/en-US')"
                  class="header-lang" >En
                </span>
              </li>
            </ul>
          </el-header>
          <el-container tyle="height: 500px; border: 1px solid #eee">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :background-color="background"
              :text-color="text_color"
              :active-text-color="active_color">
              <router-link
                :to="{path:'/home',query:{userName:this.userName}}"
                replace>
                <el-menu-item index="1-1">开始
                </el-menu-item>
              </router-link>
              <router-link :to="{path:'/list',query:{userName:userName}}">
                <el-menu-item index="1-1">列表
                </el-menu-item>
              </router-link>
              <router-link :to="{path:'/Learningbook',query:{userName:userName}}">
                <el-menu-item index="1-1">学习手册
                </el-menu-item>
              </router-link>
              <router-link :to="{path:'/comment',query:{userName:userName}}">
                <el-menu-item index="1-1">评论
                </el-menu-item>
              </router-link>
              <router-link :to="{path:'/Study',query:{userName:userName}}">
                <el-menu-item index="1-1">软件以及项目
                </el-menu-item>
              </router-link>
              <router-link :to="{path:'/musicorvedio',query:{userName:userName}}">
                <el-menu-item index="1-1">音乐与视频
                </el-menu-item>
              </router-link>
              <router-link to="/Login">
                <el-menu-item index="1-1">登录
                </el-menu-item>
              </router-link>
              <el-menu-item
                index="1-1"
                @click="exit" >退出
              </el-menu-item>
            </el-menu>
            <el-main>
              <router-view />
            </el-main>
          </el-container>
      </el-container>
      <el-dialog
          center
          :visible.sync="themeDialogVisible"
          title="切换主题色"
          width="400px">
          <el-form
            slot="footer"
            :model="colors"
            :rules="rules"
            ref="form"
            class="theme-form"
            label-position="top"
            label-width="70px">
            <el-form-item
              label="主题色"
              prop="primary">
              <el-color-picker v-model="colors.primary">
              </el-color-picker>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm"
              >切换</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
      </el-dialog>
    </div>
</template>
<script>
export default ({
  data () {
    const colorValidator = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error(this.langConfig.validate.required[this.lang])
        )
      } else if (!/^#[\dabcdef]{6}$/i.test(value)) {
        return callback(new Error(this.langConfig.validate.format[this.lang]))
      } else {
        callback()
      }
    }
    return {
      show: true,
      themeDialogVisible: false,
      obj_style: {
        'background-color': 'red'
      },
      background: '#545c64',
      text_color: '#fff',
      active_color: ' #ffd04b',
      canDownload: false,
      color: '#409EFF',
      colors: {
        primary: '#409eff'
      },
      rules: {
        primary: [{ validator: colorValidator, trigger: 'blur' }]
      },
      userName: ''
    }
  },
  created () {
     //this.getHome()
  },
  mounted () {
    this.route()
    this.$nextTick(() => {
      this.originalStylesheetCount = document.styleSheets.length
    })
     this.getHome()
  },
  methods: {
    route () {
      console.log(this.$route.path)
      if (this.$route.path === '/' || this.$route.path === '/Login') {
        //console.log('sssssssss')
        this.show = false
      }
    },
    // 退出系统
    exit () {
      this.userName = null
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getHome () {
      console.log("mingx"+this.$route.query.userName+"ss")
      if (this.$route.query.userName === undefined || this.$route.query.userName == null||this.$route.query.userName == "") {
        this.$router.push('/Login')
      } else {
        this.userName = this.$route.query.userName
        this.$router.push({ path: '/Home', query: { userName: this.userName } })
      }
    },
    // 切换主题
    showThemeDialog () {
      this.themeDialogVisible = true
    },
    // 下载
    downloadZip () {
      alert('下载')
    },
    // 帮助
    showHelpDialog () {},
    // 中英文切换
    switchLang (lang) {},
    // 弹框切换
    resetForm () {
      this.$refs.form.resetFields()
    },
    // 弹框确定
    submitForm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          // vaild  是否为true
          this.themeDialogVisible = false
          // this.colors.primary   获取中的颜色
          this.obj_style = { 'background-color': this.colors.primary }
          this.background = this.colors.primary
        } else {
          alert(111)
          return false
        }
      })
    },
    generateColors (primary) {
     // console.log(123)
      console.log(primary)
    }
  }
})
</script>
<style>
 .header-operations {
    float: right;
    padding-right: 30px;
  }
  .header-operations li {
    color: white;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 80px;
    cursor: pointer;
  }
  ul {
    height: 870px;
  }
  ul li {
    height: 40px;
    line-height: 40px;
    /* width: 120px; */
    text-align: center;
  }
  a {
    text-decoration: none;
    color: slategray;
  }
  .el-main{
    height: 800px;
  }
  .el-dialog__body {
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
    display: none;
  }
  .el-form--label-top .el-form-item__label {
    font-size: 18px;
  }
  .el-color-picker__trigger {
    width: 50px;
    height: 50px;
  }
</style>
