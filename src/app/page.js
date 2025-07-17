import React from "react"
import QuestionCard from "./components/QuestionCard"
import questions from './constants/questions'


const HomePage = () => {

    const questionMap = questions.map((question, i) => {
        return <QuestionCard key={i} question={question} />
    })

    return (
        <div className="container mx-auto px-4 h-full bg-neutral-950 flex flex-col">
            {/* nav  */}
            <div className="container mx-auto px-4 h-16 flex justify-between items-center uppercase font-semibold">
                <div>Sam Marston</div>
                <div>
                    <a
                        href="http://sammarston.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio
                    </a>
                </div>
            </div>

            {/* main  */}
            <div className="container mx-auto px-4 h-auto flex flex-col">
                {/* showcase  */}
                <div className="mx-auto mb-8 flex flex-col justify-evenly items-center">
                    <h1 className="text-5xl text-center p-4 mt-12">
                        Welcome to Sam Marston's Take Home Exercise!
                    </h1>
                    <p>
                        Below are the questions I received, which redirect you
                        to the answers.
                    </p>
                </div>
                {/* questions  */}
                <div className="mx-auto px-4 h-auto">{questionMap}</div>
            </div>
        </div>
    )
}

export default HomePage
