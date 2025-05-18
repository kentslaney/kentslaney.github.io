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
})
