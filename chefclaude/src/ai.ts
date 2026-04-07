// import { InferenceClient  } from '@huggingface/inference';

const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients that a use has and suggests a recipe they
    could make with some or all of those ingredients. You don't need to use every ingredient they
    mention in your recipt. The recipe can include additional ingredients they didn't mention, but try
    not to include too many extra ingredients. Format your response in markdown to make it easier to reder to a web page
`

// const hf = new InferenceClient(import.meta.env.VITE_HF_API_KEY);

// export async function getRecipeFromMistral(ingredientsArr: string[]){
//     const IngredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             // Change this from the .gguf filename to the repo ID
//             model: "HuggingFaceH4/zephyr-7b-bet", 
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have the following ingredients: ${IngredientsString}. Please give me a recipe you would recommend I make!` }
//             ],
//             max_tokens: 1024
//         });
//         return response.choices[0].message.content;

//     } catch (error: unknown){
//         if (error instanceof Error) {
//             console.error("Inference Error:", error.message);
//         }
//     }
// }

if(!import.meta.env.VITE_GROQ_API_KEY){
    console.log("Api key not got")
}

export async function getRecipe(ingredientsArr: string[]) {
    const IngredientsString = ingredientsArr.join(", ")

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY ?? ""}`,
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
            { role: "system", content: SYSTEM_PROMPT},
            { role: "user", content: `I have the following ingredients: ${IngredientsString}. Please give me a recipe you would recommend I make!` } 
        ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content; // This returns the Markdown string directly
}
