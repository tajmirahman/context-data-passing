import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div className="border-2 border-red-200 p-5">
            <h1 className="text-3xl mb-5">Dad</h1>
            <div className="flex gap-5">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;