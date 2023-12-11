export default function ProductCategoryRow({category}) {
    return (
        <tr>
            <th>
                <th colSpan="2">
                    {category}
                </th>
            </th>
        </tr>
    );

}