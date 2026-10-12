<script setup>
import { profile } from '../data/site'
import { ref } from 'vue'
import Icon from './Icon.vue'

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
      <div class="section-head reveal">
        <p class="kicker">05 / 联系我</p>
        <h2 class="section-title mask-reveal">随时可以聊聊</h2>
        <p class="section-sub">邮箱回复最快；电话欢迎直接拨打。</p>
      </div>

      <div class="contact-rows reveal">
        <div class="contact-item" @click="copyEmail">
          <span class="contact-icon"><Icon name="mail" :size="18" /></span>
          <div class="contact-body">
            <div class="contact-label mono">EMAIL</div>
            <div class="contact-value">{{ profile.email }}</div>
          </div>
          <div class="contact-hint">{{ copied ? '已复制' : '点击复制' }}</div>
        </div>

        <a class="contact-item" :href="`tel:${profile.phone}`">
          <span class="contact-icon"><Icon name="phone" :size="18" /></span>
          <div class="contact-body">
            <div class="contact-label mono">PHONE</div>
            <div class="contact-value num">{{ profile.phone }}</div>
          </div>
          <div class="contact-hint">点击拨打</div>
        </a>

        <a class="contact-item" :href="profile.github" target="_blank" rel="noopener">
          <span class="contact-icon"><Icon name="github" :size="18" /></span>
          <div class="contact-body">
            <div class="contact-label mono">GITHUB</div>
            <div class="contact-value">github.com/yblt</div>
          </div>
          <div class="contact-hint">全部开源项目</div>
        </a>
      </div>

      <div class="contact-cta reveal">
        <a class="btn btn-solid" href="/resume.pdf" target="_blank" rel="noopener">
          <Icon name="download" :size="16" /><span>下载 PDF 简历</span>
        </a>
        <a class="btn btn-quiet" :href="`mailto:${profile.email}`">
          直接发邮件 <Icon name="arrow-right" :size="16" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-rows {
  border-top: 1px solid var(--hair-strong);
}
.contact-item {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  padding: 20px 4px;
  border-bottom: 1px solid var(--hair);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background 0.2s, padding-left 0.2s;
}
.contact-item:hover {
  background: var(--spot-soft);
  padding-left: 12px;
}
.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--hair);
  border-radius: 2px;
  background: var(--card);
  color: var(--ink-soft);
}
.contact-item:hover .contact-icon {
  border-color: var(--spot);
  color: var(--spot);
}
.contact-label {
  color: var(--ink-muted);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
}
.contact-value {
  margin-top: 2px;
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}
.contact-hint {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--ink-muted);
  white-space: nowrap;
}
.contact-cta {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

@media (max-width: 640px) {
  .contact-item {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 14px;
  }
  .contact-hint {
    grid-column: 2;
  }
}
</style>
