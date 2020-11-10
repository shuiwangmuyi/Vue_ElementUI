<template>
  <div>
     <homeMap></homeMap> 
     <echartLine></echartLine>
     <div>
        <echart></echart>
       <EditText></EditText>
     </div>
     
  </div>
</template>
<script>
  import homeMap from "../components/home/homeMap";
  import EditText from '../components/home/EditText'
  import echart  from '../components/home/echart'
  import echartLine  from '../components/home/echartline'
  export default ({
    data() {
      return {
        points: {
          lng: "12.5",
          lat: "15.1"
        }
      };
    },
    components: { 
      homeMap,
      echart,
      EditText ,
      echartLine
    },
  })
</script>
<style>

</style>
