<script setup>
import { profile } from '../data/site'
import Icon from './Icon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-name">{{ profile.name }}</span>
          <span class="footer-role mono">{{ profile.title }}</span>
        </div>
        <div class="footer-links">
          <a :href="profile.github" target="_blank" rel="noopener">GitHub <Icon name="external" :size="12" /></a>
          <a :href="`mailto:${profile.email}`">邮箱 <Icon name="arrow-right" :size="12" /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener">简历 PDF <Icon name="download" :size="12" /></a>
        </div>
      </div>
      <p class="footer-quote">每天都在寻找更强大更方便的 AI 工具，每天都有新的项目思路，每天都比昨天进步一点点。</p>
      <p class="footer-copy mono">© {{ year }} {{ profile.name }} · Vue 3 + Vite · 无跟踪脚本</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 44px 0 40px;
  border-top: 1px solid var(--hair-strong);
  background: var(--paper);
}
.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px 32px;
}
.footer-brand {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
}
.footer-name {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--ink);
}
.footer-role {
  color: var(--ink-muted);
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-links a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--hair);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.footer-links a:hover {
  color: var(--spot);
  border-color: var(--spot);
}
.footer-quote {
  margin-top: 22px;
  max-width: 60ch;
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--ink-soft);
}
.footer-copy {
  margin-top: 18px;
  color: var(--ink-muted);
  font-size: 0.7rem;
}
</style>
