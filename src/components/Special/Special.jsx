import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h5>Special</h5>
            <p>has : {asset}</p>
            <p>also has: {gift}</p>
        </div>
    );
};

export default Special;