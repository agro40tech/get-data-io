import { Link } from "react-router-dom";
import "./JobArticle.css";
import ItemArticleTitleLinks from "./items/ItemArticle-titles-links";
import ItemArticleTitleRepeats from "./items/ItemArticle-titles-repeats";

export enum enumTypesArticleItem {
  titleRepeats,
  titleLinks,
}

interface IJobArticle {
  arrData: any[];
  articleTitle: string;
  typeArticleItem: enumTypesArticleItem;
  accentClassName?: string;
  loading: boolean;
  hashArr?: string;
}

const JobArticle: React.FC<IJobArticle> = ({
  arrData,
  articleTitle,
  typeArticleItem,
  accentClassName,
  loading,
  hashArr,
}) => {
  const arrDataArticle: React.ReactNode[] = [];

  arrData.forEach((element, index) => {
    switch (typeArticleItem) {
      case enumTypesArticleItem.titleRepeats:
        arrDataArticle.push(<ItemArticleTitleRepeats element={element} key={index} />);
        break;
      case enumTypesArticleItem.titleLinks:
        arrDataArticle.push(<ItemArticleTitleLinks element={element} key={index} />);
        break;
      default:
        console.log("error");
        break;
    }
  });

  const className = accentClassName ? `job-info__article ${accentClassName}` : "job-info__article";

  return (
    <>
      {hashArr ? (
        <Link to={{ pathname: "/viewArticle", hash: hashArr }}>
          <h3 className="job-info__article-title">{articleTitle}</h3>
        </Link>
      ) : (
        <h3 className="job-info__article-title">{articleTitle}</h3>
      )}

      <article className={className}>
        <ul className={loading ? "article__list preloader" : "article__list"}>{arrDataArticle}</ul>
      </article>
    </>
  );
};

export default JobArticle;
