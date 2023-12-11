export default function ProductCategoryRow({category}) {
    
    const styles ={
        categoryTitle: {
            textAlign: "center",
        }
    }
    
    return (
        <tr>
            <th colSpan={2} style={styles.categoryTitle}>
                {category.toUpperCase()}
            </th>
        </tr>
    );

}