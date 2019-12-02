<template>
  <BaseLayout>
    <BaseBanner
      title="Vue.js를 해봅시다."
      description="특별한 설명은 없습니다. 텍스트 나와라!!">
      <BaseBannerButton :class="$style.button">Left Button</BaseBannerButton>
      <BaseBannerButton :class="$style.button" color-type="white_outline">Right Button</BaseBannerButton>
    </BaseBanner>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/base-layout.vue'
import BaseBanner from '@/components/base-banner.vue'
import BaseBannerButton from '@/components/base-banner-button.vue'

export default {
  name: 'home',
  components: {
    BaseLayout,
    BaseBanner,
    BaseBannerButton
  }
}
</script>

<style module lang="scss">
.button + .button {
  margin-left: 5px;
}
</style>
