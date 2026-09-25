<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav } from '../data/site'

const scrolled = ref(false)
const open = ref(false)
const theme = ref(document.documentElement.dataset.theme || 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
}

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
        <button class="theme-btn" @click="toggleTheme" :title="theme === 'dark' ? '切换浅色' : '切换深色'">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
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
        <button class="theme-btn mobile-theme" @click="toggleTheme">
          {{ theme === 'dark' ? '切换浅色模式' : '切换深色模式' }}
        </button>
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
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 12px var(--shadow);
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
.theme-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink-soft);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}
.theme-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: rotate(15deg);
}
.theme-btn.mobile-theme {
  width: auto;
  height: auto;
  justify-content: flex-start;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid var(--line);
  background: transparent;
  font-size: 0.95rem;
  color: var(--ink);
}
.theme-btn.mobile-theme:hover {
  transform: none;
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
