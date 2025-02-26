import { useContext } from "react";
import { GrandPaaAssets } from "../GranadPaa/GrandPaa";


const Cousin = ({name}) => {

    const gift=useContext(GrandPaaAssets)

    return (
        <div className="border-2 border-red-200 p-5">
            <h1 className="text-xl">Cousin</h1>

            <div>
                <p >{name}</p>
                {
                    name=== 'Mintaha' && <p>GPA-{gift}</p>
                }
            </div>
           
        </div>
    );
};

export default Cousin;