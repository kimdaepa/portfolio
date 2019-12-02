<template>
  <button
    :type="buttonType"
    :class="[$style.button, $style[colorType]]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseBannerButton',
  props: {
    buttonType: {
      type: String,
      default: 'button'
    },
    colorType: {
      type: String,
      default: 'translucence'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.button {
  display: inline-block;
  height: 52px;
  padding: 0 24px;
  border:0;
  font-size: 18px;
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;
}

.translucence {
  color: #000;
  border: 0;
  background: rgba(255, 255, 255, 0.7);
}

.white_outline {
  color: #fff;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0);
}
</style>
