<template>
  <BaseLayout>
    <BaseBanner
      title="Vue.js를 해봅시다."
      description="특별한 설명은 없습니다. 텍스트 나와라!!">
      <BaseBannerButton :class="$style.button">Left Button</BaseBannerButton>
      <BaseBannerButton :class="$style.button" color-type="white_outline">Right Button</BaseBannerButton>
    </BaseBanner>
    <div :class="$style.section">
      <BaseList :lists="cardlist" />
    </div>
    <BaseTab :lists="tabborder" type="tab_border"></BaseTab>
    <div :class="$style.section">
      <BaseList :lists="cardlist2" postType />
    </div>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/base-layout.vue'
import BaseBanner from '@/components/base-banner.vue'
import BaseBannerButton from '@/components/base-banner-button.vue'
import BaseTab from '@/components/base-tab.vue'
import BaseList from '@/components/base-list.vue'

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

const cardlist = [
  {
    href: '/list1',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p1.jpg'
  },
  {
    href: '/list2',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p2.jpg'
  },
  {
    href: '/list3',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p3.jpg'
  },
  {
    href: '/list4',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p4.jpg'
  },
  {
    href: '/list5',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p5.jpg'
  },
  {
    href: '/list6',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p6.jpg'
  }
]

const cardlist2 = [
  {
    href: '/list1',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p1.jpg',
    date: '2019.11.13',
    comment: '1234'
  },
  {
    href: '/list2',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p2.jpg',
    date: '2019.11.13',
    comment: '1234'
  },
  {
    href: '/list3',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p3.jpg',
    date: '2019.11.13',
    comment: '1234'
  },
  {
    href: '/list4',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p4.jpg',
    date: '2019.11.13',
    comment: '1234'
  },
  {
    href: '/list5',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p5.jpg',
    date: '2019.11.13',
    comment: '1234'
  },
  {
    href: '/list6',
    listtitle: '리스트 타이틀',
    listdescription: '리스트 설명을 나타냅니다.',
    listimg: 'p6.jpg',
    date: '2019.11.13',
    comment: '1234'
  }
]

export default {
  name: 'home',
  components: {
    BaseLayout,
    BaseBanner,
    BaseBannerButton,
    BaseTab,
    BaseList
  },
  // gnb 배열을 사용하겠다고 선언하자
  data () {
    return {
      tabborder,
      cardlist,
      cardlist2
    }
  }
}
</script>

<style module lang="scss">
.button + .button {
  margin-left: 5px;
}

.section {
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 0 20px;
}
</style>
