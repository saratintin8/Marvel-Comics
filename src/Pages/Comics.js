import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../Components/Container";
import ListComics from "../Components/ListComics";
import useFetch from "../Hooks/useFetch";
export default function Comics() {
    const [renderComics, setRenderComics] = useState(10);
    const listComics = useFetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bd082365ed550574ef2a6975fb47974c&hash=cf429065f3d7cb4b5ce59908e010184d&limit=${renderComics}`);
    console.log(listComics);
    return (
        <div className="comics-page">
            <div id="slide-comics-image" />
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Comics</Header>
                        <ListComics
                            listComics={listComics}
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}
                        />
                    </Container>
                </Grid.Column>
            </Grid>

        </div>
    );
}