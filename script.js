
let currentSlide = 0;

const slides = [
    {
        tag: "✨ A LITTLE SURPRISE FOR YOU ✨",
        emoji: "🎂",
        title: "HAPPY BIRTHDAY!",
        subtitle: "PAITHIYAKAARAAA!! 💜",
        content: `
            <p class="message">
                Warning! ⚠️ Someone is getting older...
                but maturity is still missing! 😂
            </p>
            <p class="message">Ready for your surprise?</p>
        `,
        button: "OPEN YOUR SURPRISE 💌"
    },
    {
        tag: "🚨 OFFICIAL BIRTHDAY REPORT 🚨",
        emoji: "😂",
        title: "YOU GOT OLDER!",
        subtitle: "But did you grow up? NOPE! 🤡",
        content: `
            <p class="message">
                Age: +1 🎂<br>
                Brain cells: Loading... ⏳<br>
                Annoying level: MAXIMUM 💀<br><br>
                Congratulations on surviving another year
                of being absolutely ridiculous!
            </p>
        `,
        button: "ROAST ME MORE 😂"
    },
    {
        tag: "🤡 BEST FRIEND ROAST SESSION 🤡",
        emoji: "🔥",
        title: "THINGS ABOUT YOU",
        subtitle: "Don't get offended, okay? 😂",
        content: `
            <div class="memory">
                🏆 Professional time-waster<br>
                 u don't care about yourself<br>
                🤡 Unlimited drama, zero shame<br>
                😂 Somehow still my favourite human
            </div>
            <p class="message">
                Disclaimer: You're not allowed to block me
                after reading this! 💀
            </p>
        `,
        button: "SHOW OUR MEMORIES 📸"
    },
    {
        tag: "📸 LITTLE MOMENTS, BIG MEMORIES",
        emoji: "🫶",
        title: "OUR MEMORIES",
        subtitle: "Every memory has a story 💗",
        content: `
            <div class="photo-grid">
                <img src="photo1.jpg" alt="Our memory 1">
                <img src="photo2.jpg" alt="Our memory 2">
                <img src="photo3.jpg" alt="Our memory 3">
            </div>
            <p class="message">
            
                Even our silliest moments mean something to me. 🩷
            </p>
        `,
        button: "FRIENDSHIP QUIZ 🎮"
    },
    {
        tag: "🎮 BEST FRIEND CHALLENGE 🎮",
        emoji: "🧠",
        title: "QUICK QUIZ!",
        subtitle: "Let's test our friendship 😂",
        content: `
            <p class="message">
                What's one thing that makes our friendship special?
            </p>
            <div class="quiz-options">
                <button onclick="answerQuiz(0)">A. our silly fights 🤓</button>
                <button onclick="answerQuiz(1)">B. our endless conversation 😂</button>
                <button onclick="answerQuiz(2)">C. being there for each other 🍟</button>
            </div>
            <p id="quiz-result"></p>
        `,
        button: "WHY YOU MATTER TO ME 💜"
    },
    {
        tag: "💗 A LITTLE HEART-TO-HEART",
        emoji: "🫂",
        title: "WHY YOU MATTER",
        subtitle: "Jokes aside, listen to me 🥹",
        content: `
            <div class="memory">
                💜 thank you for being my best friend<br><br>
                🩵 Thank you for making ordinary days memorable.<br><br>
                🩷 Thank you for all the laughs and little moments.<br><br>
                   ennoda lowest days la nee enkuda irundhathuka thanks.<br><br>
                🤍 and...naa evlo unna hurt pannalum enna vittu pogama irundhathuku thanks.
            </div>
        `,
        button: "READ YOUR LETTER 💌"
    },
    {
        tag: "💌 FROM YOUR Best friend, WITH LOVE",
        emoji: "💌",
        title: "A LETTER FOR YOU",
        subtitle: "Read this till the end 🥹",
        content: `
            <div class="letter">
                Happy Birthday pro playerr!!! 💗<br><br>
                En life la nee irukurathu unmaiya romba special da!
                enna aanalum namba friendship ippadiye irukanum.
                unkuda pesuma ennaku happy ah irukkum but nee enna understand pannikitta
                innum happy irukalam...naanum unna understand pannika try panren.
                nee eppavum happy ah and healthy ah irukanum, unnaku oru dream vechitu adha achieve pannuuu
                life la naraiya changes varum adhelam perusa eduthukama next enna pannalam nu think pannanum.
                nee deserve panra ella vishayamum unnaku kidaikanum!<br>
                namba friendship la periya misunderstanding vandhalum, namba bond ah mattum vitra kudathu.
                <br><br>
                Enna daa periya paiyana agitey poora aana konjam kuda mature aagala paaruu!! aprm enna torture panratha 
                mattum konjam korachikoo da erumaa!!.
                <br>
                onnu sollanum namba friendship evlo naal irukum nu theriyathu but irukkura varaikum genuine ah irukkanum.
                . 🫶🏻<br><br>
                ONCE AGAIN, HAPPY BIRTHDAYYY DAAAA LOOSUU! 💜
            </div>
        `,
        button: "UNLOCK THE FINAL SURPRISE 🎁"
    },
    {
        tag: "🎉 THIS ONE IS JUST FOR YOU 🎉",
        emoji: "🎂",
        title: "HAPPY BIRTHDAY!",
        subtitle: "You're stuck with me, forever da erumaa ! 😂💗",
        content: `
            <p class="message">
                No matter where life takes us, a little piece of me will 
                always be with youuu. 🫶🏻
            </p>
            <h2>YOU ARE APPRECIATED. ALWAYS. 💜</h2>
            <p class="message">
                Made with love by your VAMPIRE 🎀
            </p>
            <button onclick="celebrate()">🎉 CELEBRATE AGAIN 🎉</button>
        `,
        button: "START AGAIN ↺"
    }
];

function showSlide() {
    const slide = slides[currentSlide];
    const card = document.getElementById("slide");

    card.innerHTML = `
        <p class="tag">${slide.tag}</p>
        <div class="emoji">${slide.emoji}</div>
        <h1>${slide.title}</h1>
        <h2>${slide.subtitle}</h2>
        ${slide.content}
        <div class="navigation">
            ${currentSlide > 0
                ? '<button onclick="prevSlide()">← BACK</button>'
                : ''}
            <button onclick="nextSlide()">${slide.button}</button>
        </div>
        <p class="footer">Made with 💗 by your VAMPIRE</p>
    `;

    document.getElementById("progress").textContent =
        `Slide ${currentSlide + 1} of ${slides.length} ✨`;

    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "appear 0.5s ease";

    if (currentSlide === slides.length - 1) {
        celebrate();
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide();
    } else {
        currentSlide = 0;
        showSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide();
    }
}

function answerQuiz(choice) {
    const result = document.getElementById("quiz-result");

    if (choice === 2) {
        result.textContent =
            "CORRECT! 😂💗 Our friendship is 10% nonsense and 90% being emotional!";
    } else {
        result.textContent =
            "WRONGGG! 😂 Try again! The answer is C!";
    }
}

function celebrate() {
    const emojis = ["💜", "🩷", "🩵", "✨", "🎉", "🤍"];

    for (let i = 0; i < 45; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.fontSize = (14 + Math.random() * 16) + "px";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 5000);
    }
}

showSlide();
