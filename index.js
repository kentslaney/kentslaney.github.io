window.addEventListener("DOMContentLoaded", () => {
  (async () => {
    document.body.classList.add("roboto-fellback")
    try {
      await document.fonts.load('1em "Roboto"');
      document.body.classList.remove("roboto-fellback")
    } catch(e) {
      console.error(e)
    }
  })()

  LottieInteractivity.create({
    player: "#ks-left",
    mode:"scroll",
    container: "#scroll-index",
    actions: [
      {
        visibility: [0, 0.1],
        type: "stop",
        frames: [0]
      },
      {
        visibility: [0.1, 0.6],
        type: "seek",
        frames: [0, 119]
      },
      {
        visibility: [0.6, 1],
        type: "stop",
        frames: [119]
      },
    ]
  });
  LottieInteractivity.create({
    player: "#ks-center",
    mode:"scroll",
    container: "#scroll-index",
    actions: [
      {
        visibility: [0, 0.1],
        type: "stop",
        frames: [0]
      },
      {
        visibility: [0.1, 0.6],
        type: "seek",
        frames: [0, 119]
      },
      {
        visibility: [0.6, 1],
        type: "stop",
        frames: [119]
      },
    ]
  });
  const selectable = document.querySelector("#ks-select")
  const container = document.querySelector("#scroll-index")
  const parent = document.querySelector("#ks-case")
  const iconSwitch = window.getComputedStyle(document.documentElement)
    .getPropertyValue("--ks-switch")
  const scroll = () => {
    const { top } = container.getBoundingClientRect();
    const diff = window.innerHeight - top
    const pos = diff / window.innerHeight
    document.documentElement.style.setProperty("--splash-scroll", diff)
    if (pos > 0.05) selectable.classList.add("hidden")
    else selectable.classList.remove("hidden")
    if (pos > iconSwitch) parent.classList.add("icon-svg")
    else parent.classList.remove("icon-svg")
  }
  window.addEventListener("scroll", scroll, { passive: true })
  scroll()
  let scroll_bound = true
  const resize = () => {
    document.documentElement.style.setProperty(
      "--page-width", window.innerWidth)
    document.documentElement.style.setProperty(
      "--page-height", window.innerHeight)
  }
  window.addEventListener("resize", resize, { passive: true })
  resize()

  const viewport = new IntersectionObserver(entries => {
    const splash = entries.find(x => x.target.id === "splash")
    if (splash !== undefined && splash.isIntersecting !== scroll_bound) {
      scroll_bound = splash.isIntersecting
      if (scroll_bound) {
        window.addEventListener("scroll", scroll, { passive: true })
        scroll()
      } else {
        window.removeEventListener("scroll", scroll, { passive: true })
        document.documentElement.style.setProperty(
          "--splash-scroll", window.innerHeight)
      }
    }
    entries.forEach(entry => {
      const index = sections.indexOf(entry.target.id)
      visibility[index] = entry.isIntersecting
    })
    document.documentElement.style.setProperty(
      "--section-min", visibility.indexOf(true))
    document.documentElement.style.setProperty(
      "--section-max", visibility.lastIndexOf(true) + 1)
  }, { rootMargin: "-1px" })
  const sections = [
    "splash", "projects", "adventures", "education", "employment", "contact"]
  let visibility = sections.map(_ => false)
  sections.map(x => document.getElementById(x))
    .forEach(x => viewport.observe(x))
})
