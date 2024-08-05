const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance
const SpeechSynthesis = window.speechSynthesis || window.webkitSpeechSynthesis

export const speak = (input: string | undefined, onEnd?: Function) => {
    if (!input) return
    if (SpeechSynthesis.speaking) speechSynthesis.cancel()
    else {
        const speech = new window.SpeechSynthesisUtterance()
        speech.lang = "en-US"
        speech.text = input

        window.speechSynthesis.speak(speech)

        speech.onstart = () => {
            let currentWordIndex = 0;
            const duration = 250;
            const words = speech.text.split(" ");
            const intervalId = setInterval(() => {
                if (currentWordIndex < words.length) {
                    console.log(words[currentWordIndex]);
                    currentWordIndex++;
                } else {
                    clearInterval(intervalId);  // Stop the interval when all words are spoken
                }
            }, duration);
        }

        speech.onend = () => {
            if (onEnd) onEnd()
        }
    }
}

export const speakAsync = (input: string | undefined) => {
    return new Promise((resolve, reject) => {
        if (!input) reject(false)
        if (SpeechSynthesis.speaking) speechSynthesis.cancel()
        else {
            const speech = new window.SpeechSynthesisUtterance()
            speech.lang = "en-US"
            if (input) {
                speech.text = input
                window.speechSynthesis.speak(speech)
                speech.onend = () => {
                    speechSynthesis.cancel()
                    resolve(true)
                }
            }
        }
    })
}