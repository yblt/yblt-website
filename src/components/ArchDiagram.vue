<script setup>
defineProps({
  rows: { type: Array, required: true }
})
</script>

<template>
  <div class="arch">
    <template v-for="(row, ri) in rows" :key="ri">
      <div class="arch-row">
        <div v-if="row.label" class="arch-label mono">{{ row.label }}</div>
        <div class="arch-nodes">
          <div class="arch-node" v-for="(n, ni) in row.items" :key="ni">
            <div class="arch-title">{{ n.title }}</div>
            <div v-if="n.sub" class="arch-sub">{{ n.sub }}</div>
          </div>
        </div>
      </div>
      <div v-if="ri < rows.length - 1" class="arch-step" aria-hidden="true">
        <span class="arch-caret"></span>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* 横向流程条：无外框，节点按内容收拢，窄屏自动换行 */
.arch {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 0;
  margin: 20px 0 0 58px;
}
.arch-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.arch-nodes {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.arch-label {
  color: var(--ink-muted);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.arch-node {
  padding: 8px 12px;
  border: 1px solid var(--hair);
  border-radius: 2px;
  background: var(--card);
  transition: border-color 0.2s;
}
.arch-node:hover {
  border-color: var(--spot);
}
.arch-title {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.4;
  white-space: nowrap;
}
.arch-sub {
  margin-top: 2px;
  font-size: 0.71rem;
  color: var(--ink-muted);
  line-height: 1.5;
}
.arch-step {
  position: relative;
  width: 28px;
  height: 1px;
  background: var(--hair-strong);
  margin: 0 3px;
  flex-shrink: 0;
}
.arch-caret {
  position: absolute;
  right: 0;
  top: -3px;
  width: 5px;
  height: 5px;
  border-top: 1px solid var(--hair-strong);
  border-right: 1px solid var(--hair-strong);
  transform: rotate(45deg);
}
@media (max-width: 860px) {
  .arch {
    margin-left: 0;
  }
  .arch-title {
    white-space: normal;
  }
}
</style>
