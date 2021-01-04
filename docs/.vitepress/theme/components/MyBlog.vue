<template>
  <main class="page">
    <div class="container">
      <div class="item" v-for="item in items" :key="item.title">
        <a :href="item.url" class="feature-img"
          ><img v-if="item.img" :src="item.img"
        /></a>
        <div class="content">
          <h2>
            <a :href="item.url">{{ item.title }}</a>
          </h2>
          <p>{{ item.content }}</p>
          <div class="flex">
            <a :href="item.url" class="more">阅读全文</a>
          </div>
        </div>
      </div>

      <div class="flex" ref="more" v-if="itemsPoll.length > 0">
        <a href="#" @click="doLoadMore" class="more">加载更多...</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const itemsPoll = [
  {
    url: '/blog/01',
    title: 'Breath of Fresh Air in the Morning',
    img: '/posts/1.jpg',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  },
  {
    url: '/blog/02',
    title: 'Breath of Fresh Air in the Morning1',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  },
  {
    url: '#',
    title: 'Breath of Fresh Air in the Morning2',
    img: '/posts/post-img-2.jpg',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  },
  {
    url: '#',
    title: 'Breath of Fresh Air in the Morning3',
    img: '/posts/1.jpg',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  },
  {
    url: '#',
    title: 'Breath of Fresh Air in the Morning4',
    img: '/posts/img3.jpg',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  },
  {
    url: '#',
    title: 'Breath of Fresh Air in the Morning5',
    content: `The lang attribute for the site. This will render as a tag in the page HTML. Note that the lang attribute will only be added when building the site via vitepress build. You will not see this rendered during vitepress dev.`
  }
]

const limit = 2
const items = ref([])
const more = ref(null)

function doLoadMore () {
  const top = more.value.offsetTop - 58 * 3
  for (let i = 1; i <= limit; i++) {
    items.value.push(itemsPoll.splice(0, 1)[0])
  }
  nextTick(() => {
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

onMounted(() => {
  doLoadMore()
})
</script>

<style scoped>
.page {
  padding-top: var(--header-height);
}

.item {
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.06), 0 1px 5px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
}
.item .feature-img {
  display: block;
}
.item .feature-img img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
}
.item .content {
  padding: 40px;
}
.item .content h2 {
  padding-bottom: 20px;
}
.more,
.item .content h2 a {
  color: var(--c-text);
}
.more:hover,
.item .content h2 a:hover {
  color: var(--c-brand);
  text-decoration: none;
}
.item .content h2 {
  text-align: center;
  margin-top: 0;
}
.item p {
  margin: 3em 0;
}

.flex {
  display: flex;
  justify-content: center;
}

.more {
  display: inline-block;
  border: 1px solid var(--c-text-light-2);
  padding: 0.5em 2em;
}
.more:hover {
  color: var(--c-text-light-2);
  border: 1px solid var(--c-text-light-2);
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}
</style>
