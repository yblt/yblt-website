<script setup>
import { skills } from '../data/site'

const categories = Object.entries(skills).map(([key, cat], i) => ({
  key,
  label: cat.label,
  idx: String(i + 1).padStart(2, '0'),
  items: cat.items.map((it) => ({ name: it.name, band: band(it.level) }))
}))

// 自评百分比改成文字档位：面试官看的是范围，不是伪精度
function band(level) {
  if (level >= 85) return '熟练'
  if (level >= 80) return '掌握'
  if (level >= 75) return '熟悉'
  return '了解'
}
</script>

<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <div class="section-head reveal">
        <p class="kicker">03 / 技能栈</p>
        <h2 class="section-title mask-reveal">能干什么，按范围说</h2>
        <p class="section-sub">后端 · AI 应用 · 前端 · 工程化；档位是自我定位，非打分。</p>
      </div>

      <div class="skill-grid">
        <div v-for="cat in categories" :key="cat.key" class="skill-cat reveal">
          <div class="skill-head">
            <span class="skill-idx mono num">{{ cat.idx }}</span>
            <h3 class="skill-label">{{ cat.label }}</h3>
            <span class="skill-count mono num">{{ cat.items.length }} 项</span>
          </div>
          <ul class="skill-list">
            <li v-for="item in cat.items" :key="item.name" class="skill-row">
              <span class="skill-name">{{ item.name }}</span>
              <span class="skill-band mono">{{ item.band }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 56px;
}
.skill-cat {
  padding: 26px 0;
  border-top: 1px solid var(--hair);
}
.skill-head {
  display: grid;
  grid-template-columns: 30px 1fr auto;
  gap: 12px;
  align-items: baseline;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--hair-strong);
}
.skill-idx {
  color: var(--ink-muted);
}
.skill-label {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}
.skill-count {
  color: var(--ink-muted);
}
.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.skill-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
  padding: 8px 0;
  border-bottom: 1px solid var(--hair);
}
.skill-row:last-child {
  border-bottom: none;
}
.skill-name {
  font-size: 0.88rem;
  color: var(--ink-soft);
  line-height: 1.55;
}
.skill-band {
  color: var(--ink-muted);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
.skill-row:hover .skill-band {
  color: var(--spot);
}

@media (max-width: 860px) {
  .skill-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
