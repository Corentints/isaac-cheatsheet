import {useState} from "react";
import {Transformation} from "../types";
import SearchBar from "../components/Searchbar";
import TransformationCard from "../components/TransformationCard";
import {trinkets} from "../data/trinkets";
import {transformations} from "../data/transformations";
import Head from "next/head";

export async function getStaticProps() {
    return {props: {transformations, trinkets}};
}

type TransformationsProps = {
    transformations: Array<Transformation>;
};

function Transformations({transformations}: TransformationsProps) {
    const [search, setSearch] = useState<string>("");
    return (
        <>
            <Head>
                <title>Transformations | isaac Cheatsheet</title>
            </Head>
            <SearchBar placeholder="Spider Baby" onChange={setSearch}/>
            <p className="text-white mb-6 text-sm">To unlock a transformation, you need to collect at least three items
                from a transformation set of items. </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <>
                    {transformations.filter((transformation) =>
                        transformation.name.toLowerCase().includes(search)
                    )
                        .map((transformation) => (
                            <TransformationCard
                                key={transformation.id + Math.random()}
                                transformation={transformation}
                            />

                        ))}
                </>
            </div>
        </>
    );
}

export default Transformations;
