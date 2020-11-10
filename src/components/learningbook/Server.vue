<template>
  <el-collapse-item>
    <template slot="title">
       <h2>SQl Server学习</h2>
    </template>
    <div>
      <el-collapse-item>
        <template slot="title">
          <h3>一、建立数据库、建立、删除表</h3>
        </template>
        <div>
            <el-divider content-position="left">创建数据库语句</el-divider>
            <el-card>craete database 数据库名称</el-card> 
            <el-divider content-position="left">找到指定的数据库</el-divider>
            <el-card>use 数据库名称 go</el-card>   
            <el-divider content-position="left">创建数据表语句</el-divider>
            <el-card>craete table 表名称(字段名1 类型,字段名2 类型,字段名3 类型,……)</el-card>
            <el-divider content-position="left">删除数据表语句</el-divider>
            <el-card>drop table 表名称(字段名1,字段名2,字段名3……)</el-card>              
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
           <h3>二、主键和外键</h3>
        </template>
        <div>
          <el-divider content-position="left">创建主键语句</el-divider>
          <el-card>craete table 表名称(字段名1 类型 primary key,字段名2 类型,字段名3 类型,……)======>其中primary key是设置主键</el-card>
          <el-divider content-position="left">创建外键语句</el-divider>
          <el-card>craete table 表名称A(字段名1 类型 primary key,字段名2 类型 foreign key references 表名称B(表名称B对应的主键),字段名3 类型,……)======>其中foreign key references 是设置外键</el-card>
          <el-divider content-position="left">创建已存在表的主键</el-divider>
          <el-card>alter table 表名称A add constraint 主键名称 primary key (表名称A的主键)</el-card>
          <el-divider content-position="left">创建已存在表的外键</el-divider>
          <el-card>alter table 表名称A add constraint 外键名称 foreign key (表名称A需要设计的字段) references 表名称B(表名称B主键)</el-card>

        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3>三、数据表字段增删改</h3>
        </template>
        <div>
          <el-divider content-position="left">增加字段</el-divider>
          <el-card>
            alter table 表名 add 字段名 类型
          </el-card>
           <el-divider content-position="left">删除字段</el-divider>
          <el-card>
            alter table 表名 drop 字段名
          </el-card>
          <el-divider content-position="left">修改字段名称</el-divider>
          <el-card>
            alter table 表名  rename column A to B
          </el-card>
           <el-divider content-position="left">修改字段类型</el-divider>
          <el-card>
            alter table 表名 alter column 字段名 类型
          </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3> 四、"增删改查"之"增"</h3>
        </template>
        <div>
          <el-divider content-position="left">添加数据</el-divider>
          <el-card>insert into 表名称(字段名1,字段名2,……) values(value1,value2)</el-card>
          <el-divider content-position="left">添加多条数据(只需使用union关键字)</el-divider>
          <el-card>insert into 表名称(字段名1,字段名2 类型,……) select value1 ,value2…… union select value1 ,value2……</el-card>
          <el-divider content-position="left">通过数据库中的其他表导入数据</el-divider>
          <el-card>
            第一种：select * into 需要插入表的名称 from 导入表的名称 where 条件=值<br>
            第二种：insert into 需要插入表的名称(字段)  select 字段 from 导入表的名称  where 条件=值
          </el-card>
          <el-divider content-position="left">excel表导入数据</el-divider>
          <el-card>右击数据库名称==>任务==>导入数据==>下一步==>
                    数据源选择Excel,文件路径以及Excel版本==>下一步==>选择数据库
                    下一步==>选择一个或者多个表或视图的全部数据==>下一步==>选择数据表
                    ==>一直下一步直到完成即可<br>
                    <span style="color:red;font-size:18px;">
                      **：提示未在本地计算机上注册MicRosoft提供程序。
                      我们需要去
                      <a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=c06b8369-60dd-4b64-a44b-84b371ede16d&displayLang=zh-cn ">
                      点击下载</a>。下载安装好之后重试即可
                    </span>

          </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3> 五、"增删改查"之"删"</h3>
        </template>
        <div>
          <el-divider content-position="left">删除单行数据</el-divider>
          <el-card>DELETE FROM 表名称 WHERE 列名称 = 值</el-card>
          <el-divider content-position="left">删除所有行数据</el-divider>
          <el-card>DELETE FROM 表名称</el-card>
          <el-divider content-position="left">删除所有行数据</el-divider>
          <el-card>DELETE FROM 表名称|DELETE * FROM 表名称</el-card>
          <el-divider content-position="left">删除表格中的索引</el-divider>
          <el-card>DROP INDEX 表名称.索引名</el-card>
          <el-divider content-position="left">删除表（表的结构、属性以及索引也会被删除）</el-divider>
          <el-card>DROP TABLE  表名称</el-card>
          <el-divider content-position="left">删除数据库</el-divider>
          <el-card>DROP DATABASE 数据库名称</el-card>        
          <el-divider content-position="left">删除表格中的数据</el-divider>
          <el-card>TRUNCATE TABLE 表名称</el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3> 六、"增删改查"之"改"</h3>
        </template>
        <div>
          <el-divider  content-position="left">修改数据</el-divider>
          <el-card>UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 值</el-card>          
        </div>
      </el-collapse-item>
       <el-collapse-item>
        <template slot="title">
          <h3> 七、"增删改查"之"查"</h3>
        </template>
        <div>
          <el-divider  content-position="left">查询数据</el-divider>
          <el-card>SELECT 需要查询的字段 FROM 表名称 WHERE 条件</el-card>          
          <el-divider  content-position="left">Isnull函数：判断空值</el-divider>
          <el-card>SELECT isnull(需要判断字段,'') FROM 表名称</el-card> 
           <el-divider  content-position="left">order by 排序(默认就是asc正序排序)</el-divider>
          <el-card>
            倒序:SELECT 需要查询的字段 FROM 表名称 WHERE 条件 order by 需要排序的字段 desc<br>
            顺序:SELECT 需要查询的字段 FROM 表名称 WHERE 条件 order by 需要排序的字段 asc
          </el-card>
           <el-divider  content-position="left">条件查询之比较运算符，关键字:where</el-divider>
           <el-card>             
               <div>比较运算符有 =、>、<、>=、<=、<>("<>"是不等于的意思)</div>           
               <div>select 需要查询的字段 from 表名称 where 字段 <> 值  </div>      
           </el-card>
             <el-divider  content-position="left">条件查询之or/and，关键字:where</el-divider>
           <el-card>             
               <div>or满足一方即可，and 条件都需要满足</div>           
               <div>select 需要查询的字段 from 表名称 where 条件1 and  条件2 or 条件3 </div>      
           </el-card>
           <el-divider  content-position="left">条件查询之通配符，关键字:where</el-divider>
           <el-card>             
               <div>like代表要模糊查找, "%"代表任意符，表示可以有任何东西也可以没有,_"代表占位符，就是有且仅有一个字母</div>           
               <div>select 需要查询的字段 from 表名称 where 字段 like 值 </div>      
           </el-card>
             <el-divider  content-position="left">条件查询之in 或 not in，关键字:where</el-divider>
           <el-card>             
               <div>in在这个条件范围内，not in 不在这个范围内</div>           
               <div>select 需要查询的字段 from 表名称 where 字段 in 值 </div>      
           </el-card>
           <el-divider  content-position="left">条件查询之 is null 或 is not null，关键字:where</el-divider>
           <el-card>             
               <div>is (not) null 是否是空值</div>           
               <div>select 需要查询的字段 from 表名称 where 字段 in is (not) null </div>      
           </el-card>
           <el-divider  content-position="left">条件查询之 between...and……，关键字:where</el-divider>
           <el-card>
              <div>操作符 BETWEEN ... AND 会选取介于两个值之间的数据范围。这些值可以是数值、文本或者日期。
                  （在SQLServer中两个端点的值都会包括）</div>           
              <div>select 需要查询的字段 from 表名称 where 字段 (not) between 值 and 值 </div>      
           </el-card>
           <el-divider  content-position="left">条件查询之 group by & having，关键字:where</el-divider>
           <el-card>
              <div>聚合函数:统计：count、平均值：Avg、最小值：Min：最大值：Max、求和：Sum</div>
              <div>select 函数(字段名) from 表名 where 条件</div>
           </el-card>
           <el-card>
              <div>group by 分组</div>
              <div>select 函数(字段名A) from 表名 where 条件 group by 字段名A==>这是对不同字段名A值进行分组计算</div>
           </el-card>
             <el-card>
              <div>having  对结果进一步筛选</div>
              <div>select 函数(字段名A) from 表名 where 条件 
                group by 字段名A having 条件1==>这是对不同字段名A值进行分组计算并且还需要满足条件1</div>
           </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
            <h3>八、存储过程</h3>
        </template>
        <div>
          <el-divider content-position="left">创建简单的存储过程</el-divider>
          <el-card>
            create proc 存储过程名<br>
            as<br>
            begin<br>
              &emsp;需要实现的功能<br>
            end<br>
              <span style="color: red; font-size: 18px;">创建完后，调用语句格式 exec + 存储过程名：exec usp_helloworld</span>
          </el-card >
          <el-divider content-position="left">创建带参数的存储过程</el-divider>
          <el-card>
            create proc 存储过程名<br>
            @变量1 nvarchar(50),<br>
            @变量2 nvarchar(50)<br>
            as<br>
            begin<br>
              &emsp;select * from book where 字段1=@变量1 and 字段2=@变量2<br>
            end<br>
           <span style="color: red; font-size: 18px;"> 
             执行方法1：exec 存储过程名 值1,值2 &emsp;&emsp;
             执行方法1：exec 存储过程名 @变量1=值1,@变量2=值2    
           </span>
          </el-card>
          <el-divider content-position="left">创建带默认值的存储过程</el-divider>
          <el-card>
            create proc 存储过程名<br>
            @变量1 nvarchar(50)  = 值1<br>
            as<br>
            begin<br>
              &emsp;select * from hero where hero=@变量1<br>
            end<br>
            <span style="color: red; font-size: 18px;"> 
             执行方法： exec 存储过程名
            </span>
          </el-card>
         <el-divider content-position="left">创建带输出参数的存储过程output关键字</el-divider> 
         <el-card>
           create proc 存储过程名<br>
          @变量1 nvarchar(50),<br>
          @变量2 int output --关键字代表输出参数<br>
          as<br>
          begin<br>
            &emsp;select * from hero where 字段1=@变量1<br>
            &emsp;--把查询的记录条数赋值给变量@recordCount<br>
            &emsp;set @变量2 = (select count(*) from 表名 where 字段1=@变量1)<br>
          end <br>
          <span style="color: red; font-size: 18px;"> 
             执行方法：先定义变量：declare @变量A 类型<br>
                      exec usp_output @变量1=值,@变量2=@变量A output
                      select @变量A
          </span>

         </el-card>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template slot="title">
          <h3>九、主键、外键和索引的区别</h3>
        </template>
        <div>
          <el-card>
            <table class="table1">
              <thead>
              <tr>
              <th class="th1" style="text-align:center">区别</th>
              <th class="th1" style="text-align:center">主键</th>
              <th class="th1" style="text-align:center">外键</th>
              <th class="th1" style="text-align:center">索引</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td class="td1" style="text-align:center">定义</td>
              <td class="td1" style="text-align:center">唯一标识一条记录，不能有重复的，不允许为空</td>
              <td class="td1" style="text-align:center">表的外键是另一表的主键, 外键可以有重复的, 可以是空值</td>
              <td class="td1" style="text-align:center">该字段没有重复值，但可以有一个空值</td>
              </tr>
              <tr>
              <td class="td1" style="text-align:center">作用</td>
              <td class="td1" style="text-align:center">用来保证数据完整性</td>
              <td class="td1" style="text-align:center">用来和其他表建立联系用的</td>
              <td class="td1" style="text-align:center">是提高查询排序的速度</td>
              </tr>
              <tr>
              <td class="td1" style="text-align:center">个数</td>
              <td class="td1" style="text-align:center">主键只能有一个</td>
              <td class="td1" style="text-align:center">一个表可以有多个外键</td>
              <td class="td1" style="text-align:center">一个表可以有多个唯一索引</td>
              </tr>
              </tbody>
              </table>
          </el-card>
          <el-divider content-position="left">主外键起约束作用</el-divider>
          <el-card>
            <div> 外键取值规则：空值或参照的主键值。</div>
            <div>(1)插入非空值时，如果主键表中没有这个值，则不能插入。</div>
            <div>(2)更新时，不能改为主键表中没有的值。</div>
            <div>(3)删除主键表记录时，你可以在建外键时选定外键记录一起级联删除还是拒绝删除。</div>
            <div>(4)更新主键记录时，同样有级联更新和拒绝执行的选择</div>
          </el-card>
        </div>
      </el-collapse-item>
    </div>
  </el-collapse-item>
</template>

<script>
export default {

}
</script>

<style>
.table1{
    border: 1px solid #dfdfdf;
    border-collapse: collapse;
    word-break: break-word;
}
.th1,.td1{
    border: 1px solid #c0c0c0;
    border-collapse: collapse;
    padding: 8px 14px;
    min-width: 50px;
}


</style>