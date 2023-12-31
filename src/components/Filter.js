import { useState } from "react";
import Card from 'react-bootstrap/Card';

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export default function Filter() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const styles = {
        card: {
            width: '500px',
            padding: '40px',
            marginLeft: "auto",
            marginRight: "auto",
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',

            
        },
        foodMartTitle: {
            textAlign: "center",
            fontWeight: "100px"
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Title as='h1' style={styles.foodMartTitle}>FOOD MART</Card.Title>

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