export default {
  level: {
    id: 2,
    nodes: [{
        id: 1,
        text: "Hello, welcome to level 2! Ready to go on a first date? You are meeting the girl of your dreams tonight at your local fancy restaraunt - Beau Pantalon. But you have only one pair of clean pants!!!! Make sure to keep your pants clean as you head to your date!",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Start Level 2",
          goToNode: 2
        }]
      },
      {
        id: 2,
        text: "As you head for the door you realize you forgot to take out the garbage earlier today. You don't want your date to think you are some sort of slob so you better do it now. How will you proceed?",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Double bag it and drag it.",
            goToNode: 4
          },
          {
            text: "Single bag and two hand carry it close to your body for support ",
            goToNode: 3
          }
        ]
      },
      {
        id: 3,
        text: "You got the bag to the trash safely but now your hands are dirty",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Better wipe them on your pants",
            goToNode: 27
          },
          {
            text: "Run back inside and wash them at the sink",
            goToNode: 19
          }
        ]
      },
      {
        id: 4,
        text: "As you drag the bag it still tears on the ground because you bought the cheap garbage bags. Now you have garbage all over your driveway!",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Risk going into the messy garage to grab a broom",
            goToNode: 6
          },
          {
            text: "Bend down and pick them up by hand",
            goToNode: 5
          }
        ]
      },
      {
        id: 5,
        text: "You bend down to pick up the trash by hand and you are met with success! Your driveway is completely clean except for one stray can at the end. Do you ignore it and go wash your hands?",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Ignore it, it's only one can",
            goToNode: 7
          },
          {
            text: "Go grab the can, we all have to do our share to keep this planet clean",
            goToNode: 31
          }
        ]
      },
      {
        id: 6,
        text: "As you head into the garage you see the broom way in the back. It looks like a treacherous trail to get there - lots of paint cans and greasy tools to get your pants dirty on. Are you sure you want to do this?",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Bail out, I can pick up the garbage by hand.",
            goToNode: 5
          },
          {
            text: "I was born for this.",
            goToNode: 8
          }
        ]
      },
      {
        id: 7,
        text: "That's right, it's just one can, who cares? You turn to go wash your hands inside when a car full of environmental protectionists see's what you have done! Appalled, they shout out \"For Mother Earth\" and start hurdling organic tomatoes at you!",
        timed: true,
        socAccImpact: 0,
        actions: [{
            text: "Dodge left by diving onto the freshly-mowed-and-likely-to-cause-grass-stains lawn",
            goToNode: 9
          },
          {
            text: "Dodge right into the messy garage",
            goToNode: 10
          }
        ]
      },
      {
        id: 8,
        text: "You recall all the geometry and physics lessons from your younger years and decide the best way to get to the broom is by either running at a full sprint and trying to hurdle the messy tools and paint cans or by creeping carefully through the debris to the broom.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Throw caution to the wind and jump",
            goToNode: 14
          },
          {
            text: "Creep slowly. You can never be too careful with only one pair of clean pants",
            goToNode: 15
          }
        ]
      },
      {
        id: 9,
        text: "You hit the lawn, and the lawn hits back. Hard. There is a 9 inch skid mark on your left thigh from the impact. Accidents happen though right?",
        timed: false,
        socAccImpact: -25,
        actions: [{
            text: "Head back inside to wash your hands from the garbage",
            goToNode: 19
          },
          {
            text: "Screw it, I need to just get to this date with only one pants imperfection. Let's head to the car.",
            goToNode: 26
          }
        ]
      },
      {
        id: 10,
        text: "You crash into the garage and dodge the dirty paint cans and tools in your path. By the time you stop running you find yourself at the back of the garage",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Wait for the attackers to leave.",
            goToNode: 11
          },
          {
            text: "Start making your way back out.",
            goToNode: 12
          }
        ]
      },
      {
        id: 11,
        text: "Okay seriously... you have to get to this date...",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Start making your way back out. ",
          goToNode: 12
        }]
      },
      {
        id: 12,
        text: "You look back on the path of paint cans and greasy tools, uncertain on how to get back out.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Throw caution to the wind and jump",
            goToNode: 13
          },
          {
            text: "Creep slowly. You can never be too careful with only one pair of clean pants",
            goToNode: 16
          }
        ]
      },
      {
        id: 13,
        text: "You run and throw yourself into the air towards the front of the garage and successfully make it over the debris. And make it to safety",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Pat yourself on the back and continue with your day",
          goToNode: 17
        }]
      },
      {
        id: 14,
        text: "You run and throw yourself into the air towards the back of the garage and land short of your mark getting a small grease stain on the cuff of your pants",
        timed: false,
        socAccImpact: -10,
        actions: [{
          text: "Sigh in defeat and continue on with your day",
          goToNode: 18
        }]
      },
      {
        id: 15,
        text: "You creep carefully through the obstacles to the back of the garage and, due to your skilled footing, make it to the broom safe and sound.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Fist pump in victory and continue with your day",
          goToNode: 18
        }]
      },
      {
        id: 16,
        text: "You creep carefully through the paint cans and tools back to the front of the garage, losing focus at the last second you get a small paint stain on the ankle of your pants.",
        timed: false,
        socAccImpact: -10,
        actions: [{
          text: '"You can\'t win them all" you say to yourself and continue on with your day',
          goToNode: 19
        }]
      },
      {
        id: 17,
        text: "With the broom in hand you now clean up the driveway effectively and efficiently.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "That was easy! I better go wash my hands before I go.",
          goToNode: 19
        }]
      },
      {
        id: 18,
        text: "You grab the broom.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Okay, let's get back out of here",
            goToNode: 12
          },
          {
            text: "Wait around and relax for a bit",
            goToNode: 11
          }
        ]
      },
      {
        id: 19,
        text: "You head to the kitchen sink to wash your hands... and then you arrive at the sink.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Wash hands.",
            goToNode: 20
          },
          {
            text: "Savor the moment and take a look around.",
            goToNode: 21
          }
        ]
      },
      {
        id: 20,
        text: "As you start to wash your hands you lift the novel and get sprayed by the sprayer next to teh faucet. You realized too late that some trickster put a rubber band around it. Ugh. Your pants are now soaked.",
        timed: false,
        socAccImpact: -25,
        actions: [{
            text: "It'll dry, move on with your day.",
            goToNode: 22
          },
          {
            text: "Better dry it off now with a blow dryer.",
            goToNode: 23
          }
        ]
      },
      {
        id: 21,
        text: "As you stop for a second to take a look around you notice a rubber band around the spray nozzle, you take it off and proceed to wash your hands.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Wow! My hands feel fresh, time for my date. Let's go to the car",
          goToNode: 26
        }]
      },
      {
        id: 22,
        text: "It's just water, it'll dry by the time I get there... ",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Time to leave for my date! I'll just walk out to the car",
          goToNode: 26
        }]
      },
      {
        id: 23,
        text: "You run to the bathroom and use a blow dryer to dry your pants successfully. But now you're late! ",
        timed: false,
        socAccImpact: 10,
        actions: [{
            text: "Run to the car to leave",
            goToNode: 24
          },
          {
            text: "Take your time, she will understand - the pants are the most important thing here right?",
            goToNode: 25
          }
        ]
      },
      {
        id: 24,
        text: "You sprint to the car and accidentally brush against the side of a wet counter top (The blow dryer was all for nothing!). Irked, you continue you mad dash to the car.",
        timed: false,
        socAccImpact: -10,
        actions: [{
          text: "Continue running",
          goToNode: 26
        }]
      },
      {
        id: 25,
        text: "That's right, the pants are the most important thing, you can afford to walk and be safe. ",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Continue walking to the car",
          goToNode: 26
        }]
      },
      {
        id: 26,
        text: "You arrive at the car and get the engine running. Time to head out for your date.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Let's crank the windows down and the music up",
            goToNode: 37
          },
          {
            text: "Let's put the air on and have a nice relaxing drive",
            goToNode: 38
          }
        ]
      },
      {
        id: 27,
        text: "You wipe your hands on your pants... seriously you actually did that... Your pants are now dirty and smelly...",
        timed: false,
        socAccImpact: -100,
        actions: []
      },
      {
        id: 28,
        text: "You look back on the path of paint cans and greasy tools, uncertain on how to get back out.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Throw caution to the wind and jump",
            goToNode: 29
          },
          {
            text: "Creep slowly. You can never be too careful with only one pair of clean pants",
            goToNode: 30
          }
        ]
      },
      {
        id: 29,
        text: "You run and throw yourself into the air towards the front of the garage and successfully make it over the debris. And make it to safety",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Pat yourself on the back and continue with your day",
          goToNode: 17
        }]
      },
      {
        id: 30,
        text: "You creep carefully through the paint cans and tools back to the front of the garage, losing focus at the last second you get a small paint stain on the ankle of your pants.",
        timed: false,
        socAccImpact: -10,
        actions: [{
          text: '"You can\'t win them all" you say to yourself and continue on with your day',
          goToNode: 17
        }]
      },
      {
        id: 31,
        text: "Reaching down, you notice that the can is full of all kinds of slimey-pants-dirtying water...",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "... Keep reaching for the can ... ",
            goToNode: 32
          },
          {
            text: "... Leave the can... it's not worth it. You need to wash your hands and get going.",
            goToNode: 7
          }
        ]
      },
      {
        id: 32,
        text: "Your hand grips the can - which is slimey and treacherous for carrying...",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: ".... This really isn't worth it, I'm just going to leave it.",
            goToNode: 7
          },
          {
            text: "Well, I'm committed now, lets get this can thrown away.",
            goToNode: 33
          }
        ]
      },
      {
        id: 33,
        text: "You lift the can into the air and immedietly feel the urge to sneeze.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Throw can on ground and sneeze.",
            goToNode: 34
          },
          {
            text: "Try to make it to the garbage before you sneeze",
            goToNode: 35
          }
        ]
      },
      {
        id: 34,
        text: "You toss the can on the ground just as you sneeze, avoiding catastrophe",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Pick up the can and throw it away",
            goToNode: 36
          },
          {
            text: "Enough of this stupid can, I'm just going inside",
            goToNode: 7
          }
        ]
      },
      {
        id: 35,
        text: "You sneeze... the can slips from your hands and ruins your only pair of clean pants.",
        timed: false,
        socAccImpact: -100,
        actions: []
      },
      {
        id: 36,
        text: "You grab the can and gently carry it to the garbage. Successfully saving the planet one can at the time.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Time to head inside and clean my hands",
          goToNode: 19
        }]
      },
      {
        id: 37,
        text: "You crank the windows down and head to Beau Pantalon, it's a beautiful drive, until a pidgeon flying overhead lands a well directed flying turd onto your one pair of clean pants.",
        timed: false,
        socAccImpact: -25,
        actions: [{
          text: "Crank up window and keep driving and arrive at Beau Pantalon and park",
          goToNode: 39
        }]
      },
      {
        id: 38,
        text: "Your drive to Beau Pantalon is uneventful - which is good in this game.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Park",
          goToNode: 39
        }]
      },
      {
        id: 39,
        text: "You park your car, nervous energy building up inside of you. You enter Beau Pantalon. The girl of your dreams is now in the same building as you. All you have to do is get to your table.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "First I want to check if my pants are clean in the bathroom.",
            goToNode: 40
          },
          {
            text: "I want to see this girl!",
            goToNode: 41
          }
        ]
      },
      {
        id: 40,
        text: "You walk into the bathroom and take a look at your pants....",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Yup... those are pants.... and they are exactly in the state that they were meant to be based on my decisions",
          goToNode: 42
        }]
      },
      {
        id: 41,
        text: "You start heading for the table. Just then a waiter comes around the corner with a tray of food. You surprise him just as much as he surprised your and the tray starts to slip.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Dodge Left",
            goToNode: 43
          },
          {
            text: "Dodge Right",
            goToNode: 44
          }
        ]
      },
      {
        id: 42,
        text: 'Just then a person barges into the bathroom, clearly feeling ill. He mumbles "... don\'t eat the garlic bread sticks..." and proceeds to vomit in your directions',
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Dodge left",
            goToNode: 45
          },
          {
            text: "Dodge right",
            goToNode: 46
          }
        ]
      },
      {
        id: 43,
        text: "You dodge left... so does the tray... it covers your only clean pair of pants with spaghetti sauce and smears of garlic butter from the breadsticks",
        timed: false,
        socAccImpact: -100,
        actions: []
      },
      {
        id: 44,
        text: "You dodge right... and narrowly miss getting dumped on by all sorts of assorted messy dishes",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Continue forward!",
            goToNode: 48
          },
          {
            text: "Help the waiter up",
            goToNode: 47
          }
        ]
      },
      {
        id: 45,
        text: "You dodge left, and miss getting puked on. That was close!",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Let's get out of the bathroom and go see this girl!",
          goToNode: 41
        }]
      },
      {
        id: 46,
        text: "You dodge right, and proceed to get spayed with unspeakable things - mainly garlicy smelling... your pants are ruined... ",
        timed: false,
        socAccImpact: -100,
        actions: []
      },
      {
        id: 47,
        text: 'You bend down to help the waiter up, as you do so he says "no no... I would not ask someone who clearly wants to keep their pants so clean to help a lowly normal and dirty pants person such as myself"',
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Follow is advice and keep heading to your dream girl.",
            goToNode: 48
          },
          {
            text: "Insist on helping him up.",
            goToNode: 49
          }
        ]
      },
      {
        id: 48,
        text: "You see her now... she is pure perfection. She's not a dress wearing girl... no no, she is wearing pants... and they are perfectly clean.",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Introduce yourself and compliment her appearence and sit down for your date.",
            goToNode: 50
          },
          {
            text: "Ignore her and check your seat for anything that could get your pants dirty.",
            goToNode: 51
          }
        ]
      },
      {
        id: 49,
        text: "You help the waiter up, putting your pants in peril... but nothing bad comes of it and the waiter thanks you profusely! He even shows you how to clean one small stain off your pants!",
        timed: false,
        socAccImpact: 10,
        actions: [{
          text: "Keep heading to your dream girl!",
          goToNode: 48
        }]
      },
      {
        id: 50,
        text: "She accepts your compliment and blushes a little, as you sit down though... you realize you've made a grave mistake... not grave... gravy - you sat in a misplaced gravy bowl... ruining your pants",
        timed: false,
        socAccImpact: -100,
        actions: []
      },
      {
        id: 51,
        text: "You check your seat for anything. Lucky you did, too, because you find as misplaced gravy bowl sitting there... you move it aside and sit down. She is very impressed by the way you take care of your pants.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Continue with your date",
          goToNode: 52
        }]
      },
      {
        id: 52,
        text: "The main course arrives",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Place the napin on your lap.",
            goToNode: 53
          },
          {
            text: "Tuck the napkin into your shirt collar and underneathe your plate - as to form a wall between your pants and anything from the table..",
            goToNode: 54
          }
        ]
      },
      {
        id: 53,
        text: "10 minutes into the main course a stray noodle flys from your plate onto the leg that doesn't have a napkin",
        timed: false,
        socAccImpact: -20,
        actions: [{
          text: "Ugh, I should have made a better barrier with my napkin",
          goToNode: 55
        }]
      },
      {
        id: 54,
        text: "Your napkin barrier lives up to the challenge and prevents all sorts of food items from reaching your pants.",
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Pat your self on the back for the stroke of genius that was your napkin protection",
          goToNode: 55
        }]
      },
      {
        id: 55,
        text: "The rest of the date goes smoothly... But now its time for the kiss goodnight. As she leans in to kiss you, you notice that she still has a little chocolate on her finger from the dessert!",
        timed: false,
        socAccImpact: 0,
        actions: [{
            text: "Push her out of the way! Don't let her near your pants.",
            goToNode: 56
          },
          {
            text: "Let her smear the chocolate all over the side your pants as you kiss her.",
            goToNode: 57
          }
        ]
      },
      {
        id: 56,
        text: 'She stumbles from the force of your push, but does not fall... Her eye\'s lock onto your, but they aren\'t angry, they are dancing with excitment! "I was testing you!" she says, "And you have passed, you are master at keeping your only one pair of pants clean!',
        timed: false,
        socAccImpact: 0,
        actions: [{
          text: "Congrats, You beat the game!!! Play again?",
          goToLevel: 1,
          goToNode: 1
        }]
      },
      {
        id: 57,
        text: 'She steps back from the kiss, a little disgusted... "I can\'t believe you let me do that to your pants" she says, " you clearly don\'t care about keeping your one and only pair of pants clean',
        timed: false,
        socAccImpact: -100,
        actions: []
      }
    ]
  }
};