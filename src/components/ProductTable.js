import { groceries } from "../Groceries";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
    const rows = [];
    let lastCategory = null;

    groceries.forEach((grocery) => {
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
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );  
}