<template>
    <div :class="$style.box">
        <div :class="$style.logo">
            <h1>Schema 生成器</h1>
            <el-alert
                :closable="false"
                style="width: 200px;margin-left: 20px;"
                title="开发中..."
                type="warning"
            >
            </el-alert>
        </div>
        <div :class="$style.btns">
            <el-button @click="$emit('toDemo')">在 Demo 页验证</el-button>
            <el-button type="primary" @click="$emit('onExport')">导出Schema</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditorHeader'
    };
</script>

<style module>
    @import "variable.css";
    .box {
        padding: 20px 80px;
        height: auto;
        background: var(--color-white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 8px 24px -2px rgba(0,0,0,.05), 0 1px 1px 0 rgba(0,0,0,0.2);
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 40px #409EFF;
        h1 {
            font-size: 30px;
            text-transform: uppercase;
        }
    }
</style>
