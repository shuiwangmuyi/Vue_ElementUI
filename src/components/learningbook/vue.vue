<template>
  <el-collapse-item>
    <template slot="title">
      <h2>Vue学习</h2>
    </template>
    <div>
      <el-collapse-item>
        <template slot="title">
          <h3 class="_one">1、安装Vue和创建Vue项目</h3>
        </template>
        <div class="_two">
          <div>1 安装Vue之前先检查是否安装 <a href="https://nodejs.org/zh-cn/">
              <el-link
                :underline="false"
                type="primary"
              >node</el-link>
            </a></div>
          <div>2 下载node(已安装忽略),点击上方链接即可进入官网，根据自己电脑要求下载即可</div>
          <div>3 <a href="https://www.runoob.com/nodejs/nodejs-install-setup.html">
              <el-link
                :underline="false"
                type="primary"
              >安装node</el-link>
            </a>：找到安装包，双击安装包，一直下一步即可(如果还不清楚请点击链接进入教程)</div>
          <div>4 测试node是否安装成功：按"win+R",输入" cmd ",在DOS下面输入 " node -v ",是否出现node对应的版本号,如没有请重新安装，或重启电脑.</div>
          <div>5 升级npm,在ODS下面输入 " npm -v ",会有对应的版本号，然后输入" npm install -g npm " 即可升级 npm</div>
          <div>6 安装 cnpm,在DOS下面输入 " npm install -g cnpm --registry=https://registry.npm.taobao.org "</div>
          <div>7 安装Vue 在DOS下面输入" npm install vue-cli -g "==>这是全局安装</div>
          <div style="color:red">
              <h4 style="margin-top: 0px;margin-bottom: 0px;">*:这是Vue Cli2以前的安装方法,以后的安装方式是：npm install -g @vue/cli </h4>
          </div>
          <div>8 创建Vue项目：如果全局安装了Vue,在创建项目的时候，每次只需要输入 vue init webpack 项目名称 ,不是全局安装，则需要输入 " npm install vue-cli ",在输入" vue init webpack 项目名称 "</div>
           <div style="color:red">
              <h4 style="margin-top: 0px;margin-bottom: 0px;">*:Vue Cli2以后创建项目的方法是：vue create 项目名称 </h4>
          </div>
          <div>9 运行Vue项目：进入项目目录，然后输入" npm run dev "，然后在浏览器上输入对应的网址即可看到结果。(创建项目默认网址是：localhost:8080) </div>
          <div style="color:red">
              <h4 style="margin-top: 0px;margin-bottom: 0px;">*:Vue Cli2以后运行项目的方法是：npm run serve</h4>
          </div>
          <div>10 Vue打包:进入项目目录，然后输入"npm run build"即可完成打包，打包之后会生成一个dist的文件夹，里面会有很多压缩的JS、CSS和静态文件</div>
         <div style="color:red">
              <h4 style="margin-top: 0px;margin-bottom: 0px;">*:在DOS下 cd到项目文件下，然后运行Vue ui 以图形的方式管理自己的项目</h4>
          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="_one">2、Vue重要文件</h3>
        </template>
        <div class="_two">
          build：项目的配置文件目录 <el-divider direction="vertical">|</el-divider>
          config：针对于开发环境和线上环境 <el-divider direction="vertical">|</el-divider>
          node_modules：项目的依赖 <el-divider direction="vertical">|</el-divider>
          src :源代码目录 <el-divider direction="vertical">|</el-divider>
          static ：静态资源
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="_one">3、指令</h3>
        </template>
        <div class="_two">
          <el-divider content-position="center">Vue中 的if/show/for</el-divider>
          v-if：存在与否<el-divider direction="vertical">|</el-divider>
          v-show：只是隐藏<el-divider direction="vertical">|</el-divider>
          v-for：循环展示
          <el-divider content-position="center">v-clock：解决差值表达式存在闪动的问题</el-divider>
          用法1.提供样式 [v-clock]:{dispaly:none}
          <el-divider direction="vertical">|</el-divider>
          2.在插值表达式所在标签添加 v-clock 指令。 原理：先通过样式隐藏内容，然后在内存进行替换并显示
          <el-divider content-position="center">Vue中数据绑定及其他</el-divider>
          1、 v-text='msg':填充纯文本内容;相比较插值表达式更加简洁<br>
          2、 v-html='msg':填充有样式的内容；1.有安全问题（XSS攻击）2.本网站数据可以用，第三方不推荐<br>
          3、 v-pre 填充原始信息。显示原始内容，跳过编译过程<br>
          4、v-once：应用场景：如果显示信息后续不需要在修改，可以使用，这样可以提高性<br>
          5、v-model：双向绑定
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="_one">4、组件</h3>
        </template>
        <div class="_two">
          <el-collapse-item>
            <template slot="title">
              <h3 class="_one">1、父子组件</h3>
            </template>
            <div>
              <el-divider content-position="center">父组件引用字组件</el-divider>
              在父组件的JS中引用子组件的路径，import 名称 from "@/路径"，
              然后在JS里面加一个 components：{组件对应的名称}，最后在html上实现组件
              &lt;组件对应的名称&gt;&lt;/组件对应的名称&gt;
              <el-divider content-position="center">父组件的传值子组件</el-divider>
              <div>
                1、父组件向子组件传值:<br>
                》》在子组件的JS中利用 props：{}来接收<br>
                》》在父组件中实现子组件的名称上传递值<br>
                <div>例子如下:</div>
                <el-input
                  type="textarea"
                  :rows="12"
                  placeholder="请输入内容"
                  v-model="father"
                  :disabled="true"
                  style="width:40%;"
                >
                </el-input>
                <el-input
                  type="textarea"
                  :rows="12"
                  placeholder="请输入内容"
                  v-model="son"
                  :disabled="true"
                  style="width:40%;margin-left:40px"
                >
                </el-input>
              </div>
              <el-divider content-position="center">子组件的传值父组件</el-divider>
              <div>
                   1、父组件向子组件传值:<br>
                    》》在子组件中的JS中用一个方法，在方法中利用 
                        this.$emit("名字",传递的值)<br>
                    》》在父组件中实现子组件的名称上添加 子组件中传递的值，
                    并绑定方法事件，然后在方法中添加对应的事件<br>
                <div>例子如下:</div>
                <el-input
                  type="textarea"
                  :rows="14"
                  placeholder="请输入内容"
                  v-model="father1"
                  :disabled="true"
                  style="width:40%;"
                >
                </el-input>
                <el-input
                  type="textarea"
                  :rows="14"
                  placeholder="请输入内容"
                  v-model="son1"
                  :disabled="true"
                  style="width:40%;margin-left:40px"
                >
                </el-input>
              </div>
              <div>
                2、子组件向父组件传值:<br>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <h3 class="_one">2、兄弟组件</h3>
            </template>
            <div>
                <div>例子如下</div>
                <el-input
                  type="textarea"
                  :rows="14"
                  placeholder="请输入内容"
                  v-model="brotherA"
                  :disabled="true"
                  style="width:40%;"
                >
                </el-input>
                <el-input
                  type="textarea"
                  :rows="14"
                  placeholder="请输入内容"
                  v-model="brotherB"
                  :disabled="true"
                  style="width:40%;margin-left:40px;background:white"
                >
                </el-input>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>

      <el-collapse-item>
          <template slot="title">
              <h3 class="_one">5、路由</h3>
          </template>
          <div class="_two">
              路由是这两组件{{link}}和{{view}}配套使用,有{{view}}组件就有{{link}}
              一个页面可以有多个{{link}}组件
               <el-divider content-position="center">路由传值</el-divider>
               <h4>方案1</h4>
                 直接调用$router.push 实现携带参数的跳转，需要对应路由配置
                <div>
                    <el-input              
                        type="textarea"               
                        :rows="4"  
                        v-model="push"            
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                    <el-input
                        v-model="describe"
                        type="textarea"
                        :rows="4"              
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                </div>
                <span>在子组件中可以使用来获取传递的参数值。this.$route.params.id</span>
                <h4>方案2</h4>
                父组件中：通过路由属性中的name来确定匹配的路由，通过params来传递参数。
               <div>
                    <el-input              
                        type="textarea"               
                        :rows="4"  
                        v-model="push1"            
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                    <el-input
                        v-model="describe1"
                        type="textarea"
                        :rows="4"              
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                </div>
               <span>在子组件中可以使用来获取传递的参数值。this.$route.params.id</span>
               <h4>方案3</h4>
               父组件：使用path来匹配路由，然后通过query来传递参数这种情况下 query传递的参数会显示在url后面?id=>
                 <div>
                    <el-input              
                        type="textarea"               
                        :rows="4"  
                        v-model="push2"            
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                    <el-input
                        v-model="describe1"
                        type="textarea"
                        :rows="4"              
                        :disabled="true"
                        style="width:40%;"
                    >
                    </el-input>
                </div>
               <span>对应子组件: 这样来获取参数:this.$route.query.id</span>
          </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="_one">6、运行Vue报错</h3>
        </template>
        <div class="_two">
          <el-collapse-item>
            <template slot="title">
              <h4>1、vue-cli-service不是内部或外部命令，也不是可运行的程序 或批处理文件。</h4>
            </template>
            <div class="_three">
              解决方案：重新安装依赖==>npm install
              <el-divider direction="vertical"></el-divider>cnpm install
              <span> ,运行成功之后,再次运行项目 npm run dev</span>
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>2、webpack-dev-server 不是内部或外部命令...</h4>
            </template>
            <div class="_three">
              安装依赖 npm install ，然后再次输入 npm run dev，还报错，则不是缺少依赖就是node_modules版本与本机安装的node和npm版本不一致
              则在package.json里面检查node和npm的版本，然后把node_modules文件夹删除，运行npm -v 和node -v ，在则在package.json 中修改
              npm和node的版本，再次输入 npm install 安装依赖即可.
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>3、报错'webpack-cli/bin/config-yargs'</h4>
            </template>
            <div class="_three">
              因为缺少webpack-cli，执行npm install webpack-cli 即可
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>4、报错"instanceof" keyword value Promise</h4>
            </template>
            <div class="_three">
              因为webpack版本和webpack-dev-server版本不匹配,首先卸载 webpack-dev-server 执行 npm uninstall -g webpack-dev-server
              再执行npm install webpack-dev-server@2.9.7 --save-dev 即可(先在webpack.json查看先在webpack的版本)
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>5、listen EADDRINUSE :::端口号</h4>
            </template>
            <div class="_three">
              因为8080端口被占用，在config/index.js 里面修改port值即可
              <el-divider direction="vertical"></el-divider>
              cmd--> 输入 " netstat-ano " 找到" 8080 "对应的端口信息，输入 tskill PID（杀死进程）即可
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>6、EPERM: operation not permitted, rename 'C:\Users\xxx\AppData\Roaming\npm\node_modules</h4>
            </template>
            <div class="_three">
              <div>1、配置path（已配置的可跳过） 输入" npm config get prefix "，然后复制得到的路径信息，
                桌面>右键计算机>属性>高级系统设置>环境变量，在系统变量中新建变量NPM，变量值为之前复制的路径信息，
                一般是C:\Users\xxx\AppData\Roaming\npm，再在系统变量中找到path，
                添加%NPM%。一直点击保存。(这一步一般在安装node的时候，会默认给你配置，重启电脑即可)
              </div>
              <div>2、输入 npm -vc查看版本 然后输入npm i @vue/cli -g,由于这是网络问题，我们可以利用cnpm 淘宝
                镜像来安装，安装cnpm==>npm install -g cnpm --registry=https://registry.npm.taobao.org
                安装之后输入 cnpm -v 查看cnpm是否安装成功，然后输入cnpm i @vue/cli -g 即可
              </div>
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>7、报'xxx' is not defined</h4>
            </template>
            <div class="_three">
              'xxx'没有绑定属性值，添加上即可
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>8、[Vue warn]: Property or method "xxx" is not defined on the instance but referenced during render.………………</h4>
            </template>
            <div class="_three">在标签上或者定义了"xxx"方法，但是没有实现，我们只需要实现该方法或者解除绑定即可</div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>9、总结</h4>
            </template>
            <div class="_three">
              运行Vue项目报错，如果是Vue依赖有错误，我们只需要查看Vue和安装的依赖包的版本是否相对应
              然后将node_modules删除，再次安装依赖包===> cnpm/npm install,然后修改相对应的版本即可；
              如果是数据错误，我们只需要找到对应错误的行，然后进行修改，而数据错误一般都是绑定的数据
              没有实现或者方法没有实现再或者没有this指向或者this指向错误，这是我们只需要实现绑定的
              数据和方法，在方法里面将this 的值提前赋值给一个变量，然后在这个方法里面直接使用
              "变量".,实现数据和方法。
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>
    </div>
  </el-collapse-item>
</template>

<script>
export default {
  data() {
    return {
      father: `<template>
    <div>
        <h2>父组件</h2>
        <名称 message='传值给子组件'></名称>
    </div>
</template>
<sc ript>
    import 名称 from "@/路径"
    export default {
    components：{名称}
    }
</scr ipt>`,
      son:`<template>
    <div>
        <h2>子组件</h2>
        父传值{{message}}
    </div>
</template>
<s cript>
export default {
    props:{message}
}
</s cript>`,
    father1:`<template>
    <div>
        <h2>父组件</h2>子组件传递值：{{childData}}
        <名称 @名字A='名字A'></名称>
    </div>
</template>
<sc ript>
    import 名称 from "@/路径"
    export default {
    data(){return:{childData:''}}
    components：{名称},
    methods:{名字A(data){this.childData=data}}
    }
</scr ipt>`,
    son1:`<template>
    <div>
        <h2>子组件</h2>        
    </div>
</template>
<s cript>
export default {
   created:{this.father()},
   methods:{
       father(){this.$emit("名字A",传递的值)}
   }
}
</s cript>`,
    brotherA:`
    <template><div> <span>A组件->{{msg}}</span> 
    <input type="button" value="把a组件数据传给b"  @ click ="send">
    </div> <template>
    <Scr ipt>
    export default {
        data(){
              return {
                   msg:{ a:'111', b:'222'}
              }
            },
         methods(){
            send:function(){
                 vmson.$emit("aevent",this.msg)
            }
         }
    </Sc ript>
    `,
    brotherB:`<template><div><span>b组件,a传的的数据为->{{msg}}</span>     
    </div> <template>
    <Scr ipt>
    export default {
        data(){
              return {
                   msg:""
              }
            },
         mounted(){
            vmson.$on("aevent",(val)=>{//监听事件aevent，回调函数要使用箭头函数
                console.log(val);//打印结果：我是a组件的数据
                 this.msg = val;
            )}
         }
    </Sc ript>`,
    push:`getDescribe(id) {
        this.$router.push({
          path: "/describe/传递的值",
        })`,
    describe:`{
     path: '/describe/:id',
     name: 'Describe',
     component: Describe
   }`,
    push1:`this.$router.push({
          name: 'Describe',
          params: {
            id: id
          }
        })`,
    describe1:`{ path: '/describe',
     name: 'Describe',
     component: Describe
   }`,
    push2:`this.$router.push({
          path: '/describe',
          query: {
            id: id
          }
        })`,
   
    link:`<router-link></<router-link>`,
    view:`<router-view></router-view>`
    };
  }
};

</script>

<style>
._one {
  margin-left: 30px;
}
._two {
  margin-left: 40px;
  font-size: 15px;
}
._three {
  margin-left: 10px;
}
</style>