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
  const container = document.querySelector("#scroll-index")
  const parent = document.querySelector("#ks-case")
  const scroll = () => {
    const { top } = container.getBoundingClientRect();
    const pos = (window.innerHeight - top) / window.innerHeight
    if (pos > 0.05) selectable.classList.add("hidden")
    else selectable.classList.remove("hidden")
    if (pos > 0.65) parent.classList.add("icon-svg")
    else parent.classList.remove("icon-svg")
  }
  window.addEventListener("scroll", scroll, { passive: true })
  scroll()
})
