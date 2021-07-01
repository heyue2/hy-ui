<template>
  <button
    @click="handleClick"
    class="hy-button"
    :class="[
      `hy-button-${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "HyButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.hy-button {
  display: inline-bloack;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.hy-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hy-button-success {
  color: rgb(41, 41, 41);
  background-color: #dcfce7;
  border-color: #c2e1ff;
  &:hover,
  &:focus {
    background: #7fffaa;
    border-color: #66ff7a;
    color: #fff;
  }
}
.hy-button-info {
  color: rgb(247, 247, 247);
  background-color: #c2c2c2;
  border-color: #deeeff;
  &:hover,
  &:focus {
    background: #eff0ef;
    border-color: #e4e4e4;
    color: rgb(53, 53, 53);
  }
}
.hy-button-warning {
  color: rgb(65, 65, 65);
  background-color: #ffbb7b;
  border-color: #ffbb7b;
  &:hover,
  &:focus {
    background: #ffa742;
    border-color: #ff5353;
    color: rgb(53, 53, 53);
  }
}
.hy-button-danger {
  color: rgb(255, 77, 77);
  background-color: #ffffff;
  border-color: #ff501b;
  &:hover,
  &:focus {
    background: #ffa742;
    border-color: #ff5353;
    color: rgb(53, 53, 53);
  }
}
.hy-button-primary.is-plain {
  color: rgb(68, 68, 68);
  background-color: #c7e3ff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hy-button-success.is-plain {
  color: rgb(44, 44, 44);
  background-color: #f1fff6;
  border-color: #edf6ff;
  &:hover,
  &:focus {
    background: #c1ffd6;
    border-color: #66ff7a;
    color: rgb(65, 65, 65);
  }
}
.hy-button-info.is-plain {
  color: rgb(95, 95, 95);
  background-color: #e7e7e7;
  border-color: #deeeff;
  &:hover,
  &:focus {
    background: #eff0ef;
    border-color: #e4e4e4;
    color: rgb(53, 53, 53);
  }
}
.hy-button-warning.is-plain {
  color: rgb(65, 65, 65);
  background-color: #ffe9d5;
  border-color: #ffe3ca;
  &:hover,
  &:focus {
    background: #ffd6a8;
    border-color: #ff5353;
    color: rgb(53, 53, 53);
  }
}
.hy-button-danger.is-plain {
  color: rgb(87, 87, 87);
  background-color: #ffeeee;
  border-color: #ffebe5;
  &:hover,
  &:focus {
    background: #ffcc92;
    border-color: #ffadad;
    color: rgb(53, 53, 53);
  }
}
.hy-button-primary.is-round {
  border-radius: 30px;
}
.hy-button-success.is-round {
  border-radius: 30px;
}
.hy-button-info.is-round {
  border-radius: 30px;
}
.hy-button-warning.is-round {
  border-radius: 30px;
}
.hy-button-danger.is-round {
  border-radius: 30px;
}
.hy-button.is-circle {
  border-radius: 50%;
}
.is-disabled {
  color: rgb(87, 87, 87);
  background-color: #dadada;
  border-color: #dbdbdb;
  &:hover,
  &:focus {
    color: rgb(87, 87, 87);
    background-color: #dadada;
    border-color: #dbdbdb;
  }
}
</style>