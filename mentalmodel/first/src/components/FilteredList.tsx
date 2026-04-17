import type { FilteredListType } from '../types/types';

const FilteredList = ({ items, query }: FilteredListType) => {
    const filtered = items.filter(item => item.includes(query))

    return <ul>{filtered.map(item => <li key={item}>{ item }</li>)}</ul>
}

export default FilteredList