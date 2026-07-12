const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

// 25个问题和答案
const knowledgeBase = {
    "hello":
        "Hello! Welcome to the Harry Potter Expert Chatbot.",

    "who are you":
        "I am a Harry Potter expert chatbot. You can ask me about characters, Hogwarts, magic and famous places.",

    "who is harry potter":
        "Harry Potter is the Boy Who Lived and the main hero of the story. He studies at Hogwarts and fights against Lord Voldemort.",

    "who is hermione granger":
        "Hermione Granger is one of Harry Potter's best friends. She is intelligent, hardworking and very loyal.",

    "who is ron weasley":
        "Ron Weasley is Harry Potter's best friend. He comes from the Weasley family and is loyal, funny and brave.",

    "who is albus dumbledore":
        "Albus Dumbledore is the headmaster of Hogwarts and one of the most powerful wizards in the wizarding world.",

    "who is lord voldemort":
        "Lord Voldemort is the main villain of the Harry Potter story. He wants power and fears death.",

    "who is severus snape":
        "Severus Snape is a Hogwarts professor who secretly protects Harry because he loved Harry's mother, Lily Potter.",

    "who is draco malfoy":
        "Draco Malfoy is a Slytherin student and Harry Potter's school rival.",

    "what is hogwarts":
        "Hogwarts is a school of witchcraft and wizardry where young witches and wizards learn magic.",

    "where is hogwarts":
        "Hogwarts is located in Scotland and is hidden from ordinary people called Muggles.",

    "how many houses are there":
        "There are four Hogwarts houses: Gryffindor, Hufflepuff, Ravenclaw and Slytherin.",

    "what is gryffindor":
        "Gryffindor values bravery, courage and determination.",

    "what is slytherin":
        "Slytherin values ambition, leadership and resourcefulness.",

    "what is ravenclaw":
        "Ravenclaw values intelligence, wisdom and creativity.",

    "what is hufflepuff":
        "Hufflepuff values loyalty, patience, kindness and hard work.",

    "what is quidditch":
        "Quidditch is a magical sport played on flying broomsticks.",

    "what is a wand":
        "A wand is a magical tool used by witches and wizards to cast spells.",

    "what is a patronus":
        "A Patronus is a magical guardian that protects people from Dementors.",

    "what is expelliarmus":
        "Expelliarmus is a spell used to disarm an opponent.",

    "what is avada kedavra":
        "Avada Kedavra is the Killing Curse and one of the three Unforgivable Curses.",

    "what are horcruxes":
        "Horcruxes are objects that contain pieces of a person's soul. Voldemort created them to avoid death.",

    "what are the deathly hallows":
        "The Deathly Hallows are the Elder Wand, the Resurrection Stone and the Invisibility Cloak.",

    "what is platform nine and three quarters":
        "Platform Nine and Three-Quarters is the magical platform where students board the Hogwarts Express.",

    "goodbye":
        "Goodbye! Thank you for using the Harry Potter Expert Chatbot."
};

function addMessage(name, text, type) {
    const message = document.createElement("div");
    message.className = `message ${type}-message`;

    const messageName = document.createElement("div");
    messageName.className = "message-name";
    messageName.textContent = name;

    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = text;

    message.appendChild(messageName);
    message.appendChild(bubble);
    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function cleanQuestion(question) {
    return question
        .toLowerCase()
        .trim()
        .replace(/[?.!,]/g, "")
        .replace(/\s+/g, " ");
}

function findAnswer(question) {
    const cleanedQuestion = cleanQuestion(question);

    // 完全匹配
    if (knowledgeBase[cleanedQuestion]) {
        return knowledgeBase[cleanedQuestion];
    }

    // 简单关键词匹配
    for (const key in knowledgeBase) {
        if (
            cleanedQuestion.includes(key) ||
            key.includes(cleanedQuestion)
        ) {
            return knowledgeBase[key];
        }
    }

    return "Sorry, I do not understand that question. Please ask me about Harry Potter, Hogwarts, characters, houses, spells or magical objects.";
}

function sendMessage() {
    const text = userInput.value.trim();

    if (text === "") {
        return;
    }

    addMessage("You", text, "user");
    userInput.value = "";

    const answer = findAnswer(text);

    setTimeout(() => {
        addMessage(
            "Harry Potter Expert",
            answer,
            "bot"
        );
    }, 400);
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});