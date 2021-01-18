import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";

const EnglishLearning = () => {
  const context = useContext(Context);
  const { getEnglish, english, loading } = context;

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getEnglish();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page english-learning-page">
      <Header
        header={{
          title: "İngilizce Öğren",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/ingilizce-ogren", "İngilizce Öğren"],
          ],
          color: "#ed25be",
        }}
      />

      {loading ? (
        <Loading />
      ) : selectedCategory ? (
        <div className="category">
          <button
            className="back-btn"
            onClick={() => setSelectedCategory(null)}
          >
            <i className="fas fa-chevron-left"></i> Kategorilere Geri Dön
          </button>

          <h2>{selectedCategory.category}</h2>

          <ul className="word-list grid">
            {selectedCategory.words.map((word, index) => (
              <li>
                <p
                  className="word"
                  style={{ backgroundImage: `url(${word.wordImg})` }}
                >
                  <span>{word.word}</span>
                </p>
                <p className="tr">{word.tr}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid english-categories">
          {english.map((item) => (
            <button onClick={() => setSelectedCategory(item)}>
              <span>{item.category}</span>
              <div
                className="img"
                style={{ backgroundImage: `url(${item.imgPath})` }}
              ></div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnglishLearning;
