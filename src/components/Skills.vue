<script setup>
import { skills } from '../data/site'
const categories = Object.values(skills)
</script>

<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">技能栈</h2>
        <p class="section-sub">后端 · AI 应用 · 前端 · 工程化</p>
      </div>

      <div class="skills-grid">
        <div v-for="cat in categories" :key="cat.label" class="skill-cat">
          <div class="skill-cat-head" :style="{ '--cat': cat.color }">
            <span class="skill-cat-dot"></span>
            <h3>{{ cat.label }}</h3>
          </div>
          <div class="skill-list">
            <div v-for="item in cat.items" :key="item.name" class="skill-row">
              <div class="skill-row-top">
                <span class="skill-name">{{ item.name }}</span>
                <span class="skill-level">{{ item.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: item.level + '%', '--cat': cat.color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.skill-cat {
  padding: 24px;
  border-radius: 16px;
  background: var(--card);
  border: 1px solid var(--line);
}
.skill-cat-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.skill-cat-dot {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background: var(--cat);
}
.skill-cat-head h3 {
  font-size: 1.05rem;
  font-weight: 700;
}
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.skill-row-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink);
}
.skill-level {
  font-size: 0.78rem;
  color: var(--ink-muted);
  font-family: ui-monospace, monospace;
}
.skill-bar {
  height: 6px;
  border-radius: 3px;
  background: var(--bg);
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--cat), color-mix(in srgb, var(--cat) 60%, white));
  transition: width 0.8s ease;
}
</style>
