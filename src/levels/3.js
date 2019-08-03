export default {
    level: {
        id: 3,
        nodes: [{
                id: 1,
                text: "Hello, welcome to level 2!",
                image: "pants.png",
                timed: false,
                actions: [{
                    text: "Go to next node",
                    goToNode: 2
                }]
            },
            {
                id: 2,
                text: "Super uninteresting choice below...",
                image: "pants.png",
                timed: false,
                actions: [{
                    text: "Go to next node",
                    goToNode: 3
                }, {
                    text: "Go to previous node",
                    goToNode: 1
                }]
            },
            {
                id: 3,
                text: "Aww damn, you've already beat the game",
                image: "pants.png",
                timed: false,
                actions: [{
                    text: "Go to next level",
                    goToLevel: 2,
                    goToNode: 1
                }]
            }
        ]
    }
}