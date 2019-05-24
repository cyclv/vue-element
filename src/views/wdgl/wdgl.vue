<template>  
<div>
<div class="topinput flexfs"><div class="input"><el-input v-model="topinput" placeholder="请输入用户名/ID" required></el-input></div>
    <el-button class="mglf20" type="primary" @click="ipclick">查询</el-button><el-button class="mglf20" @click="dialogFormVisible = true">添加</el-button>
</div>
<el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column  prop="date"  label="日期"  sortable  width="180"></el-table-column>
    <el-table-column  prop="name"  label="姓名"  sortable  width="180"></el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
</el-table>
<div class="pagesize">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="10" layout="prev,pager,next,jumper" :total="60"></el-pagination>
</div>
<div>
    <el-dialog title="添加网点" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addwdgl()">提 交</el-button>
        </div>
    </el-dialog>
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
                {date: '2016-05-02',name: '张飞',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2019-05-21',name: '曹操',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-26',name: '孙权',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'},
                {date: '2016-03-02',name: '赵云',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '亚瑟',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-01-12',name: '刘备',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-02-22',name: '刘禅',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '关羽',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '司马昭',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '陆逊',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'},      
                {date: '2016-05-02',name: '吕布',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '李白',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}, 
                {date: '2016-05-02',name: '王小虎',sfz:'411084123654120145',address: '上海市普陀区金沙江路 1518 弄'}
            ],
            dialogFormVisible:false, //弹框控制
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }

    },
    mounted:function(){
        this.loading = false
    },
    methods: {
        //地址信息
        formatter(row, column) {
            return row.address;
        },
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
        },
        // 添加网店管理
        addwdgl(){
            console.log(this.form)
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
