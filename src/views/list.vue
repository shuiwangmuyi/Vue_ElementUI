<template>
    <div style="width:100%;">
        <el-table
            :data="tableData.slice((currpage - 1) *
            pagesize, currpage * pagesize)"
            border
            :row-class-name="tableRowClassName"
            style="width: 100%"
            height="790">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="时间"
                prop="date">
            </el-table-column>
            <el-table-column
                label="姓名"
                prop="name">
            </el-table-column>
            <el-table-column
                label="地址"
                prop="address">
            </el-table-column>
            <el-table-column
                label="经度"
                prop="longitude">
            </el-table-column>
            <el-table-column
                label="维度"
                prop="latitude">
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="根据姓名搜索"/>
                    <el-tooltip effect="light"
                        content="添加"
                        placement="top">
                        <el-button type="primary" @click="add"
                                    size="mini"
                                    icon="el-icon-circle-plus">
                        </el-button>
                    </el-tooltip>
                </template>
                <template slot-scope="scope">
                    <el-tooltip effect="light"
                        content="修改"
                        placement="top">
                        <el-button
                            size="mini"
                            type="warning"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, tableData)">
                        </el-button>
                    </el-tooltip>
                    <el-tooltip effect="light"
                        content="查看"
                        placement="top-end" :enterable="false">
                        <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-view"
                            @click="selectMap(scope.$index, tableData)">
                        </el-button>
                    </el-tooltip>
                    <el-tooltip effect="light"
                        content="删除"
                        placement="top">
                        <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-delete"
                            @click="handleDelete(scope.$index, tableData)">
                        </el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
            
        </el-table>
          <el-pagination background
            layout="prev, pager, next, sizes, total, jumper"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15]"
            :page-size="pagesize"
            :total="tableData.length"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange">
        </el-pagination>
        <!-- 修改/添加 -->
       <el-dialog :title="title" :visible.sync="dialogFormVisible">
           <el-form :model="form"
                    status-icon
                    ref="formRef">
                <el-form-item label="时间" label-width="120px">
                    <el-date-picker
                        v-model="form.date"
                        align="right"
                        type="date"
                        format="yyyy- MM-dd"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期">
                        </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" label-width="120px">
                    <el-input v-model="form.name"
                    autocomplete="off" :disabled='disabled'>
                    </el-input>
                </el-form-item>
                <el-form-item label="地址" label-width="120px">
                    <el-input v-model="form.address" autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item label="经度" label-width="120px"
                               prop="longitude">
                    <el-input v-model="form.longitude"
                        autocomplete="off">
                    </el-input>
                </el-form-item>
                <el-form-item label="纬度" label-width="120px"
                            prop="latitude">
                    <el-input v-model="form.latitude" autocomplete="off">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogCancel">取 消</el-button>
                <el-button type="primary" @click="dialogDefine">确 定</el-button>
            </div>
       </el-dialog>
    </div>
</template>
<style >
  .el-table th>.cell .el-input{
     width: 160px;
  }
  .el-form-item__content .el-date-editor.el-input{
      width: 100%
  }
  .el-dialog__footer{
    padding: 20px 20px 20px;
  }
  .el-dialog__body{
    display: inline-block;
    position: relative;
    width: 80%;
  }
  .el-pager li{
     width: 20px;
  }
	.el-pagination{
		position: absolute;
    text-align: end;
    width: 90%;
	}
  .el-pagination  .el-pager{
    height: 100%;
  }
  .el-table .warning-row {
    background-color: red;
  }
  .el-table .success-row {
      background: #f0f9eb;
  }
</style>
<script>
export default ({
  data () {
    return {
      form: {
        date: '',
        name: '',
        address: '',
        longitude: '',
        latitude: ''
      }, // 修改的信息或者添加信息
      title: '修改信息', // 弹框头
      dialogFormVisible: false, // 是否显示
      pagesize: 10, // 页面条数
      currpage: 1, // 当前页
      _currpage: '',
      currentPage: 1, // 跳转页面
      tableData: [],
      dataTable: [], // 定义一个中间变量
      _index: '', // 定义一个中间变量
      _row: '', // 定义一个中间变量
      search: '',
      disabled: 'true'
    }
  },
  created () {
    this.GetList()
  },
  mounted () {
   // this.GetUserName()
  },
  // 添加监听事件实现搜索
  watch: {
    // 实现搜索
    search: function (val) {
      var _this = this
      // console.log(_this.dataTable)
      _this.tableData = _this.dataTable.filter(data =>
        !val || data.name.toLowerCase().includes(
          val.toLowerCase()))
    }
  },
  methods: {
    GetUserName () {
      if (this.$route.query.userName == undefined || this.$route.query.userName == null) {
         this.$router.push('/login') 
      }
    },
    // 数据
    GetList () {
      //this.axios.get('http://122.51.230.174:5000/api/SelectInfor')
        this.axios.get('http://localhost:5000/api/SelectInfor')
        .then(response => {
          //  console.log(response.data)
          if (response.data.message == '查询数据失败') {
            this.$message({
              message: '查询数据失败',
              center: true
            })
          } else {
            this.dataTable = response.data
            this.tableData = this.dataTable
          }
        }).catch(error => {
          console.log(error)
        })
    },
    handleCurrentChange (cpage) {
      console.log('==============' + cpage)
      this.currpage = cpage
    },
    handleSizeChange (psize) {
      console.log('==============' + psize)
      this.pagesize = psize
    },
    add () {
      this.disabled = false
      this.title = '添加信息'
      this.dialogFormVisible = true
      this.form.name = ''
      this.form.date = ''
      this.form.longitude = ''
      this.form.latitude = ''
      this.form.address = ''
      console.log(this.form)
      this.dialogFormVisible = true
    },
    // 编辑
    handleEdit (index, row) {
      this._index = index // 当前第几行  从0 开始
      this._row = row // 这个是后面需要的，你不要管
      this.disabled = true
      this.title = '修改信息'
      this.dialogFormVisible = true // 这句你懂吧
      // 这个就是分页的一个算法而已 如果你只有一页  直接 this.form=row[index]
      this.form = row[(this.currpage - 1) * this.pagesize + this._index]
    },
    // 取消编辑信息
    dialogCancel () {
      this.dialogFormVisible = false
    },
    // 确认编辑(添加信息)信息
    dialogDefine (data) {
      if (this.disabled == false) { // 添加
        if (this.form.name === '' && this.form.date === '' &&
                        this.form.longitude === '' && this.form.latitude === '' &&
                        this.form.address === '') {
          const h = this.$createElement
          return this.$notify({
            title: '警告',
            message: h('b', { style: 'color: teal' },
              '请输入信息'),
            type: 'warning'
          })
        } else { // 插入数据
          this.axios({
            method: 'POST',
           // url: 'http://122.51.230.174:5000/api/AddInfor',
           url:"http://localhost:5000/api/AddInfor",
            data: this.form
          }).then(res => {
            if (res.data.state != 1) {
              this.$message({
                message: '插入数据失败',
                center: true
              })
            } else {
              this.$message({
                message: '插入数据成功',
                center: true
              })
            }
          }).catch(error => {
            this.$message({
              message: '插入数据失败',
              center: true
            })
          })
        }
        this.dataTable.unshift(this.form)// 前面添加
      } else { // 修改
        const _data = this._row[(this.currpage - 1) * this.pagesize + this._index]
        this.axios({
          method: 'POST',
         // url: 'http://122.51.230.174:5000/api/updateInfro',
          url:"http://localhost:5000/api/updateInfro",
          data: _data
        })
          .then(res => {
            if (res.data.state != 1) {
              this.$message({
                message: '更新失败',
                center: true
              })
            } else {
              this.$message({
                message: '更新成功',
                center: true
              })
            }
          }).catch(error => {
            this.$message({
              message: '更新成失败',
              center: true
            })
          })
        this.dataTable[(this.currpage - 1) * this.pagesize + this._index] = this._row[(this.currpage - 1) * this.pagesize + this._index]
      }
      this.dialogFormVisible = false
    },
    // 删除
    handleDelete (index, rows) {
      let n = 0
      alert((n++) + '')
      const num = (this.currpage - 1) * this.pagesize + index // 找到当前行
      const delVal = rows[num]
      // console.log(delVal)
      this.axios({
        method: 'post',
       // url: 'http://122.51.230.174:5000/api/deleteInfro',
       url:"http://localhost:5000/api/deleteInfro",
        data: delVal
      })
        .then(res => {
          console.log(res)
          if (res.data.state != 1) {
            this.$message({
              message: '删除失败',
              center: true
            })
          } else {
            this.$message({
              message: '删除成功',
              center: true
            })
            if (num % this.pagesize == 0) {
              this.GetList()
            }
          }
        }).catch(error => {
          this.$message({
            message: '删除失败',
            center: true
          })
        })
      rows.splice(num, 1)
    },
    // 根据经纬度查看地图
    selectMap (index, rows) {
     // console.log(rows[(this.currpage - 1) * this.pagesize + index])
      this.$router.push({
        name: 'map',       
        params: {
          longitude: rows[(this.currpage - 1) * this.pagesize + index].longitude,
          latitude: rows[(this.currpage - 1) * this.pagesize + index].latitude
        }
      })
    },
    // 表格状态
    tableRowClassName ({ row, rowIndex }) {
      // rowIndex:每行的行号 row：每一行的数据
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
})
</script>
