import Link from "next/link"

const QuestionCard = ({ question }) => {
    return (
        <Link
            href={question.route}
            className="mx-auto p-4 mb-4 bg-neutral-500 hover:bg-neutral-400 rounded flex flex-col justify-center"
        >
            {question.prefix ? (
                <span className="py-2 italic text-neutral-800">
                    {question.prefix}
                </span>
            ) : null}

            {question.q}
            
            {question.context ? (
                <span className="py-2 italic text-neutral-800">
                    {question.context}
                </span>
            ) : null}
        </Link>
    )
}

export default QuestionCard
