export default {
  level: {
    id: 1,
    nodes: [
      {
        id: 1,
        text: "Hello, welcome to level 2!",
        image: "pants.png",
        timed: false,
        actions: [
          {
            text:
              "Ready to go on a first date???? You are meeting the girl of your dreams tonight at your local fancy restaraunt - Beau Pantalon. But you have only one pair of clean pants!!!! Make sure to keep your pants clean as you head to your date!",
            goToNode: 2
          }
        ]
      },
      {
        id: 2,
        text:
          "As you head for the door you realize you forgot to take out the garbage earlier today. You don't want your date to think you are some sort of slob so you better do it now. How will you proceed?",
        image: "pants.png",
        timed: false,
        actions: [
          {
            text: "Double bag it and drag it.",
            goToNode: 4
          },
          {
            text: "Single bag and two hand carry it for support ",
            goToNode: 3
          }
        ]
      },
      {
        id: 3,
        text:
          "You got the bag to the trash safely but now your hands are dirty",
        image: "pants.png",
        timed: false,
        actions: [
          {
            text: "Better wipe them on your pants",
            goToNode: 4
          },
          {
            text: "Run back inside and wash them at the sink",
            goToNode: 3
          }
        ]
      },
      {
        id: 4,
        text:
          "As you drag the bag it still tears on the ground because you bought the cheap garbage bags. Now you have garbage all over your driveway!",
        image: "pants.png",
        timed: false,
        actions: [
          {
            text: "Risk going into the messy garage to grab a broom",
            goToNode: 4
          },
          {
            text: "Bend down and pick them up by hand",
            goToNode: 3
          }
        ]
      }
    ]
  }
};
