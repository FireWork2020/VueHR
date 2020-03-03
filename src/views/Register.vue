<template>
    <div>
        <el-form class="loginContainer">
            <h3 class="loginTitle">系统注册</h3>
            <el-form-item label="昵称">
                <el-input v-model="mes.name"></el-input>
            </el-form-item>
            <el-form-item label="移动电话">
                <el-input v-model="mes.phone"></el-input>
            </el-form-item>
            <el-form-item label="座机">
                <el-input v-model="mes.telephone"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="mes.address"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="mes.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="mes.password"></el-input>
            </el-form-item>
            <el-form-item label="头像">
                <el-input v-model="mes.userface"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.prevent="submit">Submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {putRequest} from "../utils/api";

    export default {
        name: "register",
        data(){
            return{
                mes:{
                    name:'',
                    phone:'',
                    telephone:'',
                    address:'',
                    username:'',
                    password:'',
                    userface:''
                }
            }
        },
        methods:{
            submit(){
                console.log(this.mes);
                putRequest("/system/hr/add",this.mes)
                .then(resp =>{
                    if(resp){
                        console.log(resp);
                        this.$router.push('/');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>