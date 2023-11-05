const gameScenarios = {
    match: {
        description: "You pick up the match and strike it, illuminating the forest. You see a grizzly bear. Do you want to RUN or HIDE?",
        choices: {
            run: {
                description: "You run but the bear catches up. Do you want to FIGHT or ACCEPT DEATH?"
            },
            hide: {
                description: "You hide and a kind old lady appears. Do you ACCEPT her invitation or REFUSE?"
            }
        }
    },
    flashlight: {
        description: "You pick up the flashlight and see a path ahead. Do you want to FOLLOW the path or LOOK for the noise?",
        choices: {
            follow: {
                description: "You follow the path and find a house. Do you want to go INSIDE or go AROUND it?"
            },
            look: {
                description: "You look in the trees and see a strange creature. Do you want to FIGHT or RUN?"
            }
        }
    },
    lighter: {
        description: "You pick up the lighter and illuminate the forest. A lady asks to use it. Do you ALLOW her or REFUSE?",
        choices: {
            allow: {
                description: "You allow her and she invites you. Do you ACCEPT her invitation or TURN AWAY?"
            },
            refuse: {
                description: "You refuse, and she gets angry. She stabs you, and you die."
            }
        }
    }
};

function displayScenario(scenario) {
    document.getElementById('output').textContent = scenario.description;
}

function handleUserInput() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const output = document.getElementById('output');
    const currentScenario = gameScenarios[userInput];

    if (currentScenario) {
        displayScenario(currentScenario);
        const choices = currentScenario.choices;
        if (choices) {
            document.getElementById('choices').textContent = "Choices: " + Object.keys(choices).join(', ').toUpperCase();
        } else {
            document.getElementById('choices').textContent = '';
        }
    } else {
        output.textContent = "Invalid choice. Please enter MATCH, FLASHLIGHT, or LIGHTER to make your decision.";
        document.getElementById('choices').textContent = '';
    }
}
