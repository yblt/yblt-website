<script setup>
import { experiences, education } from '../data/site'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="kicker">04 / 经历与教育</p>
        <h2 class="section-title mask-reveal">三段实习，一条主线</h2>
        <p class="section-sub">从单体崩溃到高并发集群，从 AI 产品功能到企业级 Agent 平台的落地验证。</p>
      </div>

      <div class="exp-grid">
        <div class="exp-col">
          <p class="sub-kicker mono">A / 实习经历</p>
          <div class="exp-list">
            <article v-for="(e, i) in experiences" :key="e.company" class="exp-item reveal" :style="{ '--i': i }">
              <div class="exp-head">
                <span class="exp-idx mono num">{{ String(i + 1).padStart(2, '0') }}</span>
                <div class="exp-id">
                  <h3 class="exp-role">{{ e.role }}</h3>
                  <p class="exp-company">{{ e.company }}</p>
                </div>
                <span class="exp-time mono num">{{ e.time }}</span>
              </div>
              <ul class="exp-points">
                <li v-for="p in e.points" :key="p">{{ p }}</li>
              </ul>
            </article>
          </div>
        </div>

        <aside class="exp-side">
          <p class="sub-kicker mono">B / 教育背景</p>
          <div class="edu reveal">
            <h3 class="edu-school">{{ education.school }}</h3>
            <p class="edu-major">{{ education.major }} · {{ education.degree }}</p>
            <p class="edu-time mono num">{{ education.time }}</p>
            <ul class="edu-honors">
              <li v-for="h in education.honors" :key="h">{{ h }}</li>
            </ul>
          </div>

          <p class="sub-kicker mono side-gap">C / 成果速览</p>
          <div class="figures reveal">
            <div class="figure">
              <div class="figure-num num">2 万+</div>
              <div class="figure-label">单平台同时在线支撑</div>
            </div>
            <div class="figure">
              <div class="figure-num num">50 人</div>
              <div class="figure-label">同时连麦信令同步</div>
            </div>
            <div class="figure">
              <div class="figure-num num">1,293</div>
              <div class="figure-label">企业级 Agent trace 量化样本</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub-kicker {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--spot);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--hair-strong);
  margin-bottom: 4px;
}
.side-gap {
  margin-top: 40px;
}

.exp-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  gap: 56px;
  align-items: start;
}
.exp-list {
  border-bottom: 1px solid var(--hair);
}
.exp-item {
  padding: 22px 0;
  border-top: 1px solid var(--hair);
}
.exp-item:first-child {
  border-top: none;
}
.exp-head {
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr) auto;
  gap: 12px;
  align-items: baseline;
}
.exp-idx {
  color: var(--ink-muted);
}
.exp-role {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}
.exp-company {
  margin-top: 3px;
  font-size: 0.86rem;
  color: var(--ink-soft);
}
.exp-time {
  color: var(--ink-muted);
  white-space: nowrap;
  font-size: 0.72rem;
}
.exp-points {
  list-style: none;
  margin: 14px 0 0 42px;
  padding: 0;
}
.exp-points li {
  position: relative;
  padding: 6px 0 6px 18px;
  font-size: 0.88rem;
  line-height: 1.68;
  color: var(--ink-soft);
  max-width: 68ch;
}
.exp-points li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--ink-muted);
}

.edu-school {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 18px;
}
.edu-major {
  margin-top: 4px;
  color: var(--ink-soft);
  font-size: 0.92rem;
}
.edu-time {
  margin-top: 6px;
  color: var(--ink-muted);
  font-size: 0.72rem;
}
.edu-honors {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  border-top: 1px solid var(--hair);
}
.edu-honors li {
  position: relative;
  padding: 8px 0 8px 18px;
  border-bottom: 1px solid var(--hair);
  font-size: 0.85rem;
  color: var(--ink-soft);
  line-height: 1.55;
}
.edu-honors li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 8px;
  height: 1px;
  background: var(--spot);
}

.figures {
  border-top: 1px solid var(--hair);
}
.figure {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 14px;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid var(--hair);
}
.figure-num {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--ink);
}
.figure:hover .figure-num {
  color: var(--spot);
}
.figure-label {
  font-size: 0.8rem;
  color: var(--ink-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .exp-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .exp-points {
    margin-left: 0;
  }
}
</style>
