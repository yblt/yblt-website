<script setup>
import { ref } from 'vue'
import { projects } from '../data/site'

const showAll = ref(false)
const visible = () => (showAll.value ? projects : projects.slice(0, 6))
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
          v-for="p in visible()"
          :key="p.name"
          class="project-card"
          :class="{ featured: p.highlight }"
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

          <ul class="project-features">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>

          <div class="project-stack">
            <span v-for="s in p.stack" :key="s" class="chip">{{ s }}</span>
          </div>
        </article>
      </div>

      <div class="projects-more" v-if="projects.length > 6">
        <button class="btn btn-ghost" @click="showAll = !showAll">
          {{ showAll ? '收起' : '查看全部 ' + projects.length + ' 个项目' }}
        </button>
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
  display: flex;
  flex-direction: column;
  padding: 26px;
  border-radius: 16px;
  background: var(--card);
  border: 1px solid var(--line);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(79, 70, 229, 0.3);
}
.project-card.featured {
  border-color: rgba(79, 70, 229, 0.35);
  background: linear-gradient(180deg, rgba(79, 70, 229, 0.04), var(--card) 45%);
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
  background: rgba(79, 70, 229, 0.08);
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
.projects-more {
  margin-top: 32px;
  text-align: center;
}
@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
