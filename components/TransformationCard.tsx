import { useState } from "react";
import {Item, Trinket} from "../types";
import Card from "../components/Card";

type TransformationCardProps = {
    image: string;
    name: string;
    description: string;
    requirements: string;
    transformationItems: Array<Item>;
    transformationTrinkets: Array<Trinket>;
};


export default function TransformationCard({
                                 image,
                                 name,
                                 description, requirements, transformationItems, transformationTrinkets
                             }: TransformationCardProps) {

    const [hover, setHover] = useState<Boolean>(false);
    const [trinketHover, setTrinketHover] = useState<Boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<Item>();
    const [hoveredTrinket, setHoveredTrinket] = useState<Trinket>();


    function displayItemInfo(item: Item) {
        setHover(true);
        setHoveredItem(item);
    }
    function displayTrinketInfo(trinket: Trinket) {
        setTrinketHover(true);
        setHoveredTrinket(trinket);
    }

    return (<>
        <div
            className="flex items-start px-6 py-5 space-x-3 text-gray-300 bg-gray-800 border-2 border-gray-900 rounded-lg shadow-sm hover:border-gray-900 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
            <div className="flex-shrink-0">
                <img src={image} alt={name} className="w-10" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                    <p className="text-sm font-medium">{name}</p>
                </div>
                <p className="text-sm">{description}</p>
                {requirements && <p className="text-xs text-gray-400 mb-2 mt-5">{requirements}</p>}
                <div className="mt-4">

                    {transformationItems && <p className="text-xs text-gray-400 mb-2">Requires three of the following items : </p>}
                    {transformationItems && transformationItems.map((item) => {
                        return <>
                            <img src={item.image} alt={item.name} className="w-10 pixelated inline"
                                 onMouseEnter={(e) => displayItemInfo(item)}
                                 onMouseOut={(e) => setHover(false)}/>
                        </>
                    })}
                    {hover && hoveredItem && <>
                        <div className="absolute w-[500px] shadow">
                            <Card
                                key={hoveredItem.name}
                                image={hoveredItem.image}
                                name={hoveredItem.name}
                                description={hoveredItem.description}
                            />
                        </div>
                    </>
                    }
                    {transformationTrinkets && <p className="text-xs text-gray-400 mb-2">or trinkets : </p>}
                    {transformationTrinkets && transformationTrinkets.map((trinket) => {
                        return <>
                            <img src={trinket.image} alt={trinket.name} className="w-10 pixelated inline"
                                 onMouseEnter={(e) => displayTrinketInfo(trinket)}
                                 onMouseOut={(e) => setTrinketHover(false)}/>
                        </>
                    })}
                    {trinketHover && hoveredTrinket && <>
                        <div className="absolute w-[500px] shadow">
                            <Card
                                key={hoveredTrinket.name}
                                image={hoveredTrinket.image}
                                name={hoveredTrinket.name}
                                description={hoveredTrinket.description}
                            />
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
        </>
    );
}