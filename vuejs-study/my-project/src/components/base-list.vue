<template>
  <!-- 조건문을 이용한 클래스 대응 -->
  <ul :class="[!postType && $style.thumb_list, postType && $style.post_list]">
      <li v-for="(item, index) in lists" :key="index" :class="$style.item">
        <a :href="item.href" :class="$style.inner">
          <div :class="$style.thumb_box">
            <img :src="require(`../assets/${item.listimg}`)" alt="">
          </div>
          <div :class="$style.content_box">
            <strong :class="$style.title">{{item.listtitle}}</strong>
            <p :class="$style.description">{{item.listdescription}}</p>
          </div>
          <!-- 특정영역 조건부 랜더링 -->
          <div v-if="postType" :class="$style.info_box">
            <span :class="$style.info">{{item.date}}</span>
            <span :class="$style.info">댓글 <span>{{item.comment}}</span></span>
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
    postType: {
      type: Boolean,
      default: false
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
.post_list {
  .item {
    overflow: hidden;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #d5d5d5;
  }

  .inner {
    text-decoration: none;
  }

  .thumb_box {
    float: right;
    width: 210px;
    height: 167px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content_box {
    overflow: hidden;
    padding-right: 25px;
  }

  .title {
    display: block;
    padding: 15px 0 14px;
    font-size: 20px;
    color: #000;
  }

  .description {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  .info_box {
    margin-top: 20px;
    line-height: 20px;
    font-size: 13px;
    color: #999;
  }

  .info {
    display: inline-block;
    margin-right: 6px;
    vertical-align: top;

    &+.info::before {
      content: '';
      display: inline-block;
      height: 12px;
      margin: 3px 10px 0 0;
      border-left: 1px solid #999;
      vertical-align: top;
    }
  }
}
</style>
