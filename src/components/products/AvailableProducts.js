import Products from "./Products";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = (props) => {
    const productsArr = [
        {
            id: '',
            title: 'Genetics',
            price: 112,
            imageUrl: '',
        },
        {
            id: 'a2',
            title: '',
            price: 50,
            imageUrl: '',
        },
        {
            id: 'a3',
            title: '',
            price: 70,
            imageUrl: '',
        },
        {
            id: 'a4',
            title: '',
            price: 100,
            imageUrl: '',
        }
    ];
    const productList = productsArr.map((item) => (
        <ul>
          <Products data={item} />
        </ul>
      ));

    return(
            <div className={classes.container}>
                {productList}
            </div>
    )
};

export default AvailableProducts;