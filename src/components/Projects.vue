<script setup>
import { computed } from 'vue'
import { projects } from '../data/site'
import ArchDiagram from './ArchDiagram.vue'

const featured = computed(() => projects.filter(p => !p.compact))
const others = computed(() => projects.filter(p => p.compact))

const onSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">项目作品集</h2>
        <p class="section-sub">原创开源项目 + 实习期间核心项目，代码与成果均可追溯</p>
      </div>

      <div class="projects-grid">
        <article
          v-for="p in featured"
          :key="p.name"
          class="project-card"
          :class="{ featured: p.highlight }"
          @mousemove="onSpot"
        >
          <div class="project-top">
            <div class="project-repo">
              <span v-if="p.repo" class="repo-name"># {{ p.repo }}</span>
              <span v-else class="repo-name internal">实习项目</span>
            </div>
            <a v-if="p.github" class="repo-link" :href="p.github" target="_blank">GitHub ↗</a>
          </div>

          <h3 class="project-name">{{ p.name }}</h3>
          <p class="project-desc">{{ p.desc }}</p>

          <ArchDiagram v-if="p.arch" :rows="p.arch" />

          <ul class="project-features">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>

          <div class="project-stack">
            <span v-for="s in p.stack" :key="s" class="chip">{{ s }}</span>
          </div>
        </article>
      </div>

      <div class="more-projects" v-if="others.length">
        <h3 class="more-title">其他项目</h3>
        <ul class="more-list">
          <li v-for="p in others" :key="p.name" class="more-item">
            <span class="more-name">{{ p.name }}</span>
            <span class="more-desc">{{ p.desc }}</span>
            <a v-if="p.github" class="more-link" :href="p.github" target="_blank">GitHub ↗</a>
            <span v-else class="more-link internal">实习项目</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 26px;
  border-radius: 16px;
  background: var(--card);
  border: 1px solid var(--line);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), var(--spot), transparent 65%);
  opacity: 0;
  transition: opacity 0.35s;
}
.project-card:hover::after {
  opacity: 1;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px var(--shadow);
  border-color: var(--primary-line);
}
.project-card.featured {
  border-color: var(--primary-line);
  background: linear-gradient(180deg, var(--primary-soft), var(--card) 45%);
}
.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.repo-name {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.78rem;
  color: var(--primary);
  background: var(--primary-soft);
  padding: 4px 10px;
  border-radius: 6px;
}
.repo-name.internal {
  color: var(--ink-muted);
  background: var(--bg);
}
.repo-link {
  font-size: 0.85rem;
  color: var(--ink-muted);
  text-decoration: none;
  font-weight: 600;
}
.repo-link:hover {
  color: var(--primary);
}
.project-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}
.project-desc {
  font-size: 0.92rem;
  color: var(--ink-soft);
  line-height: 1.7;
  margin-bottom: 14px;
}
.project-features {
  margin: 0 0 16px;
  padding-left: 18px;
  color: var(--ink-soft);
  font-size: 0.85rem;
  line-height: 1.9;
}
.project-stack {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 999px;
  color: var(--ink-muted);
  background: var(--bg);
  border: 1px solid var(--line);
}
.more-projects {
  margin-top: 36px;
  padding: 22px 26px;
  border-radius: 16px;
  background: var(--card);
  border: 1px solid var(--line);
}
.more-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink-muted);
  margin-bottom: 12px;
}
.more-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.more-item {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 9px 0;
  border-top: 1px dashed var(--line);
  font-size: 0.88rem;
}
.more-item:first-child {
  border-top: none;
}
.more-name {
  flex-shrink: 0;
  font-weight: 600;
  color: var(--ink);
}
.more-desc {
  flex: 1;
  color: var(--ink-soft);
  line-height: 1.6;
}
.more-link {
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;
}
.more-link.internal {
  color: var(--ink-muted);
}
@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .more-item {
    flex-wrap: wrap;
  }
}
</style>
