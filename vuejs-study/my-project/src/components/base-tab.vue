<template>
  <ul :class="$style.tab">
    <li v-for="(item, index) in lists" :key="index" :class="$style.item">
      <a :href="item.href" :class="$style.link">{{item.text}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseTab',
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.tab {
  list-style: none;
  margin: 0;

  .item {
    display: inline-block;
    margin-left: 20px;

    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
