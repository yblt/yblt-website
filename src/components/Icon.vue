<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 20 }
})

const filled = ['github']

const paths = {
  mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
  phone: ['M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 4 5a2 2 0 0 1 2-2z'],
  download: ['M12 3v12', 'm7 11 5 5 5-5', 'M4 21h16'],
  'arrow-right': ['M4 12h16', 'm14 6 6 6-6 6'],
  'arrow-down': ['M12 4v16', 'm6 14 6 6 6-6'],
  external: ['M14 4h6v6', 'M20 4 10 14', 'M18 14v6H4V6h6'],
  check: ['m4 12 5 5L20 6'],
  copy: ['M9 9h11v11H9z', 'M5 15V4h11'],
  github: [
    'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z'
  ]
}
</script>

<template>
  <svg
    class="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="filled.includes(name) ? 'currentColor' : 'none'"
    :stroke="filled.includes(name) ? 'none' : 'currentColor'"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(d, i) in paths[name]" :key="i" :d="d" />
  </svg>
</template>

<style scoped>
.icon {
  display: block;
  flex-shrink: 0;
}
</style>
