let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {
  LottieInteractivity.create({
			  mode:"scroll",
			  player: "#firstLottie",
			  actions: [
    {
        visibility: [0, 0.3],
        type: "stop",
        frames: [0]
    },
    {
        visibility: [0.3, 0.7],
        type: "seek",
        frames: [0, 119]
    },
    {
        visibility: [0.7, 1.0],
        type: "stop",
        frames: [119]
    },
        ]
			});
});
// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('bm'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'center.json'
// })
//
// LottieInteractivity.create({
//   player: '#bm',
//   mode: 'scroll',
//   actions: [
//     {
//         visibility: [0, 0.1],
//         type: "stop",
//         frames: [0]
//     },
//     {
//         visibility: [0.1, 0.9],
//         type: "seek",
//         frames: [0, 120]
//     },
//     {
//         visibility: [0.9, 1.0],
//         type: "stop",
//         frames: [120]
//     },
//   ]
// });
