<script setup>
defineProps({
  rows: { type: Array, required: true }
})
</script>

<template>
  <div class="arch">
    <div v-for="(row, ri) in rows" :key="ri" class="arch-row">
      <div v-if="row.label" class="arch-label">{{ row.label }}</div>
      <div class="arch-nodes">
        <div class="arch-node" v-for="(n, ni) in row.items" :key="ni">
          <div class="arch-title">{{ n.title }}</div>
          <div v-if="n.sub" class="arch-sub">{{ n.sub }}</div>
        </div>
      </div>
      <div v-if="ri < rows.length - 1" class="arch-arrow">↓</div>
    </div>
  </div>
</template>

<style scoped>
.arch {
  display: flex;
  flex-direction: column;
  margin: 16px 0 18px;
}
.arch-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.arch-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--primary);
  text-transform: uppercase;
}
.arch-nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.arch-node {
  flex: 1 1 auto;
  min-width: 90px;
  padding: 9px 12px;
  border-radius: 10px;
  background: var(--bg);
  border: 1px solid var(--line);
  border-left: 3px solid var(--primary);
  transition: border-color 0.2s, transform 0.2s;
}
.arch-node:hover {
  border-color: var(--primary);
  transform: translateY(-1px);
}
.arch-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
}
.arch-sub {
  margin-top: 2px;
  font-size: 0.72rem;
  color: var(--ink-muted);
  line-height: 1.5;
}
.arch-arrow {
  text-align: center;
  color: var(--primary);
  font-size: 0.85rem;
  line-height: 1;
  padding: 3px 0;
  opacity: 0.7;
}
</style>
