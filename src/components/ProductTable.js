import Table from 'react-bootstrap/Table';

import { groceries } from "../Groceries";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({filterText, inStockOnly}) {
    const rows = [];
    let lastCategory = null;

    groceries.forEach((grocery) => {
        if (
            grocery.name.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
          ) {
            return null;
          }

        if (inStockOnly && !grocery.stocked) {
            return null;
        }
        if (grocery.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    category={grocery.category}
                    key={grocery.category} />
            );
        }
        rows.push(
            <ProductRow 
                grocery={grocery}
                key={grocery.name} />
        );
    lastCategory = grocery.category;
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );  
}