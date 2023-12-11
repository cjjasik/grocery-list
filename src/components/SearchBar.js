export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <>

        <form>
            <input 
                type="search" 
                value={filterText} 
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
            />

            <br></br>
            
            <label>
                <input 
                    type="checkbox" 
                    checked={inStockOnly} 
                    id="in-stock"
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                /> 
                {' '}
                Only show products in stock
            </label>
        </form>
        
        </>
    )
}