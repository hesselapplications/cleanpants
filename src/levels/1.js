export default {
  level: {
    id: 1,
    nodes: [
      {
        id: 1,
        text:
          "It's a friday night and you know what that means. It's time to go out to Patty Nicepants house party. As you are getting ready you realize, you only have one clean pair of pants!",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Get Ready",
            goToNode: 2
          }
        ]
      },
      {
        id: 2,
        text:
          "Your Uber is on the way do you want to be the lame guy in the corner or the life of the party?",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Take a shot or two while you wait",
            goToNode: 3
          },
          {
            text: "Go wait for your Uber",
            goToNode: 4
          }
        ]
      },
      {
        id: 3,
        text:
          "You decide to take two shots of vodka before you head out, but you realize your uber is waiting. You run out to catch your ride and you trip on the crub like a clutz.",
        image: "pants.png",
        timed: false,
        socAccImpact: -25,
        actions: [
          {
            text: "Arrive at the party",
            goToNode: 5
          }
        ]
      },
      {
        id: 4,
        text:
          "You head out front of your apartment and wait for Tim your uber driver. He pulls up shortly as you get in he says, 'Damn, those are some clean pants'.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Arrive at the party",
            goToNode: 5
          }
        ]
      },
      {
        id: 5,
        text:
          "You pull up to to Pattay Nicepants house and realize the party has been going on for awhile. You hear lots of laughter from the back, but there is also a bunch of people on the front porch.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Go out back",
            goToNode: 6
          },
          {
            text: "Go up to the porch",
            goToNode: 7
          }
        ]
      },
      {
        id: 6,
        text:
          "You head out back and see Patty. She starts eyeing up your clean pants and comes over. 'Hey do you want to play some beer pong with me?'",
        image: "pants.png",
        timed: true,
        socAccImpact: 0,
        actions: [
          {
            text: "Play pong",
            goToNode: 8
          },
          {
            text: "Grab food instead",
            goToNode: 9
          }
        ]
      },
      {
        id: 7,
        text:
          "You head up the stairs and you see your good friend Bill running over to say hi, but you realize he doesn't look happy. Suddenly, he pukes all over you and your precious clean pants.",
        image: "pants.png",
        timed: false,
        socAccImpact: -100,
        actions: [
          {
            text: "Game Over",
            goToNode: 1
          }
        ]
      },
      {
        id: 8,
        text:
          "You and Patty are killing it in pong, winning games left and right, but after beating Dustin Dirtypants and Trevor Tatteredpants they throw a beer at you and storm off. Your pants are covered in beer.",
        image: "pants.png",
        timed: true,
        socAccImpact: -25,
        actions: [
          {
            text: "Chase after them",
            goToNode: 10
          },
          {
            text: "Run into the house",
            goToNode: 11
          }
        ]
      },
      {
        id: 9,
        text:
          "You walk over to the kitchen to see what kind of food Patty has. Lots of people have brought things to the party to share including wings, chips and dip, and pizza.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Eat some pizza",
            goToNode: 12
          },
          {
            text: "Eat some wings",
            goToNode: 13
          },
          {
            text: "Eat some chips and dip",
            goToNode: 14
          }
        ]
      },
      {
        id: 10,
        text:
          "You run after the two angry that they ruined your outfit in front of Patty.",
        image: "pants.png",
        timed: true,
        socAccImpact: 0,
        actions: [
          {
            text: "Yell at them",
            goToNode: 15
          },
          {
            text: "Push them from behind",
            goToNode: 16
          }
        ]
      },
      {
        id: 11,
        text:
          "You run into the house and bump into some eating wings in a hurry trying to clean off your pants. The wings land all over the floor and all over you.",
        image: "pants.png",
        timed: false,
        socAccImpact: -25,
        actions: [
          {
            text: "Clean off in the bathroom",
            goToNode: 17
          }
        ]
      },
      {
        id: 12,
        text:
          "You grab a slice of pizza and sit down to eat. As your eating you get some sauce on your hands. Eric your buddy comes past and notices you on the couch. He gives you a high five.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Wipe your hands on your pants",
            goToNode: 18
          }
        ]
      },
      {
        id: 13,
        text:
          "You grab some wings and sit down to eat. As your eating you get some sauce on your hands. Eric your buddy comes past and notices you on the couch. He gives you a high five.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Wipe your hands on your pants",
            goToNode: 18
          }
        ]
      },
      {
        id: 14,
        text:
          "You grab some chips and dip and sit down to eat. As you are eating you drop some dip on your pants. Eric your buddy comes past, 'Dude what happened to your pants, thats not how you get the ladies",
        image: "pants.png",
        timed: false,
        socAccImpact: -25,
        actions: [
          {
            text: "Clean up in the bathroom",
            goToNode: 17
          }
        ]
      },
      {
        id: 15,
        text:
          "You yell at the guys and they turn around and push you into the dirt. Everyone arounds stands around and ridicules you for your dirt covered pants.",
        image: "pants.png",
        timed: false,
        socAccImpact: -25,
        actions: [
          {
            text: "Clean up in the bathroom",
            goToNode: 19
          }
        ]
      },
      {
        id: 16,
        text:
          "You push Dustin and he falls onto the ground in shock. Everyone around you cheers as Dustin and Trevor run out of the party in embarassment.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Clean up in the bathroom",
            goToNode: 20
          }
        ]
      },
      {
        id: 17,
        text:
          "You find the bathroom and attempt to clean off your pants as best you can. You make a little progress and hope Patty and everyone else won't notice.",
        image: "pants.png",
        timed: false,
        socAccImpact: 25,
        actions: [
          {
            text: "Go back to the party",
            goToNode: 21
          }
        ]
      },
      {
        id: 18,
        text:
          "You realize that you now have food all of your precious pants and decide you better clean up in the bathroom",
        image: "pants.png",
        timed: false,
        socAccImpact: -25,
        actions: [
          {
            text: "Clean up in the bathroom",
            goToNode: 17
          }
        ]
      },
      {
        id: 19,
        text:
          "As you leave the bathroom Patty comes up to you. 'Are you okay?'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Its no big deal",
            goToNode: 22
          },
          {
            text: "No, look what they did to my pants!",
            goToNode: 23
          }
        ]
      },
      {
        id: 20,
        text:
          "As you leave the bathroom Patty comes up to you. 'That was amazing those guys were jerks and did you see there pants?'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Make fun of their pants",
            goToNode: 24
          },
          {
            text: "Apologize for the fight",
            goToNode: 25
          }
        ]
      },
      {
        id: 21,
        text:
          "Eric comes to meet you after you leave the bathroom. 'Let's do some shots man!'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Take some shots",
            goToNode: 26
          }
        ]
      },
      {
        id: 22,
        text:
          "'Its no big deal I hope they didn't ruin your party.' Patty replies, 'Absolutely not, why don't we get a drink?'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Get a beer from the keg",
            goToNode: 27
          },
          {
            text: "Get a mixed drink",
            goToNode: 28
          }
        ]
      },
      {
        id: 23,
        text:
          "'They don't look that bad, at least they are better then those other guys! Why don't we get a drink?'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Get a beer from the keg",
            goToNode: 27
          },
          {
            text: "Get a mixed drink",
            goToNode: 28
          }
        ]
      },
      {
        id: 24,
        text:
          "'Yeah they had the worst pants I have ever seen!' Patty replies, 'I know, I have a great idea to celebrate them leaving'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Keg stand",
            goToNode: 29
          }
        ]
      },
      {
        id: 25,
        text:
          "'I'm really sorry about the fight Patty, I hope it didn't ruin the party.' Patty replies, 'Absolutely not! I actually have a great idea to celebrate them leaving'",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Keg stand",
            goToNode: 29
          }
        ]
      },
      {
        id: 26,
        text:
          "You and Eric take three shots. 'Wow I feel awesome lets do some more!,' says Eric.",
        image: "pants.png",
        timed: true,
        socAccImpact: 0,
        actions: [
          {
            text: "Take more shots",
            goToNode: 30
          },
          {
            text: "Go dancing",
            goToNode: 31
          }
        ]
      },
      {
        id: 27,
        text:
          "You grab a beer from the keg and go sit down with Patty to talk.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Talk with Patty",
            goToNode: 32
          }
        ]
      },
      {
        id: 28,
        text:
          "You start to pour out your mixed drink and you spill slightly on your pants. You shrug it off and go sit down with Patty.",
        image: "pants.png",
        timed: false,
        socAccImpact: -10,
        actions: [
          {
            text: "Talk with Patty",
            goToNode: 32
          }
        ]
      },
      {
        id: 29,
        text:
          "Everyone around you starts to cheer as two people lift you up to do a keg stand. You drink a lot and as they set you down you puke all over yourself and several other people. Your pants are ruined and you run home in shame.",
        image: "pants.png",
        timed: false,
        socAccImpact: -100,
        actions: [
          {
            text: "Game Over",
            goToNode: 1
          }
        ]
      },
      {
        id: 30,
        text:
          "You take more shots and start to feel nauseous and uneasy. Your friend Eric urges you to take more shots.",
        image: "pants.png",
        timed: true,
        socAccImpact: 0,
        actions: [
          {
            text: "Take more shots",
            goToNode: 33
          },
          {
            text: "Sit down for a minute",
            goToNode: 34
          }
        ]
      },
      {
        id: 31,
        text:
          "You and Eric find some other people in the back of the house and start to dance and talk.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Continue dancing",
            goToNode: 35
          }
        ]
      },
      {
        id: 32,
        text:
          "You and Patty finish your drinks and realize its almost 3am. You thank her for inviting you over and go outside to wait for your uber home.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Go home",
            goToNode: 36
          }
        ]
      },
      {
        id: 33,
        text:
          "You and Eric take three more shots. You feel very sick and run to the bathroom, but you don't make it and puke on your pants. They are ruined and you leave the party in shame with your dirty pants.",
        image: "pants.png",
        timed: false,
        socAccImpact: -100,
        actions: [
          {
            text: "Game Over",
            goToNode: 1
          }
        ]
      },
      {
        id: 34,
        text:
          "You realize you are not feeling well. You find Patty and tell her you are leaving and then go wait for your uber.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Go home",
            goToNode: 36
          }
        ]
      },
      {
        id: 35,
        text:
          "You and Eric keep dancing and have a great night. You realize it is now late and say goodbye to everyone and go to wait for your uber.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Go home",
            goToNode: 36
          }
        ]
      },
      {
        id: 36,
        text:
          "You made it home safely and while your pantaloons might not be the cleanest you got the job done.",
        image: "pants.png",
        timed: false,
        socAccImpact: 0,
        actions: [
          {
            text: "Advance to level 2",
            goToLevel: 2,
            goToNode: 1
          }
        ]
      }
    ]
  }
};
