<template>
<div class="login">
    <div class="from">
        <div class="flexfs"><i class="el-icon-orange"></i><h4>后台系统登陆</h4></div>
        <el-form label-position="left" :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账户" prop="name">
                <el-input type="input" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input placeholder="请输入密码" v-model="ruleForm.pass" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            ruleForm: {
                name: '',
                pass: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const ruleForm = this.ruleForm
                    this.$router.push('./index')
                    this.$store.commit('save_us',ruleForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style>
html,body,#app,.login{
    height: 100%;
}
.login{
    display: flex;
    justify-content: center;
    align-items: center;
}
.from{
    width: 360px;
    height: 240px;
    padding: 20px 60px 40px 60px;
    border: 1px solid #2c3e50;
    border-radius: 10px;
}
</style>

