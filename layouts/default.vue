<template>
  <v-app class="app">
    <v-overlay v-if="loading" color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <img src="https://cdn2.dott.dev/logo2.svg" alt="福島県" />
        <scale-loader color="#00A040" />
      </div>
    </v-overlay>
    <div v-if="hasNavigation" class="appContainer">
      <div class="naviContainer">
        <SideNavigation
          :is-navi-open="isOpenNavigation"
          :class="{ open: isOpenNavigation }"
          @openNavi="openNavigation"
          @closeNavi="hideNavigation"
        />
      </div>
      <main class="mainContainer" :class="{ open: isOpenNavigation }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </main>
    </div>
    <div v-else class="embed">
      <v-container>
        <nuxt />
      </v-container>
    </div>
    <NoScript />
    <development-mode-mark />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SideNavigation from '@/components/SideNavigation.vue'
import NoScript from '@/components/NoScript.vue'
import DevelopmentModeMark from '@/components/DevelopmentModeMark.vue'

type LocalData = {
  hasNavigation: boolean
  isOpenNavigation: boolean
  loading: boolean
}

export default Vue.extend({
  components: {
    DevelopmentModeMark,
    ScaleLoader,
    SideNavigation,
    NoScript
  },
  data(): LocalData {
    let hasNavigation = true
    let loading = true
    if (this.$route.query.embed === 'true') {
      hasNavigation = false
      loading = false
    }

    return {
      hasNavigation,
      loading,
      isOpenNavigation: false
    }
  },
  mounted() {
    /* eslint no-console: 0 */
    console.log('while (Japan.recovering) {\n  we.hack();\n}')
    this.loading = false
  },
  methods: {
    openNavigation(): void {
      this.isOpenNavigation = true
    },
    hideNavigation(): void {
      this.isOpenNavigation = false
    }
  },
  head(): MetaInfo {
    const { htmlAttrs } = this.$nuxtI18nSeo()
    return {
      htmlAttrs,
      link: [
        {
          rel: 'canonical',
          href: `https://fukushima-covid19.web.app${this.$route.path}`
        }
      ],
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$tc('福島県')
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、福島県とCode for Fukushimaが協力し開設した公式のサイトです。'
          )
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content:
            this.$t('福島県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content:
            this.$t('福島県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、福島県とCode for Fukushimaが協力し開設した公式のサイトです。'
          )
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$tc('ogp.og:image')
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content:
            this.$t('福島県') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$tc('ogp.og:image')
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: 'Yeo-5WrUQjwNf6n7OqZKKwj3Ztft9UYdNoAnf84dxuQ'
        }
      ]
    }
  }
})
</script>
<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
}
.embed {
  .container {
    padding: 0 !important;
  }
  .DataCard {
    padding: 0 !important;
  }
}
.appContainer {
  position: relative;
  @include largerThan($small) {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto;
  }
  @include largerThan($huge) {
    grid-template-columns: 325px 1fr;
    grid-template-rows: auto;
  }
}
@include lessThan($small) {
  .naviContainer {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: z-index-of(sp-navigation);
  }
}
@include largerThan($small) {
  .naviContainer {
    grid-column: 1/2;
    position: fixed;
    top: 0;
    overflow-y: auto;
    width: 240px;
    height: 100%;
    border-right: 1px solid $gray-4;
    border-left: 1px solid $gray-4;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
    overscroll-behavior: contain;
  }
}
@include largerThan($huge) {
  .naviContainer {
    width: 325px;
  }
}
.open {
  height: 100vh;
  @include largerThan($small) {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
.mainContainer {
  grid-column: 2/3;
  overflow: hidden;
  @include lessThan($small) {
    .container {
      padding-top: 16px;
    }
  }
}
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>
