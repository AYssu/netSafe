<template>
    <div class="title-layout">
        <div class="left-icon"></div>
        <span>{{info}}</span>
    </div>
</template>
<script setup lang="ts">
let props  = defineProps(['info'])
console.log(props);

</script>
<style lang="less" scoped>
.title-layout {
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;

    .add {
        margin-left: 60px;
        margin-right: 10px;
    }

    span {
        margin-right: 1px;
    }

    .left-icon {
        width: 3px;
        height: 12px;
        margin-right: 5px;
        background-color: #365cd3;
        color: transparent;
    }
}
</style>