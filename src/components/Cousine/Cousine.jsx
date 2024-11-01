import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousine = ({name,asset}) => {
    const gift = useContext(AssetContext)

    return (
        <div>
            <h4>Cousine</h4>
            <p>{name}</p>
           <section>
        { asset &&   <Special asset={asset}></Special>}
        {name==='Farhana' &&  gift }
           </section>
        </div>
    );
};

export default Cousine;