<script setup>
import { profile, education, highlights, nav } from '../data/site'
import CountUp from './CountUp.vue'
import Icon from './Icon.vue'

const role = profile.title.split(' · ')[0]

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <p class="kicker hero-target">{{ profile.target }}</p>
          <h1 class="hero-name">{{ profile.name }}<span class="dot">.</span></h1>
          <div class="hero-rule">
            <span class="hero-role">{{ profile.title }}</span>
            <span class="hero-tagline mono">{{ profile.tagline }}</span>
          </div>
          <p class="hero-intro">{{ profile.intro }}</p>

          <div class="hero-actions">
            <a class="btn btn-solid" href="/resume.pdf" target="_blank" rel="noopener">
              <Icon name="download" :size="16" /><span>下载 PDF 简历</span>
            </a>
            <a class="linkarrow" href="#projects" @click.prevent="scrollTo('projects')">
              查看项目作品 <Icon name="arrow-down" :size="14" />
            </a>
            <a class="linkarrow" :href="profile.github" target="_blank" rel="noopener">
              GitHub <Icon name="external" :size="14" />
            </a>
          </div>

          <ol class="hero-list">
            <li v-for="(h, i) in highlights" :key="h.title" class="hero-item">
              <span class="hero-idx mono num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <div class="hero-item-title"><CountUp :text="h.title" /></div>
                <div class="hero-item-desc">{{ h.desc }}</div>
              </div>
            </li>
          </ol>
        </div>

        <aside class="hero-side">
          <div class="idcard">
            <img class="id-avatar" :src="profile.avatar" :alt="profile.name" />
            <div class="id-meta">
              <div class="id-name">{{ profile.name }}</div>
              <div class="id-role">{{ role }}</div>
            </div>
          </div>

          <div class="spec">
            <div class="spec-row">
              <span class="spec-k mono">STATUS</span>
              <span class="spec-v">求职中 · 随时到岗</span>
            </div>
            <div class="spec-row">
              <span class="spec-k mono">AGE</span>
              <span class="spec-v num">{{ profile.age }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-k mono">SCHOOL</span>
              <span class="spec-v">{{ education.school }} · {{ education.major }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-k mono">EMAIL</span>
              <span class="spec-v">{{ profile.email }}</span>
            </div>
          </div>

          <nav class="toc" aria-label="页面目录">
            <p class="toc-kicker mono">INDEX</p>
            <a
              v-for="(item, i) in nav"
              :key="item.id"
              class="toc-row"
              :href="`#${item.id}`"
              @click.prevent="scrollTo(item.id)"
            >
              <span class="toc-idx mono num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="toc-label">{{ item.label }}</span>
              <Icon name="arrow-right" :size="13" />
            </a>
          </nav>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 164px 0 96px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr);
  gap: 72px;
  align-items: start;
}
.hero-name {
  margin-top: 18px;
  font-size: clamp(3.2rem, 8vw, 5.2rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1;
}
.dot {
  color: var(--spot);
}
.hero-rule {
  margin-top: 24px;
  padding: 12px 0;
  border-top: 1px solid var(--hair-strong);
  border-bottom: 1px solid var(--hair);
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 24px;
}
.hero-role {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.hero-tagline {
  color: var(--ink-muted);
}
.hero-intro {
  margin-top: 22px;
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 54ch;
}
.hero-actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px 22px;
}

/* 亮点：编辑式序号列表，不做卡片 */
.hero-list {
  list-style: none;
  margin: 46px 0 0;
  padding: 0;
  border-top: 1px solid var(--hair);
}
.hero-item {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 16px;
  padding: 15px 0;
  border-bottom: 1px solid var(--hair);
  transition: background 0.2s;
}
.hero-item:hover {
  background: var(--spot-soft);
}
.hero-idx {
  color: var(--ink-muted);
  padding-top: 3px;
}
.hero-item-title {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  font-variant-numeric: tabular-nums;
}
.hero-item-desc {
  margin-top: 3px;
  font-size: 0.85rem;
  color: var(--ink-muted);
  line-height: 1.6;
}

/* 侧栏：身份条 + 规格表 + 目录 */
.hero-side {
  position: sticky;
  top: 104px;
}
.hero-target {
  text-transform: none;
  letter-spacing: 0.01em;
  line-height: 1.7;
  max-width: 46ch;
}
.idcard {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border: 1px solid var(--hair-strong);
  border-radius: 2px;
  background: var(--card);
}
.id-avatar {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid var(--hair);
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.4s ease;
}
.idcard:hover .id-avatar {
  filter: none;
}
.id-name {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.2;
}
.id-role {
  margin-top: 3px;
  font-size: 0.82rem;
  color: var(--ink-muted);
}
.spec {
  margin-top: 18px;
  border-top: 1px solid var(--hair);
}
.spec-row {
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--hair);
  align-items: baseline;
}
.spec-k {
  color: var(--ink-muted);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
}
.spec-v {
  font-size: 0.85rem;
  color: var(--ink-soft);
  overflow-wrap: anywhere;
}

.toc {
  margin-top: 26px;
}
.toc-kicker {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--ink-muted);
  padding-bottom: 8px;
  border-bottom: 1px solid var(--hair-strong);
}
.toc-row {
  display: grid;
  grid-template-columns: 28px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 9px 0;
  border-bottom: 1px solid var(--hair);
  text-decoration: none;
  color: var(--ink);
  transition: color 0.2s, padding-left 0.2s, border-color 0.2s;
}
.toc-row:hover {
  color: var(--spot);
  padding-left: 8px;
  border-bottom-color: var(--spot);
}
.toc-idx {
  color: var(--ink-muted);
  font-size: 0.68rem;
}
.toc-label {
  font-size: 0.88rem;
}

@media (max-width: 980px) {
  .hero {
    padding: 132px 0 64px;
    min-height: auto;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-side {
    position: static;
    max-width: 320px;
  }
}
@media (max-width: 560px) {
  .hero-name {
    font-size: clamp(2.6rem, 13vw, 3.4rem);
  }
  .hero-actions {
    gap: 14px 18px;
  }
}
</style>
