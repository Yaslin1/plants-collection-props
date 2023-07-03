import content from "../data/plants.json";
import CollectionPanel from "./CollectionPanel";
import "../styles/Collection.css"

export default function CollectionList() {

    return(
        <>
        <h2>Collection Lists</h2>
        <div className="collection-container">
            {content.map((element,index) => {
                return (
                    <CollectionPanel
                        key={index}
                        data={element} />
                );
            })}
        </div>
        </>
    )
}

