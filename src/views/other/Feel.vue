<template>
    <div>
        <div style="display: flex;justify-content: space-between">
            <el-button icon="el-icon-plus" type="primary" @click="showAddMapView">添加问题</el-button>
        </div>
        <el-upload-list class="questionContainer">
            <li v-for="question in questions" class="question">
                <div class="questionContent">
                    {{question.question}}
                    <el-button @click="addComment">添加评论</el-button>
                </div>
                <h1>评论</h1>
                <div class="comment" v-for="comment in question.comments">
                    {{comment}}
                </div>
            </li>
        </el-upload-list>
        <el-dialog
                :title="dialogTitle"
                :visible.sync="dialogAddQuestionVisible"
                width="50%">
            <div style="display: flex;justify-content: space-around;align-items: center">
                <el-input type="text" v-model="currentQuestion" :placeholder="enterQuesText" style="width: 300px"/>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelAddComment">取消</el-button>
                    <el-button type="primary" @click="confirmAddQues">提交</el-button>
                </span>
            </div>

        </el-dialog>
        <el-dialog
                :title="dialogAddCommentTitle"
                :visible.sync="dialogAddCommentVisible"
                width="50%">
            <div style="display: flex;justify-content: space-around;align-items: center">
                <el-input type="text" v-model="currentComment" :placeholder="enterCommentText" style="width: 300px"/>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancelAddComment">取消</el-button>
                    <el-button type="primary" @click="confirmAddComment">提交</el-button>
                </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Feel",
        data() {
            return {
                dialogAllCommentVisible:false,
                dialogAddCommentVisible:false,
                dialogAddQuestionVisible:false,
                questionNum:0,
                currentComment:'',
                currentQuestion:'',
                dialogTitle: '添加问题',
                dialogAllCommentTitle:"所有评论",
                dialogAddCommentTitle:"添加评论",
                enterCommentText:"请输入评论",
                enterQuesText:"请输入问题",
                questions: [
                    {
                        no:0,
                        question:"我的问题",
                        comments:["我不知道","问别人吧"]
                    }
                ],
                question:{
                    no:0,
                    question:'',
                    comments:[]
                }
            }
        },
        mounted() {

        },
        methods: {
            cancelAddComment(){
                this.questionNum = 0;
            },
            confirmAddQues(){
              let num = this.questions.length;
              this.question.no = num;
              this.questions.push(this.question);
              console.log(this.questions);
            },
            confirmAddComment(){
                console.log(this.currentComment);
                this.questions[this.questionNum].comments.push(this.currentComment);
                alert("提交评论成功");
            },
            showAllCommentView(data) {
                this.dialogAllCommentVisible = true;
                this.questionNum = data.no;
            },
            addComment(){
                this.dialogAddCommentVisible = true;
            },
            showAddMapView() {
                //数据初始化
                this.map = {
                    imageName: '',
                    description: '',
                    url: '',
                    remote: 0
                }
                this.dialogTitle = '添加地图';
                this.activeItemIndex = 0;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
    .questionContainer{
        width:100%;
    }
    .questionContainer .question{
        width:100%;
    }
    .questionContent{
        width:100%;
    }
    .questionContent .el-button{
        text-align: right;
    }
    .comment{
        width:100%;
    }
</style>