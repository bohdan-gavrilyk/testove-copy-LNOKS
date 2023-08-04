import React from 'react';
import { ArticleType } from '../../types/ArticleType';
import { ArticleCard } from '../ArticleCard';

type Props = {
  articles: ArticleType[],
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="wrapper">
      {articles.map((article, i) => (
      // eslint-disable-next-line react/no-array-index-key
        <ArticleCard key={i} article={article} />))}
    </div>
  );
};
