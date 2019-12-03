<template>
  <ul :class="$style.thumb_list">
      <li v-for="(item, index) in lists" :key="index" :class="$style.item">
        <a :href="item.href" :class="$style.inner">
          <div :class="$style.thumb_box">
            <img :src="require(`../assets/${item.listimg}`)" alt="">
          </div>
          <div :class="$style.content_box">
            <strong :class="$style.title">{{item.listtitle}}</strong>
            <p :class="$style.description">{{item.listdescription}}</p>
          </div>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'BaseList',
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'thumb_list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.thumb_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;

  .item {
    width: 33.3333%;
    padding: 0;
    box-sizing: border-box;
  }

  .inner {
    position: relative;
    display: block;
    margin: 0 0 20px 20px;
    background: #fff;
    color: #000;
    text-decoration: none;
  }

  .thumb_box {
    overflow: hidden;
    width: 100%;
    height: 220px;
    vertical-align: top;

    &:hover {
      opacity: 0.6;
    }

    img {
      width: 100%;
    }
  }

  .content_box {
    padding: 20px 15px 12px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    overflow: hidden;
    height: 46px;
    margin: 0;
    font-size: 15px;
    line-height: 22px;
  }

  .labels {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
