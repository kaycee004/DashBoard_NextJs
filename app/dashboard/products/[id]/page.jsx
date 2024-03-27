import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Bitcoin
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="King Dev" />
          <label>Price</label>
          <input type="number" name="price" placeholder="kingdev@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="412" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Texas" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="bitcoin">Bitcoin</option>
            <option value="dogecoin">Dogecoin</option>
          </select>
          <label>Decription</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
