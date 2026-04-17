type ItemsType = { price: number }

type CartType = { items: ItemsType[] }


type SearchType = {
    query: string
}

type PostType = {
    id: string;
    title: string;
}

type FilteredListType = {
    items: string[];
    query: string;
}

export type { ItemsType, CartType, SearchType, PostType, FilteredListType }