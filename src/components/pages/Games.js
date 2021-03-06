import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";
import { scrollTop, changeTitle } from "../../snippets";

const Games = () => {
  const context = useContext(Context);
  const { loading, getGames, games } = context;

  useEffect(() => {
    getGames();

    scrollTop();
    changeTitle("Oyunlar");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page games-page">
      <Header
        header={{
          title: "Oyunlar",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/oyunlar", "Oyunlar"],
          ],
          color: "#00b6ff",
        }}
      />

      {loading ? (
        <Loading />
      ) : (
        <div className="grid" data-aos="fade-up">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/oyunlar/${game.name}`}
              style={{
                backgroundImage: `url(${`/assets/img/${game.name}.jpg`})`,
              }}
            >
              <p>{game.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
