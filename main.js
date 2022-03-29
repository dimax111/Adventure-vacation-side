var t1 = anime.timeline({});
t1.add({
  targets: ".forest",
  width: "100vw",
  height: "100vh",
  minWidth: 1800,
  borderRadius: ["20%", "0%"],
  easing: "easeOutQuint",
  opacity: 1,
  duration: 2000,
});
t1.add(
  {
    targets: "h1",
    translateY: "8vh",
    height: "100px",
    easing: "linear",
    duration: 800,
  },
  "-=1500"
);
t1.add(
  {
    targets: ".first",
    height: 640,
    easing: "linear",
    bottom: 0,
  },
  "+=1000"
);
t1.add(
  {
    targets: ".second",
    height: 640,
    easing: "linear",
    bottom: 0,
  },
  "-=500"
);
t1.add(
  {
    targets: ".third",
    height: 640,
    easing: "linear",
    bottom: 0,
  },
  "-=500"
);
t1.add(
  {
    targets: "h1",
    translateY: "0vh",
    height: [
      { value: 20, duration: 1000, delay: 500, easing: "linear" },
      { value: 100, duration: 1000, easing: "linear" },
    ],
    bottom: [
      { value: "86vh", duration: 1000, delay: 500, easing: "linear" },
      { value: "80vh", duration: 1000, easing: "linear" },
    ],
    easing: "linear",
    duration: 800,
  },
  "-=2000"
);
t1.add(
  {
    targets: ".svg",
    height: 100,
    bottom: "60vh",
    easing: "easeOutQuint",
    duration: 800,
    opacity: 1,
  },
  "-=1000"
);
