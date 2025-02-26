import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";


export const GrandPaaAssets = createContext('Black Diamond');
export const GrandPaaMoney = createContext(1000);



const GrandPaa = () => {

    const [money, setMoney]=useState(1000);

    return (
        <div className="border-2 border-red-200 p-5  mx-auto ">
            <div className="mb-10">
            <h1 className="text-4xl mb-5">Grand Paa</h1>
            <button className="border-2 bg-slate-100" onClick={()=>setMoney(money+1000)}>G P M</button>
            </div>

            <div className="flex justify-evenly">

                <GrandPaaMoney.Provider value={[money, setMoney]}>
                    <GrandPaaAssets.Provider value="Black Diamond">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </GrandPaaAssets.Provider>
                </GrandPaaMoney.Provider>

            </div>

        </div>
    );
};

export default GrandPaa;