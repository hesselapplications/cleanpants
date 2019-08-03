export default {
    level: {
        id: 1,
        nodes: [{
                id: 1,
                text: "Hello, welcome to Just One Clean Pair Of Pants",
                image: "pants.png",
                timed: false,
                actions: [{
                    text: "Go to next node",
                    goToNode: 2
                }]
            },
            {
                id: 2,
                text: "Super interesting choice below!",
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
                text: "Aww damn, you've already beat the level",
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