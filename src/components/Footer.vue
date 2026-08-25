<script setup>
import { profile } from '../data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand-dot"></span>
        <span>杨彬林 · 全栈开发工程师</span>
      </div>
      <p class="footer-quote">每天都在寻找更强大更方便的 AI 工具，每天都有新的项目思路，每天都比昨天进步一点点。</p>
      <div class="footer-links">
        <a :href="profile.github" target="_blank">GitHub</a>
        <span class="sep">·</span>
        <a :href="`mailto:${profile.email}`">邮箱</a>
        <span class="sep">·</span>
        <a href="/resume.pdf" target="_blank">简历下载</a>
      </div>
      <p class="footer-copy">© {{ year }} {{ profile.name }} · Built with Vue 3</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 48px 0 32px;
  background: #0f172a;
  color: #94a3b8;
}
.footer-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #f1f5f9;
  font-size: 1.05rem;
}
.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #818cf8, #2dd4bf);
}
.footer-quote {
  max-width: 520px;
  font-size: 0.85rem;
  line-height: 1.8;
}
.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}
.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
}
.footer-links a:hover {
  color: #818cf8;
}
.sep {
  color: #475569;
}
.footer-copy {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 6px;
}
</style>
