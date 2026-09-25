<script setup>
import { profile, highlights } from '../data/site'
import CountUp from './CountUp.vue'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <p class="hero-tag">{{ profile.target }}</p>
          <h1 class="hero-name gradient-animated">
            {{ profile.name }}
            <span class="gradient-text">.</span>
          </h1>
          <p class="hero-title">{{ profile.title }}</p>
          <p class="hero-sub">{{ profile.tagline }}</p>
          <p class="hero-intro">{{ profile.intro }}</p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="/resume.pdf" target="_blank">
              <span>下载 PDF 简历</span>
            </a>
            <button class="btn btn-ghost" @click="scrollTo('projects')">查看项目作品</button>
            <a class="btn btn-ghost" :href="profile.github" target="_blank">GitHub</a>
          </div>

          <div class="hero-stats">
            <div v-for="h in highlights" :key="h.title" class="stat">
              <div class="stat-num"><CountUp :text="h.title" /></div>
              <div class="stat-desc">{{ h.desc }}</div>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="card-photo">
            <div class="photo-ring">
              <img :src="profile.avatar" :alt="profile.name" />
            </div>
            <div class="status-chip">
              <span class="pulse-dot"></span>
              求职中 · 随时到岗
            </div>
          </div>
          <div class="float-card float-card-1">
            <span class="fc-icon">⚡</span>
            <div>
              <div class="fc-title">高并发重构</div>
              <div class="fc-sub">支撑 2 万+ 用户同时在线</div>
            </div>
          </div>
          <div class="float-card float-card-2">
            <span class="fc-icon">🤖</span>
            <div>
              <div class="fc-title">AI Agent</div>
              <div class="fc-sub">wecom-opencode-bridge</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 160px 0 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(1200px 600px at 80% -10%, var(--glow-a), transparent),
    radial-gradient(900px 500px at 10% 110%, var(--glow-b), transparent);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}
.hero-tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--primary);
  background: var(--primary-soft);
  border: 1px solid var(--primary-line);
  margin-bottom: 20px;
}
.gradient-animated {
  background: linear-gradient(120deg, var(--ink) 25%, var(--primary) 55%, var(--accent) 85%);
  background-size: 220% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientSlide 6s ease-in-out infinite alternate;
}
@keyframes gradientSlide {
  from { background-position: 0% 0; }
  to { background-position: 100% 0; }
}
.hero-name {
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-title {
  margin-top: 14px;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--ink);
}
.hero-sub {
  margin-top: 4px;
  color: var(--ink-muted);
  font-size: 1rem;
}
.hero-intro {
  margin-top: 18px;
  max-width: 560px;
  color: var(--ink-soft);
  line-height: 1.8;
  font-size: 0.98rem;
}
.hero-actions {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hero-stats {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 560px;
}
.stat {
  padding: 16px;
  border-radius: 12px;
  background: var(--card);
  border: 1px solid var(--line);
}
.stat-num {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--ink);
}
.stat-desc {
  margin-top: 4px;
  font-size: 0.78rem;
  color: var(--ink-muted);
  line-height: 1.5;
}
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}
.card-photo {
  position: relative;
  width: 300px;
}
.card-photo::before {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 36px;
  background: conic-gradient(from 0deg, transparent 0 40%, var(--primary) 50%, var(--accent) 60%, transparent 70% 100%);
  filter: blur(22px);
  opacity: 0.45;
  animation: spinGlow 7s linear infinite;
  z-index: -1;
}
@keyframes spinGlow {
  to { transform: rotate(360deg); }
}
.photo-ring {
  width: 300px;
  height: 360px;
  border-radius: 24px;
  padding: 6px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
}
.photo-ring img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  background: var(--card);
}
.status-chip {
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--line);
  font-size: 0.85rem;
  color: var(--ink-muted);
}
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 1.6s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
}
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: 0 10px 30px var(--shadow);
  animation: float 5s ease-in-out infinite;
}
.float-card-1 {
  top: 40px;
  left: -60px;
}
.float-card-2 {
  bottom: 80px;
  right: -50px;
  animation-delay: 2.2s;
}
.fc-icon {
  font-size: 1.4rem;
}
.fc-title {
  font-weight: 600;
  font-size: 0.88rem;
}
.fc-sub {
  font-size: 0.75rem;
  color: var(--ink-muted);
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero-visual {
    order: -1;
  }
  .float-card-1 { left: 0; }
  .float-card-2 { right: 0; }
}
@media (max-width: 480px) {
  .hero { padding-top: 120px; }
  .hero-stats { grid-template-columns: 1fr; }
  .card-photo, .photo-ring { width: 240px; }
  .photo-ring { height: 290px; }
}
</style>
