import Special from "../Special/Special";

const Cousine = ({name,asset}) => {
    return (
        <div>
            <h4>Cousine</h4>
            <p>{name}</p>
           <section>
        { asset &&   <Special asset={asset}></Special>}
           </section>
        </div>
    );
};

export default Cousine;