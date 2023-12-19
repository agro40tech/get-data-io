import "./JobArticle.css";

// Интерфейсы
interface IJobArticle {
  arrData: (string | number)[];
  articleTitle: string;
}

interface IItemArticle {
  element: string | number;
}

// Элемент списка в карточке
const ItemArticle: React.FC<IItemArticle> = ({ element }) => {
  return <li className="article__item-vacancy">{element}</li>;
};

// Карточка
const JobArticle: React.FC<IJobArticle> = ({ arrData, articleTitle }) => {
  // Массив элементов списка карточки
  const arrDataArticle: React.ReactNode[] = [];

  // Сборка элементов списка карточки
  arrData.forEach((element, index) => {
    return arrDataArticle.push(<ItemArticle element={element} key={index} />);
  });

  return (
    <>
      <h3 className="job-info__article-title">{articleTitle}</h3>
      <article className="job-info__article">
        <ul className="article__list">{arrDataArticle}</ul>
      </article>
    </>
  );
};

export default JobArticle;
