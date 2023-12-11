export default function ProductRow({grocery}) {
    
    const styles = {
        outOfStock: {
            color: 'red',
            fontStyle: 'italic',
            float: 'right'
        },
        itemPrice: {
            textAlign: 'center'
        }
    }
    
    const name = grocery.stocked ? grocery.name :
        <span>
            {grocery.name} <span style={styles.outOfStock}>out of stock</span>
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td style={styles.itemPrice}>{grocery.price}</td>
        </tr>
    );
}