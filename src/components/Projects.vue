<script setup>
import { computed } from 'vue'
import { projects } from '../data/site'
import ArchDiagram from './ArchDiagram.vue'
import Icon from './Icon.vue'

const featured = computed(() => projects.filter(p => !p.compact))
const others = computed(() => projects.filter(p => p.compact))
const idx = (i) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="kicker">02 / 项目作品集</p>
        <h2 class="section-title mask-reveal">做过什么，都能翻到代码</h2>
        <p class="section-sub">原创开源项目与实习期核心项目，仓库、文档与量化结果均可追溯。</p>
      </div>

      <div class="works">
        <article
          v-for="(p, i) in featured"
          :key="p.name"
          class="work reveal"
          :style="{ '--i': i % 4 }"
        >
          <div class="work-head">
            <span class="work-idx mono num">{{ idx(i) }}</span>
            <div class="work-id">
              <h3 class="work-name">{{ p.name }}</h3>
              <p class="work-meta mono">{{ p.repo ? 'OSS · ' + p.repo : '企业项目 · 未开源' }}</p>
            </div>
            <a v-if="p.github" class="work-link" :href="p.github" target="_blank" rel="noopener">
              仓库 <Icon name="external" :size="13" />
            </a>
            <span v-else class="work-link internal">内部项目</span>
          </div>

          <p class="work-desc">{{ p.desc }}</p>

          <ArchDiagram v-if="p.arch" :rows="p.arch" />

          <ul class="work-points">
            <li v-for="f in p.features" :key="f">{{ f }}</li>
          </ul>

          <div class="work-stack">
            <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
          </div>
        </article>
      </div>

      <div class="others reveal" v-if="others.length">
        <p class="kicker others-kicker">02.1 / 其他项目</p>
        <ul class="others-list">
          <li v-for="(p, i) in others" :key="p.name" class="other-item">
            <span class="other-idx mono num">{{ idx(i) }}</span>
            <span class="other-name">{{ p.name }}</span>
            <span class="other-desc">{{ p.desc }}</span>
            <a v-if="p.github" class="other-link" :href="p.github" target="_blank" rel="noopener">
              仓库 <Icon name="arrow-right" :size="12" />
            </a>
            <span v-else class="other-link internal">内部项目</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works {
  display: block;
}
.work {
  padding: 34px 0 38px;
  border-top: 1px solid var(--hair);
  transition: border-color 0.25s;
}
.work:hover {
  border-top-color: var(--spot);
}
.work-head {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: baseline;
}
.work-idx {
  color: var(--ink-muted);
}
.work-name {
  font-size: clamp(1.25rem, 2.4vw, 1.7rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.25;
}
.work-meta {
  margin-top: 6px;
  color: var(--ink-muted);
  letter-spacing: 0.02em;
}
.work-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: var(--ink);
  text-decoration: none;
  white-space: nowrap;
  border-bottom: 1px solid var(--hair-strong);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.work-link:hover {
  color: var(--spot);
  border-color: var(--spot);
}
.work-link.internal {
  color: var(--ink-muted);
  border-bottom: none;
}
.work-desc {
  margin: 16px 0 0 58px;
  color: var(--ink-soft);
  font-size: 0.97rem;
  line-height: 1.78;
  max-width: 66ch;
}
.work-points {
  margin: 18px 0 0 58px;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--hair);
  max-width: 74ch;
}
.work-points li {
  position: relative;
  padding: 9px 0 9px 22px;
  border-bottom: 1px solid var(--hair);
  font-size: 0.88rem;
  line-height: 1.68;
  color: var(--ink-soft);
}
.work-points li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--ink-muted);
}
.work-stack {
  margin: 20px 0 0 58px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* 其他项目：一行一条的排印表 */
.others {
  margin-top: 56px;
}
.others-kicker {
  padding-bottom: 12px;
  border-bottom: 1px solid var(--hair-strong);
}
.others-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.other-item {
  display: grid;
  grid-template-columns: 34px minmax(0, 0.9fr) minmax(0, 2.2fr) auto;
  gap: 16px;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid var(--hair);
  transition: background 0.2s;
}
.other-item:hover {
  background: var(--spot-soft);
}
.other-idx {
  color: var(--ink-muted);
}
.other-name {
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: -0.015em;
}
.other-desc {
  font-size: 0.85rem;
  color: var(--ink-muted);
  line-height: 1.6;
}
.other-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--ink);
  text-decoration: none;
  white-space: nowrap;
}
.other-link:hover {
  color: var(--spot);
}
.other-link.internal {
  color: var(--ink-muted);
}

@media (max-width: 860px) {
  .work-desc,
  .work-points,
  .work-stack {
    margin-left: 0;
  }
  .work-head {
    grid-template-columns: 32px minmax(0, 1fr);
    row-gap: 10px;
  }
  .work-link {
    grid-column: 2;
    justify-self: start;
  }
  .other-item {
    grid-template-columns: 28px 1fr;
    gap: 4px 12px;
  }
  .other-desc,
  .other-link {
    grid-column: 2;
  }
}
</style>
