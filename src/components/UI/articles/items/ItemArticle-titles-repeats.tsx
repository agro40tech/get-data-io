import "./index.css";

export interface IItemTitleRepeats {
  element: { name: string; repeats: number; top?: boolean };
}

const ItemArticleTitleRepeats: React.FC<IItemTitleRepeats> = ({ element }) => {
  const className = element.top ? "article__item item-top" : "article__item ";

  return (
    <li className={className}>
      {element.name}
      <span className="item__repeats">{element.repeats}</span>
    </li>
  );
};

export default ItemArticleTitleRepeats;
