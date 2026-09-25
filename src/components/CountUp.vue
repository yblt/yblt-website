<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ text: { type: String, required: true } })
const shown = ref(props.text)

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const m = props.text.match(/^([\d,]+)(.*)$/s)
  if (!m) return
  const target = parseInt(m[1].replace(/,/g, ''), 10)
  const suffix = m[2]
  const withComma = m[1].includes(',')
  const fmt = (n) => (withComma ? n.toLocaleString('en-US') : String(n))
  const dur = 1200
  const t0 = performance.now()
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur)
    const eased = 1 - Math.pow(1 - p, 3)
    shown.value = fmt(Math.round(target * eased)) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
})
</script>

<template>
  <span>{{ shown }}</span>
</template>
