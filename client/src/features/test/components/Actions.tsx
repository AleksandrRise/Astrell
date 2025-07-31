export default function Actions() {

    const htmlFor = "askai"

    return (
        <section>
            <button>
                <span>Make a</span>
                <img src="" alt="" />
                <span>Quiz</span>
            </button>

            <button>
                <img src="" alt="" />
                <span>Flashcards</span>
                <span>Make</span>
            </button>

            <label htmlFor={htmlFor}>
                <span>Ask</span>
                <span>AI</span>
                <div>
                    <input type="text" name={htmlFor} id={htmlFor} />
                    <img src="" alt="" />
                </div>
            </label>
        </section>
    )
}