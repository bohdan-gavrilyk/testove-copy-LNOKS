import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from './api/api';
import './App.scss';
import { ArticleType } from './types/ArticleType';
import { ArticleList } from './components/ArticleList';

export const App: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [articlesEnded, setArticlesEnded] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const fetchData = () => {
      if (articlesEnded) {
        return;
      }

      fetchDataFromApi(page)
        .then((data) => {
          if (data.length < 10) {
            setArticlesEnded(true);
          }

          setArticles((prevArticles) => [...prevArticles, ...data]);
        })
        .catch(() => {
          setError(true);
          setArticlesEnded(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setIsLoading(true);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText(e.currentTarget.value);
  };

  const visibleArticles = articles.filter(article => (
    article.source.name.toLowerCase().includes(inputText.toLowerCase())
  ));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name"
        onChange={onChange}
        value={inputText}
      />

      <ArticleList articles={visibleArticles} />

      {error && 'error'}
      {!articlesEnded && !isLoading && (
        <button type="button" onClick={loadMore}>Load more</button>
      )}
    </div>
  );
};
