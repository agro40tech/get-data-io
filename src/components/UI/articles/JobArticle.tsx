import "./JobArticle.css";
import ItemArticleTitleRepeats from "./items/ItemArticle-titles-repeats";

export enum enumTypesArticleItem {
  titleRepeats,
}

interface IJobArticle {
  arrData: { name: string; repeats: number; top?: boolean }[];
  articleTitle: string;
  typeArticleItem: enumTypesArticleItem;
}

const JobArticle: React.FC<IJobArticle> = ({
  arrData,
  articleTitle,
  typeArticleItem,
}) => {
  const arrDataArticle: React.ReactNode[] = [];

  arrData.forEach((element, index) => {
    switch (typeArticleItem) {
      case enumTypesArticleItem.titleRepeats:
        arrDataArticle.push(
          <ItemArticleTitleRepeats element={element} key={index} />
        );
        break;
      default:
        console.log("error");
        break;
    }
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
