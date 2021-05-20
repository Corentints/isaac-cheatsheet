import { useState } from "react";
import {Transformation} from "../types";
import SearchBar from "../components/Searchbar";
import TransformationCard from "../components/TransformationCard";
import {transformations} from "../data/transformations";
import {items} from "../data/items";
import {trinkets} from "../data/trinkets";
import Head from "next/head";

export async function getStaticProps() {
    return { props: { transformations } };
}

type TransformationsProps = {
    transformations: Array<Transformation>;
};

function getItems() {
    transformations.forEach((transformation : any) => {
        if (transformation.items) {
            transformation.items = items.filter((item) => transformation.items.includes(item.id));
        }
    });
}

function getTrinkets() {
    transformations.forEach((transformation : any) => {
        if (transformation.trinkets) {
            transformation.trinkets = trinkets.filter((trinket) => transformation.trinkets.includes(trinket.id));
        }
    });
}

function Transformations({transformations}: TransformationsProps) {
    const [search, setSearch] = useState<string>("");
    getItems();
    getTrinkets();

    return (
        <>
            <Head>
                <title>Transformations | isaac Cheatsheet</title>
            </Head>
            <SearchBar placeholder="Spider Baby" onChange={setSearch} />
            <p className="text-white mb-6 text-sm">To unlock a transformation, you need to collect at least three items from a transformation set of items. </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <>
                        {transformations
                            .map((transformation) => (
                                <TransformationCard
                                    key={transformation.id}
                                    image={transformation.image}
                                    name={transformation.name}
                                    requirements={transformation.requirements}
                                    description={transformation.description}
                                    transformationItems={transformation.items}
                                    transformationTrinkets={transformation.trinkets}
                                />

                            ))}
                    </>
            </div>
        </>
    );
}

export default Transformations;
