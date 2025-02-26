import { useContext } from "react";
import { GrandPaaMoney } from "../GranadPaa/GrandPaa";


const MySelf = () => {
    const gift=useContext(GrandPaaMoney);
    return (
        <div className="border-2 border-red-200 p-5">
            <h2 className="text-3xl">Myself</h2>
            <p>GPM- {gift}</p>
        </div>
    );
};

export default MySelf;