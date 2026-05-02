interface UserProp {
    imageUrl: string,
    Name: string,
    Email: string,
    Country: string
}

export interface User {
    name: {
        first: string
        last: string
    }
    email: string
    location: {
        country: string
    }
    picture: {
        large: string
    }
}

export type RandomUserResponse = { results: User[] }

export type {UserProp}