<template>  
<div>
<div class="topinput flexfs"><div class="input"><el-input v-model="topinput" placeholder="请输入用户名/ID" required></el-input></div>
    <el-button class="mglf20" type="primary" @click="ipclick">查询</el-button>
</div>
<el-table v-loading="loading" :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column prop="sfz" label="身份证" width="220"></el-table-column>
</el-table>
<div class="pagesize">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="10" layout="prev,pager,next,jumper" :total="60"></el-pagination>
</div>
</div>
    
</template>

<script>
export default {
    data () {
        return {
            topinput: '',
            loading:true,
            currentPage3:5,
            tableData: [
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'},      
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}
            ]
        }

    },
    mounted:function(){
        this.loading = false
    },
    methods: {
        handleSizeChange(val) {
            console.log(`测试每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 查询事件
        ipclick(){
            //console.log(this.topinput)
            if(this.topinput){
                console.log('传入后端接口')
            }else{
                this.$alert('该字段不能为空', '输入有误', {confirmButtonText: '关闭',});
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
    width: 160px;
}
.pagesize,.topinput{
    width: 100%;
    height: 60px;
}
</style>
