<script setup>
import { experiences, education } from '../data/site'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">经历与教育</h2>
        <p class="section-sub">实习经历 + 教育背景</p>
      </div>

      <div class="exp-grid">
        <div class="exp-col">
          <h3 class="exp-heading">💼 实习经历</h3>
          <div class="timeline">
            <div v-for="(e, i) in experiences" :key="e.company" class="timeline-item">
              <div class="timeline-dot" :class="{ last: i === experiences.length - 1 }"></div>
              <div class="timeline-body">
                <div class="exp-card">
                  <div class="exp-head">
                    <h4>{{ e.role }}</h4>
                    <span class="exp-time">{{ e.time }}</span>
                  </div>
                  <div class="exp-company">{{ e.company }}</div>
                  <ul>
                    <li v-for="p in e.points" :key="p">{{ p }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="exp-col">
          <h3 class="exp-heading">🎓 教育背景</h3>
          <div class="edu-card">
            <div class="edu-top">
              <span class="edu-badge">本科在读</span>
              <span class="exp-time">{{ education.time }}</span>
            </div>
            <h4>{{ education.school }}</h4>
            <div class="edu-major">{{ education.major }}</div>
            <div class="edu-honors">
              <span v-for="h in education.honors" :key="h" class="honor-chip">{{ h }}</span>
            </div>
          </div>

          <h3 class="exp-heading" style="margin-top: 32px">🏆 成果速览</h3>
          <div class="mini-stats">
            <div class="mini-stat">
              <div class="mini-num">2万+</div>
              <div class="mini-label">单平台同时在线支撑</div>
            </div>
            <div class="mini-stat">
              <div class="mini-num">50人</div>
              <div class="mini-label">同时连麦信令同步</div>
            </div>
            <div class="mini-stat">
              <div class="mini-num">1,293</div>
              <div class="mini-label">企业级 Agent trace 量化样本</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: start;
}
.exp-heading {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 24px;
}
.timeline {
  position: relative;
  padding-left: 24px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: var(--line);
}
.timeline-item {
  position: relative;
  margin-bottom: 24px;
}
.timeline-dot {
  position: absolute;
  left: -24px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--card);
  border: 3px solid var(--primary);
}
.timeline-dot.last {
  border-color: var(--accent);
}
.exp-card {
  padding: 20px 22px;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--line);
}
.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
}
.exp-head h4 {
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--ink);
}
.exp-time {
  font-size: 0.8rem;
  color: var(--ink-muted);
  white-space: nowrap;
}
.exp-company {
  margin-top: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary);
}
.exp-card ul {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.9;
}
.edu-card {
  padding: 24px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.05), var(--card));
  border: 1px solid var(--line);
}
.edu-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.edu-badge {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
  color: var(--primary);
  background: rgba(79, 70, 229, 0.1);
}
.edu-card h4 {
  font-size: 1.15rem;
  font-weight: 700;
}
.edu-major {
  margin-top: 6px;
  color: var(--ink-soft);
  font-size: 0.95rem;
}
.edu-honors {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.honor-chip {
  font-size: 0.78rem;
  padding: 5px 12px;
  border-radius: 8px;
  color: var(--accent);
  background: rgba(13, 148, 136, 0.08);
  border: 1px solid rgba(13, 148, 136, 0.2);
}
.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.mini-stat {
  padding: 16px 12px;
  text-align: center;
  border-radius: 12px;
  background: var(--card);
  border: 1px solid var(--line);
}
.mini-num {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--primary);
}
.mini-label {
  margin-top: 4px;
  font-size: 0.72rem;
  color: var(--ink-muted);
  line-height: 1.4;
}
@media (max-width: 860px) {
  .exp-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 480px) {
  .mini-stats {
    grid-template-columns: 1fr;
  }
}
</style>
