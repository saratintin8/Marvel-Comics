import BestCharacters from "../Components/BestCharacters/BestCharacters";
import Insider from "../Components/Insider/Insider";
import ListLastEvent from "../Components/ListLastEvent/ListLastEvent";

export default function Home() {
    return (
        <div>
           <BestCharacters />
           <ListLastEvent/>
           <Insider />
        </div>
    );
}
