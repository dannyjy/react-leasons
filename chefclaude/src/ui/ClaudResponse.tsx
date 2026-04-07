import ReactMarkdown from "react-markdown"
import { type ClaudResponseProps } from '../types/types'

const ClaudResponse = ({ response, isLoading, error }: ClaudResponseProps) => {
    return (
        <section className="max-w-165" aria-live="polite">
            <h2 className="text-2xl font-bold pb-4">Chef Claude Recommends:</h2>
            {isLoading && <p className="text-[#6b7280]">Generating your recipe...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!isLoading && !error && response && <ReactMarkdown
            
                components={{
                    h1: ({ ...props }) => <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />,
                    h2: ({ ...props }) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                    h3: ({ ...props }) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
                    p: ({ ...props }) => <p className="mb-3 leading-7 text-[#475467]" {...props} />,
                    ul: ({ ...props }) => <ul className="list-disc pl-6 mb-3 space-y-1" {...props} />,
                    ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-3 space-y-1" {...props} />,
                    a: ({ ...props }) => (
                        <a className="text-[#d17557] underline" target="_blank" rel="noreferrer" {...props} />
                    ),
                    code: ({ ...props }) => (
                        <code className="bg-[#f4f4f5] px-1 py-0.5 rounded text-sm" {...props} />
                    ),
                }}
            >{response}</ReactMarkdown>}
        </section>
    )
}

export default ClaudResponse
