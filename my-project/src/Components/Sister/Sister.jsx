import { useContext } from "react";
import { GrandPaaMoney } from "../GranadPaa/GrandPaa";


const Sister = () => {
    const money=useContext(GrandPaaMoney);
    return (
        <div className="border-2 border-red-200 p-5"> 
            <h2 className="text-3xl">Sister</h2>
            <p>GPM- {money}</p>
        </div>
    );
};

export default Sister;