export default function SearchBar() {
    return (
        <>
            <input type="search" placeholder="Search..." />
            <input type="checkbox" id="in-stock" /> 
            <label for="in-stock">Only show products in stock</label>
        </>
    )
}