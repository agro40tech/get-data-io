import "./index.css";

export interface IItemTitleLinks {
  element: { name: string; link: string };
}

const ItemArticleTitleLinks: React.FC<IItemTitleLinks> = ({ element }) => {
  return (
    <li className="article__item">
      <a
        href={element.link}
        className="aricle__link"
        target="_blank"
        rel="noopener noreferrer">
        {element.name}
      </a>
    </li>
  );
};

export default ItemArticleTitleLinks;
