<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const els = document.querySelectorAll(
    '.section-head, .project-card, .more-projects, .skill-cat, .timeline-item, .edu-card, .mini-stats, .contact-card'
  )
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  els.forEach((el, i) => {
    el.classList.add('reveal')
    el.style.animationDelay = (i % 6) * 70 + 'ms'
    io.observe(el)
  })
})
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
