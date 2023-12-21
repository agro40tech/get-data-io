import "./JobArticle-titles-repeats.css";

interface IJobArticle {
  arrData: { name: string; repeats: number }[];
  articleTitle: string;
}

interface IItemArticle {
  element: { name: string; repeats: number };
}

const ItemArticle: React.FC<IItemArticle> = ({ element }) => {
  return (
    <li className="article__item-vacancy">
      {element.name}
      <span className="item-vacancy__city-repeats">{element.repeats}</span>
    </li>
  );
};

const JobArticleTitlesRepeats: React.FC<IJobArticle> = ({
  arrData,
  articleTitle,
}) => {
  const arrDataArticle: React.ReactNode[] = [];

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

export default JobArticleTitlesRepeats;
