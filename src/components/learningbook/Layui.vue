<template>
    <el-collapse-item>
        <template slot="title">
            <h2> Layui插件学习 </h2>             
        </template>
        <div>
            <el-card>
                在使用LayUI之前，请到 
                <el-link  type="primary" :underline="false" href="https://www.layui.com/" target="_blank">LayUI</el-link>
                官网进行下载。<br>
                然后在页面分别引用LayUI.css和LayUI.js。要注意的是LayUI是个jQuery框架适合服务端渲染的项目，
                是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用
                和Vue结合不是特别好使用
            </el-card>
            <el-collapse-item>
                <template slot="title">
                    <h3>一、动画</h3>             
                </template>
                <div class="layui">
                    <span>例子:&lt;div class="layui-anim layui-anim-up"&gt;&lt;/div&gt;</span>
                    <el-card>
                        <div slot="header">
                            <span>其中 layui-anim 是必须的，后面跟着的即是不同的动画类。</span>
                            <span>循环动画，追加：layui-anim-loop</span>
                        </div>
                        <div>
                            layui-anim-up:从最底部往上滑入;
                            layui-anim-upbit:微微往上滑;
                            layui-anim-scale:平滑放大;
                            layui-anim-scaleSpring:弹簧式放大;
                            layui-anim-fadein:渐现;
                            layui-anim-fadeout:渐隐;
                            layui-anim-rotate:360度旋转;
                            追加：layui-anim-loop:循环动画
                        </div>
                    </el-card>
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>二、按钮</h3>
                </template>
                <div class="layui">
                    <span>
                        例一、&lt;button type="button" class="layui-btn"&gt;一个标准的按钮&lt;/button&gt;
                       <br> 例二、&lt;a href="http://www.layui.com" class="layui-btn"&gt;
                        一个可跳转的按钮&lt;/a&gt;</span>
                    <el-card>
                        <div slot="header">
                            <span style="font-size:20px;">主题</span>
                        </div>
                        <div>
                            原始	class="layui-btn layui-btn-primary"<br>
                            默认	class="layui-btn"<br>
                            百搭	class="layui-btn layui-btn-normal"<br>
                            暖色	class="layui-btn layui-btn-warm"<br>
                            警告	class="layui-btn layui-btn-danger"<br>
                            禁用	class="layui-btn layui-btn-disabled"
                        </div>
                    </el-card>
                    <el-card>
                        <div slot="header">
                            <span style="font-size:20px;">尺寸</span>
                        </div>
                        <div>
                            大型	class="layui-btn layui-btn-lg"<br>
                            默认	class="layui-btn"<br>
                            小型	class="layui-btn layui-btn-sm"<br>
                            迷你	class="layui-btn layui-btn-xs"   <br>                         
                        </div>
                    </el-card>
                     <el-card>
                        <div slot="header">
                            <span style="font-size:20px;">圆角</span>
                        </div>
                        <div>
                            原始	class="layui-btn layui-btn-radius layui-btn-primary"<br>
                            默认	class="layui-btn layui-btn-radius"<br>
                            百搭	class="layui-btn layui-btn-radius layui-btn-normal"<br>
                            暖色	class="layui-btn layui-btn-radius layui-btn-warm"<br>
                            警告	class="layui-btn layui-btn-radius layui-btn-danger"<br>
                            禁用	class="layui-btn layui-btn-radius layui-btn-disabled"                         
                        </div>
                    </el-card>
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>三、表单</h3>
                </template>
                <div>
                    <el-card>
                        <div slot="header">
                            <label>输入框</label>                            
                        </div>
                        <div>
                            &lt;input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input"&gt;                             
                        </div>
                    </el-card> 
                    <el-card>
                        <div slot="header">
                            <label>复选框</label>
                        </div>
                        <div>
                            {{checkbox}}<br>{{checkbox1}}
                        </div>
                    </el-card>   
                    <el-card>
                        <div slot="header">单选框</div>
                        <div>
                          未选中:&emsp;  &lt;input type="radio" name="sex" value="nan" title="男"&gt;<br>
                          选中:  &emsp;  &lt;input type="radio" name="sex" value="nv" title="女" checked&gt;<br>
                          禁止:  &emsp;  &lt;input type="radio" name="sex" value="" title="中性" disabled&gt;<br>
                        </div>
                    </el-card> 
                     <el-card>
                        <div slot="header"><label>文本域</label></div>
                        <div>
                          &lt;textarea name="" required lay-verify="required" placeholder="请输入" class="layui-textarea"&gt; &lt;&#47; textarea &gt;
                        </div>
                    </el-card>               
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>四、Tab选项卡</h3>
                </template>
                <div>
                    <el-card>
                        <div slot="header">
                            <span>
                                Tab选项卡是格式是:在" DIV "里面加入列表元素(ul>li),而在DIV添加class属性值是layui-tab,
                                ul属性class值为layui-tab-title,在默认选中li属性class值为layui-this,每一个选项卡里面的内容
                                添加是另外添加一个DIV+DIV,其实div中的class值是layui-tab-conten,
                                而与之对应的DIV的class值为layui-tab-item layui-show,而默认值是layui-tab-item
                            </span>
                        </div>
                        <div>
                            &lt;div class="layui-tab" &gt;
                                &lt;ul class="layui-tab-title" &gt;
                                    &lt;li calss="layui-this"&gt;&lt;&#47;li&gt;                                    
                                    &lt;li &gt; &lt;&#47;li&gt;
                                    …………
                                &lt;&#47;ul&gt;
                            &lt;&#47;div&gt;
                            <br>
                            &lt;div class="layui-tab-conten" &gt;
                                &lt;div class="layui-tab-item layui-show" &gt;                            
                                &lt;&#47;div&gt;
                                …………
                            &lt;&#47;div&gt;
                            <div style="color:red;font-size:18px;">
                                如果是想带有删除选项卡,只需要在第一个DIV的class添加lay-allowClose="true"这个属性值即可
                                另外上面的省略号是接最近的元素
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>五、弹出层</h3>
                </template>
                <div>
                    <el-card>
                        <div slot="header">
                            1、LayUI弹框组件作为单独使用时，应先layui.js文件
                            <el-divider></el-divider>
                            2、当然如果是layui 模块化使用 应先引入layui.css和layui.js文件,通过layui.use('layer', callback)加载模块
                        </div>
                        <div>
                            <h2 style="color:red">LayUI弹框常用的方法</h2>
                            1、layer.open(options) - 原始核心方法、
                            <el-divider></el-divider>
                            2、layer.alert(content, options, yes) - 普通信息框
                            <el-divider></el-divider>
                            3、layer.confirm(content,options, yes, cancel) - 询问框
                            <el-divider></el-divider>
                            4、layer.msg(content, options, end) - 提示框
                            <el-divider></el-divider>
                            5、layer.load(icon, options) - 加载层
                            <el-divider></el-divider>
                            6、layer.title(title, index) - 改变层的标题                            
                        </div>
                    </el-card>
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>六、数据表格</h3>
                </template>
                <div>
                    <span>
                        1、LayUI插件的数据表格功能非常强大,而且在里面自定义了一个和Ajax的方法,
                        并且集合了Excel的部分功能(比如：打印、筛选、排序、导出CSV和Excel文件)
                        具体如下：
                    </span>
                     <el-divider></el-divider>
                     <span>
                        2、在使用layUI插件的数据表格时,我们需要引用layUI.css和layUI.js
                        然后在html中添加一个table标签,在里面添加ID值、lay-filter值以及class值为layui-hide
                     </span>
                     <el-divider></el-divider>
                     <span>
                         3、在JS中需要先初始化layUI.use,即layui.use('table', function(){})
                            在里面初始化table,即 var table = layui.table;
                            然后就开始操作数据表格了,这里是用table.reader({})来读取的。
                            里面的的参数分别是 elem:table的ID值,URL:操作数据的方法路径;
                            toolbar:bool(是否显示工具条);title:数据表名称;
                            where:条件;method:提交方式
                            cols:需要操作的数据列(<span style="color:red;">
                                里面每一个field对应的Value必须和获取的数据的Key值一一对应</span>),
                                然后这里可以设置每一列对应的格式(对齐、隐藏、修改、排序、统计、名称等);
                            page:bool,是否分页;
                            limits: 显示几条数据(数组形式);
                            limit: 每页默认显示的数量 ;
                            next:bool,下一页;
                            prev: bool,上一页;
                            response：重新规定成功的状态码为 200，table 组件默认为 0;
                            parseData: function(res){ //将原始数据解析成 table 组件所规定的数据
                            return {
                                "code": res.status, //解析接口状态
                                "msg": res.message, //解析提示文本
                                "count": res.total, //解析数据长度
                                "data": res.rows.item //解析数据列表
                            };
                     </span>
                    <el-divider></el-divider>                    
                </div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <h3>七、总结</h3>
                </template>
                <div>
                    <el-card>
                        其实LayUI插件是针对DOM操作、适合jQuery框架适合服务端渲染的项目
                        想利用LayUI做前端项目，只需要去
                        <el-link  type="primary" :underline="false" href="https://www.layui.com/" target="_blank">
                        layUI官网下载</el-link>,然后在各自的页面引用其CSS和JS即可，
                        最后前端页面在各自的元素添加相对应的class属性即可。
                        在layUI插件中，其数据表格和即时通讯这两大模块个人觉得是亮点，
                        数据表格

                    </el-card>
                </div>
            </el-collapse-item>
        </div>
    </el-collapse-item>
</template>
<script>
import Vue from 'vue'

export default ({
    data(){
        return{
            checkbox:`默认风格：
                    <input type="checkbox" name="" title="写作" checked>      
                    <input type="checkbox" name="" title="发呆">       
                    <input type="checkbox" name="" title="禁用" disabled>    
                   `,
            checkbox1:` 原始风格：
                    <input type="checkbox" name="" title="写作" lay-skin="primary" checked>
                    <input type="checkbox" name="" title="发呆" lay-skin="primary"> 
                    <input type="checkbox" name="" title="禁用" lay-skin="primary" disabled> `
        }
    } ,    
})
</script>
<style>
    .layui{
        margin-left: 20px;
    }
    .el-card__header{
        padding: 10px 20px;
    }
    .layui-form-item{
        margin-bottom: 0;
    }
    .layui-form-label{
        padding-left: 0;
    }
</style>