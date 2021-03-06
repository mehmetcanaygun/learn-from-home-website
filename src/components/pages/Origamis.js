import React, { useEffect, useContext, useState } from "react";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";
import { scrollTop, changeTitle } from "../../snippets";

const Origamis = (props) => {
  const context = useContext(Context);
  const { getOrigamis, origamis, loading } = context;

  const [selectedOrigami, setSelectedOrigami] = useState(null);

  // Create origami images from "steps" property
  const createStepsArr = (selected) => {
    const stepsArr = [];

    for (let i = 1; i <= selected.steps; i++) {
      stepsArr.push(`${selected.name.toLowerCase()}-${i}-min.jpg`);
    }

    return stepsArr;
  };

  useEffect(() => {
    getOrigamis();

    scrollTop();
    changeTitle("Origami");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page origamis-page">
      <Header
        header={{
          title: "Origami",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/origami", "Origami"],
          ],
          color: "#f4f0a6",
        }}
      />

      {loading ? (
        <Loading />
      ) : selectedOrigami ? (
        <div className="origami-steps" style={{ top: window.scrollY }}>
          <button
            className="back-btn"
            onClick={() => {
              setSelectedOrigami(null);
            }}
          >
            <i className="fas fa-chevron-left"></i> Origamilere Geri Dön
          </button>
          <ul>
            {createStepsArr(selectedOrigami).map((step, index) => (
              <li key={index}>
                <img src={`/assets/img/${step}`} alt="Origami Step" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid origamis-grid">
          {origamis.map((origami) => (
            <button
              key={origami.id}
              style={{
                backgroundImage: `url(${`/assets/img/${origami.name}-${origami.steps}-min.jpg`})`,
              }}
              onClick={() => {
                setSelectedOrigami(origami);
                scrollTop();
              }}
            >
              <p>{origami.nameTR}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Origamis;
