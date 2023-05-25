import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvent.scss";
import useFetch from "../../Hooks/useFetch";
import LastEvent from "../LastEvent/LastEvent";


export default function ListLastEvent() {
    const lastEventsFetch = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bd082365ed550574ef2a6975fb47974c&hash=cf429065f3d7cb4b5ce59908e010184d&limit=5');

    console.log(lastEventsFetch);

    return (
        <div className="container-list-last-events">
            <Header size="large">Últimos eventos</Header>

            <Container>
                <Card.Group itemsPerRow={5}>
                    <LastEvent lastEventsFetch={lastEventsFetch} />

                </Card.Group>
            </Container>
        </div>
    );
}