<template>
  <BaseLayout>
    <BaseBanner
      title="Vue.js를 해봅시다."
      description="특별한 설명은 없습니다. 텍스트 나와라!!">
      <BaseBannerButton :class="$style.button">Left Button</BaseBannerButton>
      <BaseBannerButton :class="$style.button" color-type="white_outline">Right Button</BaseBannerButton>
    </BaseBanner>
    <BaseTab :lists="tabborder" type="tab_border"></BaseTab>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/base-layout.vue'
import BaseBanner from '@/components/base-banner.vue'
import BaseBannerButton from '@/components/base-banner-button.vue'
import BaseTab from '@/components/base-tab.vue'

// tab border 필요한 데이터 값 배열
const tabborder = [
  {
    text: 'tab1',
    href: '/tab1'
  },
  {
    text: 'tab2',
    href: '/tab2'
  },
  {
    text: 'tab3',
    href: '/tab3'
  }
]

export default {
  name: 'home',
  components: {
    BaseLayout,
    BaseBanner,
    BaseBannerButton,
    BaseTab
  },
  // gnb 배열을 사용하겠다고 선언하자
  data () {
    return {
      tabborder
    }
  }
}
</script>

<style module lang="scss">
.button + .button {
  margin-left: 5px;
}
</style>
