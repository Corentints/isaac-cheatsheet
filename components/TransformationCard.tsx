import {Item, Transformation, Trinket} from "../types";
import {items} from "../data/items";
import {trinkets} from "../data/trinkets";
import Tooltip from "./Tooltip";
import 'react-popper-tooltip/dist/styles.css';

type TransformationCardProps = {
    transformation: Transformation
};

export default function TransformationCard({
                                        transformation
                                           }: TransformationCardProps) {


    let itemsTransformation: Array<Item> = [];
    if (transformation.items) {
        itemsTransformation = items.filter((item) => transformation.items.includes(item.id));
    }
    let trinketsTransformation: Array<Trinket> = [];
    if (transformation.trinkets) {
        trinketsTransformation = trinkets.filter((trinket) => transformation.trinkets.includes(trinket.id));
    }

    return (<>

            <div
                className="flex items-start px-6 py-5 space-x-3 text-gray-300 bg-gray-800 border-2 border-gray-900 rounded-lg shadow-sm hover:border-gray-900 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
                <div className="flex-shrink-0">
                    <img src={transformation.image} alt={transformation.name} className="w-16 pixelated"/>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3">
                        <p className="text-sm font-medium">{transformation.name}</p>
                    </div>
                    <p className="text-sm">{transformation.description}</p>
                    <div className="mt-4">

                        {transformation.items &&
                        <p className="text-xs text-gray-400 mb-2">Requires three of the following items : </p>}
                        {transformation.items && itemsTransformation.map((item) => (
                            <Tooltip item={item} />
                        ))}

                        {transformation.trinkets && <p className="text-xs text-gray-400 mb-2">or trinkets : </p>}
                        {transformation.trinkets && trinketsTransformation.map((trinket) => (
                            <Tooltip item={trinket} />
                        ))}
                        {transformation.requirements && 
                        <>
                            <span className="text-xs text-gray-400 mb-2 mt-5">{transformation.requirements}
                            <img src="./images/transformations/transformation_pill.png" alt="" className="pixelated inline pl-2"/>
                            </span>
                        </>}

                    </div>
                </div>
            </div>
        </>
    );
}