import { Grid, Header } from "semantic-ui-react";
import Container from "../Components/Container";
import ListSeries from "../Components/ListSeries";
import useFetch from "../Hooks/useFetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bd082365ed550574ef2a6975fb47974c&hash=cf429065f3d7cb4b5ce59908e010184d&limit=20');
    console.log(listSeries);
    return (
        <div>
            <div className="series-page">
                <div id="slide-series-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries} />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}
