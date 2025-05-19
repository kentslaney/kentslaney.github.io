window.addEventListener("load", () => {
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
  const container = document.querySelector("#ks-case")
  const scroll = () => {
    const { _, height } = container.getBoundingClientRect();
    const pos = window.scrollY / (window.innerHeight + height)
    if (pos > 0.1) selectable.classList.add("hidden")
    else selectable.classList.remove("hidden")
    if (pos > 0.65) container.classList.add("icon-svg")
    else container.classList.remove("icon-svg")
  }
  window.addEventListener("scroll", scroll, { passive: true })
  scroll()
})
