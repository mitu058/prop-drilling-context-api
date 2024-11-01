import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold')

const Grandpa = () => {
    const asset = 'Diamond'
    return (
        <div className="grandpa ">
            <h1>Grandpa</h1>
          <AssetContext.Provider value="gold">
          <section className="flex">
           <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
           </section>
          </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1.create a context and export
 * 2. add provider for the context with a value.value could be anything.
 * 3.useContext to access value in the context API
 */