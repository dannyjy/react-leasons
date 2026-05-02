import type { AlterBtnProp, JokesProp } from "../types/types";

const AlertButtonData: AlterBtnProp[] = [
    {
        id: 1,
        text: 'Button 1'
    },{
        id: 2,
        text: 'Button 2'
    },{
        id: 3,
        text: 'Button 3'
    },
]

const ListData: string[] = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

const JokesData: JokesProp[] = [
	{
		id: 1,
		setup: "What's the best thing about a Boolean?",
		punchline: "Even if you're wrong, you're only off by a bit"
	},
	{
		id: 2,
		setup: "Why do programmers wear glasses?",
		punchline: "Because they need to C#"
	}
]


export { AlertButtonData, ListData, JokesData }