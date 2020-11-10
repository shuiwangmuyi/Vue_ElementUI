<template>
    <div style="margin-top: 15px;width: 50%;margin: auto;">
            <el-input placeholder="请输入内容" v-model="inputCom" class="input-with-select">
                <el-select v-model="valus" slot="prepend" placeholder="请选择"
                 @change="selects" style="width:130px">
                    <el-option v-for="option in options" 
                                :key="option.Id"
                                :label="option.name"
                                :value="option.Id"></el-option>                    
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>                    
    </div>
</template>
<script>
 import vmson from '../../store/emptyVue' 
    export default {
       // props:['options'],
        props:{
            options:Array,     
            resul: {
                type: String,
                required: true
                }
        },       
        data(){
           return{   
                select: this.options,  
                inputCom: '',   
                valus:this.options[0].Id  ,
                opt:this.options[0]       
           }
        } ,   
        mounted(){  
        } ,
        
       methods:{                 
            selects(){  
                this.opt=this.options[this.valus-1]
                console.log(this.opt)                
            },  
            search(){   
                 //console.log(this.opt)                    
                if(this.resul==='1'){
                    //向music组件传值'                               
                    this.$emit('musicFun',[this.opt,this.inputCom])    //父组件传值
                    //兄弟组件传值   
                                
                  // vmson.$emit('musicFun', [this.opt,this.inputCom]);
                } else if(this.resul==='2'){
                  //向movie组件传值
                  this.$emit('movieFun',[this.opt,this.inputCom]) //父组件传值
                 //console.log("sssssssssss")
                   // vmson.$emit('movieFunction', [this.opt,this.inputCom]);
                }
                       
            }
       }
    }
</script>