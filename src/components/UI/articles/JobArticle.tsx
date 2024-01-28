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
}

const JobArticle: React.FC<IJobArticle> = ({
  arrData,
  articleTitle,
  typeArticleItem,
  accentClassName,
  loading,
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
      <h3 className="job-info__article-title">{articleTitle}</h3>

      <article className={className}>
        <ul className={loading ? "article__list preloader" : "article__list"}>{arrDataArticle}</ul>
      </article>
    </>
  );
};

export default JobArticle;
