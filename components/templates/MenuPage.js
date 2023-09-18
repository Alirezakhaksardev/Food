import Card from "../modules/Card";
import styles from "./MenuPage.module.css";

function MenuPage({data}) {
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map(food => (
          <Card key={food.id} id={food.id} name={food.name} price={food.price}
          details={food.details} discount={food.discount}/>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
