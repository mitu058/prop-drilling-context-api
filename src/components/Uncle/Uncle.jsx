import Cousine from "../Cousine/Cousine";

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3> 
            <section className="flex">
                <Cousine name ={"Rafsan"}></Cousine>
                <Cousine name ={"Sohana"}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;