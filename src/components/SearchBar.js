export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    
    const styles ={
        searchBar: {
            marginRight: '10px',
        }
    }
    
    return (
        <>

        <form>
            <input 
                style={styles.searchBar}
                type="search" 
                value={filterText} 
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            
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