import React, { useEffect, useState, useCallback } from 'react';
import { fakeData } from '../../../data/fakeData';
import useEmblaCarousel from 'embla-carousel-react';
import Cards from '../../reusable-ui/Cards';
import "../../../styles/news.css";

export default function News({basePath='news'}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start',slidesToScroll: 1 });
  const [prevBtnVisible, setPrevBtnVisible] = useState(false);
  const [nextBtnVisible, setNextBtnVisible] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnVisible(emblaApi.canScrollPrev());
    setNextBtnVisible(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // On sélectionne d'abord pour régler l'état initial
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]); // Ajout propre dans les dépendances

  return (
    <div className="news">
      <div className="news-title">
        <h3 className="news-title-global">Dernières actualités</h3>
      </div>

      <div className="news-container">
        <div className="news-embla" ref={emblaRef}>
          <div className="news-embla-container">
            {fakeData.News.map(({ imageSource, title, slug }) => (
              <div className="news-embla-slide" key={slug}>
                <Cards
                  to={`${basePath}/${slug}`}
                  title={title}
                  image={imageSource}
                  slug={slug}
                  basePath={basePath}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="news-buttons">
          {prevBtnVisible && (
            <button className="carousel-btn" onClick={scrollPrev}>←</button>
          )}
          {nextBtnVisible && (
            <button className="carousel-btn" onClick={scrollNext}>→</button>
          )}
        </div>
      </div>
    </div>
  );
}
