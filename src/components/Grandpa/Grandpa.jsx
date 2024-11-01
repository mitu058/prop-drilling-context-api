import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className="grandpa ">
            <h1>Grandpa</h1>
           <section className="flex">
           <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </section>
        </div>
    );
};

export default Grandpa;