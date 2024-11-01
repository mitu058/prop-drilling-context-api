import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../Grandpa/Grandpa";
const Aunty = () => {
    const [money,setMoney] = useContext(MoneyContext)

    return (
        <div>
            <h3>Aunty</h3> 
            <section className="flex">
                <Cousine name ={"Rubayet"}></Cousine>
                <Cousine name ={"Farhana"}></Cousine>
            </section>
            <p>Money : {money}</p>
            <button onClick={()=>setMoney(money + 500)}>Add money</button>
        </div>
    );
};

export default Aunty;