<script setup>
import { profile } from '../data/site'
import { ref } from 'vue'

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="contact" class="section section-alt">
    <div class="container">
      <div class="contact-card">
        <div class="contact-head">
          <h2 class="section-title">联系我</h2>
          <p class="section-sub">期待一份能发挥我所长的工作，随时可以聊聊</p>
        </div>

        <div class="contact-grid">
          <div class="contact-item" @click="copyEmail">
            <div class="contact-icon">✉️</div>
            <div>
              <div class="contact-label">邮箱</div>
              <div class="contact-value">{{ profile.email }}</div>
              <div class="contact-hint">{{ copied ? '已复制 ✓' : '点击复制' }}</div>
            </div>
          </div>

          <a class="contact-item" :href="`tel:${profile.phone}`">
            <div class="contact-icon">📱</div>
            <div>
              <div class="contact-label">电话</div>
              <div class="contact-value">{{ profile.phone }}</div>
              <div class="contact-hint">点击拨打</div>
            </div>
          </a>

          <a class="contact-item" :href="profile.github" target="_blank">
            <div class="contact-icon">🐙</div>
            <div>
              <div class="contact-label">GitHub</div>
              <div class="contact-value">github.com/yblt</div>
              <div class="contact-hint">查看全部开源项目 ↗</div>
            </div>
          </a>

          <a class="contact-item" :href="profile.ifdian" target="_blank">
            <div class="contact-icon">💝</div>
            <div>
              <div class="contact-label">爱发电</div>
              <div class="contact-value">ifdian.net/a/yblt01</div>
              <div class="contact-hint">支持我的开源项目 ↗</div>
            </div>
          </a>
        </div>

        <div class="contact-cta">
          <a class="btn btn-primary btn-lg" href="/resume.pdf" target="_blank">下载 PDF 简历</a>
          <a class="btn btn-ghost btn-lg" :href="`mailto:${profile.email}`">直接发邮件</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 24px;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
}
.contact-head {
  text-align: center;
  margin-bottom: 36px;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 14px;
  background: var(--bg);
  border: 1px solid var(--line);
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
}
.contact-item:hover {
  border-color: rgba(79, 70, 229, 0.35);
  transform: translateY(-2px);
}
.contact-icon {
  font-size: 1.6rem;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--line);
  flex-shrink: 0;
}
.contact-label {
  font-size: 0.78rem;
  color: var(--ink-muted);
  margin-bottom: 2px;
}
.contact-value {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--ink);
}
.contact-hint {
  font-size: 0.75rem;
  color: var(--primary);
  margin-top: 2px;
}
.contact-cta {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .contact-card {
    padding: 28px 20px;
  }
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
