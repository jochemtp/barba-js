const leaveAnimation = (container) => {
  const tl = gsap.timeline({
    defaults: {}
  })
  // Optional: add console log in leaveAnimation
  console.log('leaveAnimation is running');
}

const enterAnimation = (container) => {
  // Optional: add console log in enterAnimation
  console.log('enterAnimation is running');
}

barba.init({
  transitions: [{
    name: 'home-naar-about',
    from: {
      namespace: ["home"]
    },
    to: {
      namespace: ["about"]
    },

    leave({ current }) {
      console.log('Barba leave transition is running'); // Console log in leave
      leaveAnimation(current.container);
    },
    enter({ next }) {
      console.log('Barba enter transition is running'); // Console log in enter
      enterAnimation(next.container);
    }
  }]
});

console.log('Barba is initialized'); // Console log to confirm Barba initialization
