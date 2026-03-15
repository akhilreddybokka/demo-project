export const ProductList = () => {

    const products =
    [{
        id:1,
        name: "Akhil",
        price:234
    },
    {
        id:2,
        name: "John",
        price:567
    },
    {
        id:3,
        name: "Jane",
        price:890
    },
    {
        id:4,
        name: "Smith",
        price:123
    },
    {
        id:5,
        name: "Emily",
        price:456
    }
];

const productElements = products.filter
(product=>product.price>500)
.map(product=>{
                return(
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                );
            })

    return (
        <>
        <h2>Product List</h2>
        {productElements}
        </>
    );
};