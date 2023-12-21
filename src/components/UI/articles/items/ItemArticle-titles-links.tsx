import "./index.css";

interface IItemArticle {
  element: { name: string; link?: string };
}

const ItemArticleTitleLinks: React.FC<IItemArticle> = ({ element }) => {
  return (
    <li className="article__item-vacancy">
      <a
        href={element.link}
        className="aricle__link-vacancy"
        target="_blank"
        rel="noopener noreferrer">
        {element.name}
      </a>
    </li>
  );
};

export default ItemArticleTitleLinks;
