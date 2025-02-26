import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div className="border-2 border-red-200 p-5">
            <h1 className="text-3xl mb-5">Aunty</h1>
            <div className="flex gap-4">
                <Cousin name='Enaira'></Cousin>
                <Cousin name={'Mintaha'}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;