import { FaTruck } from "react-icons/fa";
import styles from "./shippingHeader.module.css"




const ShippingHeader =({title}) => {
    return (
        <header className={styles.shippingHeader}>
           <FaTruck/>
            <h3>{title}</h3>
        </header>
    );
};

export default ShippingHeader;