<template>
    <div class="demo1-video">
        <video
               class="myVideo"
               controls
               preload="auto"
               poster="../../assets/logo.png"
        >
            <source src="../../video/learn.mp4" type="video/mp4"/>
        </video>
    </div>
</template>

<script>
    export default {
        name: "Study",
        data() {
            return {
            }
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<style scoped>
    .demo1-video{
        width:100%;
        height:100%;
    }
    .myVideo{
        width:100%;
        height:100%;
    }
</style>