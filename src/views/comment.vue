<template>
  <div class="demo">
    <div  
      style="overflow:auto"
      v-for="item in conns"
      :key="item.Id"
    >
      <span>{{item.content}}</span>
      <el-divider content-position="right">{{item.time | dateString('yyyy-MM-dd hh:mm')}} 
        <el-divider direction="vertical"></el-divider>作者:{{item.commenter}}
      </el-divider>
    </div>
  </div>
</template>
<style>
.demo{
    width: 90%;
    margin: 0 auto;
    height: 666px;
}
</style>
<script>
var padDate = function(value) {
  return value < 10 ? "0" + value : value;
};
export default {
  data() {
    return {
      count: 0,
      conns: []
    };
  },
  created() {
    this.selectComment();
  },
  mounted() {
    //this.GetUserName()
  },
  methods: {
    GetUserName(){
      if(this.$route.query.userName==undefined||this.$route.query.userName==null)
        this.$router.push("/login");
    },
    load() {
      this.count += 2;
    },
    selectComment() {
      var that = this;
      this.axios({
        method: "get",
      //  url: "http://122.51.230.174:5000/api/SelectComment"
      url:"http://localhost:5000/api/SelectComment"
      })
        .then(res => {
          that.conns = res.data.message;
          // console.log(that.conns.length)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    dateString(value, format) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = padDate(date.getMonth() + 1);
      var day = padDate(date.getDate());
      var hours = padDate(date.getHours());
      var minutes = padDate(date.getMinutes());
      var seconds = padDate(date.getSeconds());
      return year + "-" + month + "-" + day + "-" + " " + hours + ":" + minutes;
    }
  }
};
</script>