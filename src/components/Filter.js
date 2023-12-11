import { useState } from "react";
import Card from 'react-bootstrap/Card';

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export default function Filter() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <Card style={{width: '100%', padding: '40px'}}>
            <h2>Food Mart</h2>

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
        </Card>
    )    
}