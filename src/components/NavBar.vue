<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav } from '../data/site'
import Icon from './Icon.vue'

const scrolled = ref(false)
const open = ref(false)
const progress = ref(0)
const active = ref(nav[0]?.id)
const theme = ref(document.documentElement.dataset.theme || 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
}

let raf = 0
const onScroll = () => {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const y = window.scrollY
    scrolled.value = y > 12
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, y / max) : 0
  })
}

const scrollTo = (id) => {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

let io
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  nav.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) io.observe(el)
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
  io && io.disconnect()
})
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#home" class="brand" @click.prevent="scrollTo('home')">
        <span class="brand-name">杨彬林</span>
        <span class="brand-role mono">全栈开发 / AI Agent</span>
      </a>

      <nav class="desktop-nav">
        <a
          v-for="(item, i) in nav"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ on: active === item.id }"
          @click.prevent="scrollTo(item.id)"
        >
          <span class="nav-idx mono num">{{ String(i + 1).padStart(2, '0') }}</span>{{ item.label }}
        </a>
        <button class="theme-btn" @click="toggleTheme" :title="theme === 'dark' ? '切换浅色' : '切换深色'">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <svg v-else viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener" class="btn btn-solid btn-sm">
          <Icon name="download" :size="14" /><span>简历</span>
        </a>
      </nav>

      <button class="hamburger" :class="{ open }" @click="open = !open" aria-label="菜单">
        <span></span><span></span>
      </button>
    </div>

    <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></div>

    <transition name="fade">
      <nav v-if="open" class="mobile-nav">
        <a v-for="(item, i) in nav" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
          <span class="nav-idx mono num">{{ String(i + 1).padStart(2, '0') }}</span>{{ item.label }}
        </a>
        <button class="mobile-theme mono" @click="toggleTheme">
          {{ theme === 'dark' ? '切换浅色模式' : '切换深色模式' }}
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener" class="btn btn-solid btn-block">
          <Icon name="download" :size="15" /><span>下载 PDF 简历</span>
        </a>
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
  background: transparent;
  transition: background 0.25s, border-color 0.25s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(8px);
  border-bottom-color: var(--hair);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.brand {
  display: flex;
  align-items: baseline;
  gap: 12px;
  text-decoration: none;
}
.brand-name {
  font-size: 1.02rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--ink);
}
.brand-role {
  color: var(--ink-muted);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 26px;
}
.desktop-nav a:not(.btn) {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  color: var(--ink-muted);
  text-decoration: none;
  font-size: 0.88rem;
  letter-spacing: -0.01em;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.desktop-nav a:not(.btn):hover {
  color: var(--ink);
}
.desktop-nav a.on {
  color: var(--ink);
  border-bottom-color: var(--spot);
}
.nav-idx {
  color: var(--ink-muted);
  font-size: 0.66rem;
  opacity: 0.75;
}
.theme-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid var(--hair);
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.theme-btn:hover {
  border-color: var(--spot);
  color: var(--spot);
}
.progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 100%;
  background: var(--spot);
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.hamburger span {
  width: 22px;
  height: 1px;
  background: var(--ink);
  transition: transform 0.25s;
}
.hamburger.open span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}
.hamburger.open span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 8px 20px 20px;
  background: var(--paper);
  border-bottom: 1px solid var(--hair);
}
.mobile-nav a:not(.btn) {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 13px 0;
  color: var(--ink);
  text-decoration: none;
  font-size: 0.95rem;
  border-bottom: 1px solid var(--hair);
}
.mobile-theme {
  padding: 13px 0;
  border: none;
  border-bottom: 1px solid var(--hair);
  background: transparent;
  text-align: left;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--ink-muted);
  cursor: pointer;
}
.btn-block {
  width: 100%;
  margin-top: 16px;
}
@media (max-width: 860px) {
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .brand-role {
    display: none;
  }
}
</style>
