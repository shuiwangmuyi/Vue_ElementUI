<template>
  <el-collapse-item>
    <template slot="title">
      <h2>JQuery学习</h2>
    </template>
    <div>
      <el-collapse-item>
        <template slot="title">
          <h3 class="two">1、Query的特点</h3>
        </template>
        <div class="three">
          <span>轻量、开源、免费、易于学习;兼容性处理强 ;强大的选择器;链式操作;便捷的DOM操作;可靠的事件机制;封装简单易用的Ajax操作;丰富的插件()</span>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3 class="two">2、JQuery dom对象</h3>
        </template>
        <div>
          <div class="three">1. 使用JQuery选择器获取的对象不是原生的DOM对象，称之为JQuery dom对象</div>
          <div class="three">2. JQuery dom 对象本质上是有原生DOM对象组成的集合</div>
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="two">3、JQuery 全局变量</h3>
        </template>
        <div>
          <div class="three">1. 全局对象JQuery别名是 ' $ '</div>
          <div class="three">2. $ 的参数如果是DOM对象，把该对象转为JQuery DOM</div>
          <div class="three">3. $ 的参数是字符串，作为JQuery的选择器</div>
          <div class="three">4. $ 的参数是字符串，并以 &lt;
              开头，创建一个新的元素</div>
              <div
              class="three"
            > eg:{{val}}</div>
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="two">4、JQuery选择器</h3>
        </template>
        <div class="three">
          <div v-html="table"> </div>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3 class="two">5、JQuery属性操作</h3>
        </template>
        <div class="three">
          <el-collapse-item>
            <template slot="title">
              <h3>1、属性</h3>
            </template>
            <div class="five">
              <h5>1、attr(attrName[,attrValue]) 操作所有属性（自定义和内置）</h5>
              <h5>2、prop(attrName[,attrValue]) 操作HTML元素内置的属性</h5>
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h4>2、删除属性</h4>
            </template>
            <div class="five">
              <h5>1、(attrName) 删除属性（自定义和内置）</h5>
              <h5>2、removeProp(attrName</h5>
            </div>

          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3>2、CSS类</h3>
            </template>
            <div class="four">
              <h4>1、addClass() 添加一个Class值</h4>
              <h4>2、removeClass() 删除一个Class值</h4>
              <h4>3、toggleClass() 切换一个Class值</h4>
              <h4>4、hasClass() 判断是否有一个Class值</h4>
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3>3、HTML代码/文本/值</h3>
            </template>
            <div class="four">
              <h4>1、html([html])：设置或者获取元素里面的 html 代码 ==innerHTML</h4>
              <h4>2、ext([text])： 设置或者获取元素里面的文本内容 ==innerText</h4>
              <h4>3、val([value])： 设置或者表单控件里的值</h4>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3 class="two">6、JQuery 筛选操作</h3>
        </template>
        <div>
          <el-collapse-item>
            <template slot="title">
              <h3 class="three">1、串联</h3>
            </template>
            <div class="six">
              <div>1、add() 把选中的元素加入到当前的集合</div>
              <div>2、addBack() 把调用该方法的元素加入当前的集合</div>
              <div style="color:red;font-size:20px;">$(".myList").children("li").addBack().css("border","5px solid blue");
                ***注 意*** $(".myList") 得是祖先元素</div>
              <div>3、end() 返回最后一次破坏性操作之前的DOM （指查找 、筛选</div>
              <div>4、contents() 得到子元素节点的集合</div>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <h3 class="three">2、JQuery DOM对象的方法</h3>
            </template>
            <div class="six">
              <div>1、each() : 遍历</div>
              <div>2、map() ： 返回一个集合</div>
              <div>3、length ： 返回集合的个数</div>
              <div>4、index() : 返回该元素 在父元素中的索引位置</div>
              <div>5、get([index]) : 返回一个集合指定索引DOM对象</div>
              <div>6、 还可以把JQuery DOM集合转为纯数组（无参）</div>
              <div>7、Is(selectoer) : 判断JQuery DOM 是否满足某个条件</div>
            </div>
          </el-collapse-item>
          <el-collapse-item>
            <template slot="title">
              <h3 class="three">3、查找</h3>
            </template>
            <div class="six">
              <div>
                <el-divider content-position="left">父子选择器</el-divider>
              </div>
              <div>1、children([selector]) 选取子元素</div>
              <div>2、find(selecto]r) 获取后代元素</div>
              <div>3、parent([selector]) 获取父元素</div>
              <div>4、parents([selector]) 无参：获取所有的祖先元素； 有参：获取满足条件的祖先元素</div>
              <div>5、parentsUntil([selector]) 无参：获取所有的祖先元素； 有参：除了有参这个祖先元素之后的元素</div>
              <div>6、offsetParent() 返回第一个定位的祖先元素</div>
              <div>
                <el-divider content-position="left">兄弟选择器</el-divider>
              </div>
              <div>1、next([selector]) 紧邻在后面的兄弟元素</div>
              <div>2、nextAll[selector]() 后面所有的兄弟元素</div>
              <div>3、nextUntil([selector])</div>
              <div>4、prev([selector]) 紧邻在前面的兄弟元素</div>
              <div>5、prevAll([selector]) 前面所有的兄弟元素</div>
              <div>6、prevUntil([selector]) </div>
              <div>7、siblings([selector]) 所有的兄弟元素</div>
              <div>8、closest([selector]) 从所有的祖先元素和本身里面找出第一个满足条件</div>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="two">7、JQuery DOM操作</h3>
        </template>
        <div class="three">
          <el-collapse-item>
            <template slot="title">
              <h3>1、创建元素</h3>
            </template>
            <div class="four">语法： $("<元素名称>")</div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3>2、 插入</h3>
            </template>
            <div class="four">
              <div>
                <el-divider content-position="left">内部插入</el-divider>
              </div>
              <div class="three">
                <div><span class="zifu">ﻼ</span>append() 在后面插 语法：$("选择器").append("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span>appendTo() 在后面插 语法：$("<元素名称>").appendTo("选择器")</div>
                <div><span class="zifu">ﻼ</span>prepend() 在前面插 语法：$("选择器").prepend("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span>prependTo() 在前面插 语法: $("<元素名称>").prependTo("选择器")</div>
              </div>
              <div>
                <el-divider content-position="left">外部插入</el-divider>
              </div>
              <div class="three">
                <div><span class="zifu">ﻼ</span>after() 在后面插 语法：$("选择器").after("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span>insertAfter() 在后面插 语法： $("选择器").insertAfter("<元素名称>")</div>
                <div> <span class="zifu">ﻼ</span>before 在后面插 语法： $("选择器").before("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span>insertBefore() 在后面插 语法： $("选择器").insertBefore("<元素名称>")</div>
              </div>
              <div>
                <el-divider content-position="left">包裹</el-divider>
              </div>
              <div class="three">
                <div><span class="zifu">ﻼ</span> wrap() 每一个外面都添加一个新的元素
                  <el-divider direction="vertical">|</el-divider>
                  语法 $("选择器").wrap("<元素名称>")
                </div>
                <div><span class="zifu">ﻼ</span> wrapAll() 同一包裹一个元素
                  <el-divider direction="vertical">|</el-divider>
                  语语法 $("选择器").wrapAll("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span> wrapInner() 在里面添加一个新的元素
                  <el-divider direction="vertical">|</el-divider>
                  语法 $("选择器").wrapInner("<元素名称>")</div>
                <div><span class="zifu">ﻼ</span>unwrap() 去掉包裹
                  <el-divider direction="vertical">|</el-divider>
                  语法 $("选择器").unwrap("<元素名称>")</div>
              </div>
              <div>
                <el-divider content-position="left">删除</el-divider>
              </div>
              <div class="three">
                <div><span class="zifu">ﻼ</span>
                  empty() 情况选择器里面的内容 <el-divider direction="vertical">|</el-divider>语法 $("选择器").empty()
                </div>
                <div><span class="zifu">ﻼ</span>
                  remove() 删除后再恢复事件不在 <el-divider direction="vertical">|</el-divider> 语法 $("选择器").remove()
                </div>
                <div><span class="zifu">ﻼ</span>
                  detach() 删除后再恢复事件在<el-divider direction="vertical">|</el-divider> 语法 $("选择器").detach()
                </div>
              </div>
              <div>
                <el-divider content-position="left">替换</el-divider>
              </div>
              <div class="three">
                <div><span class="zifu">ﻼ</span>
                  replaceWith() <el-divider direction="vertical">|</el-divider>语法 $("选择器").replaceWith($("选择器"))
                </div>
                <div><span class="zifu">ﻼ</span>
                  replaceAll <el-divider direction="vertical">|</el-divider> 语法 $("<元素名称>").replaceAll (""选择器")
                </div>
              </div>
              <div>
                <el-divider content-position="left">克隆</el-divider>
              </div>
              <div class="three"><span class="zifu">ﻼ</span>
                clone() <el-divider direction="vertical">|</el-divider>
                语法1： $("<元素名称>").replaceAll ("选择器")<el-divider direction="vertical">|</el-divider>
                  语法2：$("选择器").append($("元素名").clone())
              </div>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>

      <el-collapse-item>
        <template slot="title">
          <h3 class="two">8、JQuery事件</h3>
        </template>
        <div>
          <el-collapse-item>
            <template slot="title">
              <h3 class="three">1、事件绑定</h3>
            </template>
            <div class="six">
              <div>1. $("选择器").事件方法名称</div>
              <div>2. $("选择器").on("事件名称",function(){})
                <el-divider direction="vertical"> </el-divider>标准绑定方式</div>
              <div>3. $("选择器").on({"事件名称":function(){}}) , "事件名称":function(){}
                <el-divider direction="vertical"></el-divider> 绑定多个</div>
              <div>4. $("选择器").one("事件名称",function(){})
                <el-divider direction="vertical"></el-divider> 绑定一次</div>
            </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3 class="three">2、解除事件绑定</h3>
            </template>
            <div class="six">解除事件绑定:off()</div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3 class="three">3、事件委派</h3>
            </template>
            <div class="six"> $("选择器").on("事件名称","选择器",function(){}) </div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <h3 class="three"> 4、控制事件触发</h3>
            </template>
            <div class="six">
              <div>("事件名称") 触发事件 $("选择器"). trigger("事件名称")</div>
              <div>triggerHander("事件名称")</div>
              <div>trigger和triggerHander 区别:</div>
              <div>1、trigger 返回的是JQuery DOM 可以连贯操作</div>
              <div>2、triggerHander 无法触发元素自带的事件</div>
              <div>3、trigger 会触发集合中所有元素的事件 而triggerHander 只会获取集合中第一</div>
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
      val: `$('<p>').html("测试添加新的元素").appendTo("#box")`,
      aa: "<h1>测试添加新的元素</h1>",   
      table: ` <table>
                <caption>1、基本选择器</caption>
                <tr style="width:100%">
                    <th>ID选择器</th>
                    <th>Class选择器</th>
                    <th>标签选择器</th>
                    <th>全局选择器</th>
                    <th>组合选择器</th>                            
                </tr>
                <tr style="width:100%">
                    <td>$("#名字")</td>
                    <td>$(".名字")</td>
                    <td>$("标签名字")</td>
                    <td>$("*")</td>
                    <td>$("名字,名字") <span style="background-color: darkgray;">eg:$("li,p")</span></td>
                </tr>
            </table>
           <table>
             <caption>2、层级选择器</caption>
             <tr style="width:100%">
                <th>选择器 选择器</th>
                <th>选择器>选择器</th>
                <th>选择器+选择器</th>
                 <th>选择器~选择器</th>                                               
             </tr>
             <tr style="width:100%">                    
                <td> ui li&nbsp;&nbsp;&nbsp;后代元素</td>
                <td> ui>li&nbsp;&nbsp;&nbsp;子元素</td>
                <td> 紧领的兄弟元素</td>
                <td>后面的兄弟元素</td>
            </tr>
          </table>
          <table>
            <caption>3、属性选择器</caption>
            <tr style="width:100%">
                <th>等于某个字符</th>
                <th>不等于某个字符</th>
                <th>以某给字符开头</th>
                <th>以某个字符结尾</th>
                <th>包含某个字符</th>
                <th>多个属性选择器</th>                                               
            </tr>
            <tr style="width:100%">
                <td>[attribute=value]</td>
                <td>[attribute!=value]</td>
                <td>[attribute^=value]</td>
                <td>[attribute$=value]</td>
                <td>[attribute*=value]</td>
                <td>[attrSel1]~[attrSelN]</td>                      
            </tr>
        </table>
        <table>
            <caption>4、子元素选择器</caption>
            <tr style="width:100%">
                <th>第一个</th>
                <th>最后一个</th>
                <th>选择第一个(从一开始)</th>
                <th>选择倒数第几个</th>
                <th>没有兄弟元素</th>
                <th>兄弟元素相同标签的第一个</th>                                               
            </tr>
            <tr style="width:100%">
                <td>:frist-child</td>
                <td>:Last-child</td>
                <td>:nth-child(index)</td>
                <td>:nth-last-child(index)</td>
                <td>:only-child</td>
                <td>:frist-of-type</td>                      
            </tr>
        </table>
         <table>
            <caption>4、表单选择器</caption>
            <tr style="width:100%">
                <th style="line-height: 20px;">所有表单控件(input、textarea、select、button……)</th>
                <th>根据input中type的值</th>
                <th>button元素input：button</th>
                <th style="line-height: 20px;">所有具有提交功能的按钮（button input：submit）</th>                                                             
            </tr>
            <tr style="width:100%">
                <td>:input</td>
                <td>:text/:password/:radio/:checkbox/:file/:reset</td>
                <td>:button  </td>
                <td>:submit</td>                              
            </tr>
         </table>`
    };
  }
};
</script>

<style>
    .three table {
        margin-top: 5px;
        width: 1000px;
    }
    .three table caption {
        font-weight: bold;
        font-size: 20px;
    }
   .three table th,td {
        width: 300px;
        line-height: 41px;
        text-align: center;
    }
    .three table td {
         border-top: 1px solid grey;
    }
    .two,.four,.five {
        margin-left: 30px;
    }
    .three {
        margin-left: 60px;
        font-size: 15px;
    }
    .six {
       margin-left: 70px;
    }
    .zifu {
        font-size: 12px;
        margin-right: 8px;
        font-weight: bold;
    }
    .zifu1 {
         margin-left: 8px;
    }
    .el-collapse-item__content {
        padding-bottom: 0px;
    }
</style>