import Cousin from "../Cousin/Cousin";


const Uncle = () => {

    return (
        <div className="border-2 border-red-200 p-5">
            <h1 className="text-3xl mb-5">Uncle</h1>

            <div className="flex gap-5">
                <Cousin name={'Asik'}></Cousin>
                <Cousin name={'Afiya'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;