<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav } from '../data/site'

const scrolled = ref(false)
const open = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

const scrollTo = (id) => {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#home" class="brand" @click.prevent="scrollTo('home')">
        <span class="brand-dot"></span>
        <span>杨彬林</span>
      </a>

      <nav class="desktop-nav">
        <a v-for="item in nav" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
          {{ item.label }}
        </a>
        <a href="/resume.pdf" target="_blank" class="btn btn-small btn-primary">下载简历</a>
      </nav>

      <button class="hamburger" @click="open = !open" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="fade">
      <nav v-if="open" class="mobile-nav">
        <a v-for="item in nav" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
          {{ item.label }}
        </a>
        <a href="/resume.pdf" target="_blank" class="btn btn-primary btn-block">下载简历</a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  background: transparent;
}
.nav.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--ink);
  text-decoration: none;
}
.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.desktop-nav a:not(.btn) {
  color: var(--ink-muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}
.desktop-nav a:not(.btn):hover {
  color: var(--primary);
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.hamburger span {
  width: 22px;
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 20px 20px;
  background: var(--card);
  border-top: 1px solid var(--line);
}
.mobile-nav a:not(.btn) {
  padding: 10px 0;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
}
.btn-block {
  width: 100%;
  margin-top: 10px;
}
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
