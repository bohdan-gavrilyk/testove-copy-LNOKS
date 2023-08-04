import React from 'react';
import { ArticleType } from '../../types/ArticleType';
import './style.scss';

type Props = {
  article: ArticleType,
};

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const {
    urlToImage,
    publishedAt,
    description,
    source,
  } = article;

  return (
    <div className="card">
      <img src={urlToImage} alt="card" />
      <div className="card__subtitle">
        <p className="card__name">{source.name || 'no name'}</p>
        <p className="card__date">{publishedAt.slice(0, -10)}</p>
      </div>
      <p className="card__desc">{description || 'no description'}</p>
    </div>
  );
};
