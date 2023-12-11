import { useState } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export default function Filter() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <h2>Grocery List</h2>

            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />

            <br></br>

            <ProductTable 
                filterText={filterText}
                inStockOnly={inStockOnly}   
            />
        </div>
    )    
}