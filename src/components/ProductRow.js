export default function ProductRow({grocery}) {
    const name = grocery.stocked ? grocery.name :
        <span style={{ color: 'red'}}>
            {grocery.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{grocery.price}</td>
        </tr>
    );
}