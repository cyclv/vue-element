<template>
  <div class="pagesize">
    <el-pagination :page-size="10" layout="prev,pager,next,jumper" @current-change="handleCurrentChange" :total='message'></el-pagination>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data(){
    return {

    }
  },
  methods:{
    //当前也进行分页查询
    handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.$emit('increment111',val)
    },
  }
}
</script>
