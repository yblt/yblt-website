<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

let io
onMounted(() => {
  const els = document.querySelectorAll('.reveal, .mask-reveal')
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'))
    return
  }
  // 同一父级内的元素按顺序错峰，跨组的序号在模板里用 --i 指定
  els.forEach((el) => {
    if (el.classList.contains('reveal') && !el.style.getPropertyValue('--i')) {
      const siblings = [...el.parentElement.querySelectorAll(':scope > .reveal')]
      el.style.setProperty('--i', siblings.indexOf(el) % 5)
    }
  })
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
  )
  els.forEach((el) => io.observe(el))
})
onUnmounted(() => io && io.disconnect())
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </main>
  <Footer />
</template>
