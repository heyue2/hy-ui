<template>
  <transition name="dialog-fade">
    <div class="hy-dialog-wrapper" v-show="visible" @click.self="handleClose">
      <div class="hy-dialog" :style="{ width, top }">
        <div class="hy-dialog-header">
          <slot name="title">
            <span class="hy-dialog-title">{{ title }}</span>
          </slot>
          <button class="hy-dialog-headerbtn">
            <i class="el-icon-close" @click="handleClose">x</i>
          </button>
        </div>
        <div class="hy-dialog-body">
          <slot> <span>这是一段信息</span></slot>
          <div class="hy-dialog-footer" v-if="$slots.footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HyDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss">
.hy-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .hy-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &-header {
      padding: 20px 20px 10px;
      .hy-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hy-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer {
      text-align: right;
      padding: 20px 20px 10px;
      box-sizing: border-box;
      .hy-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>