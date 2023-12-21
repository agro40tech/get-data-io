interface IItemArticle {
  element: { name: string; repeats: number; top?: boolean };
}

const ItemArticleTitleRepeats: React.FC<IItemArticle> = ({ element }) => {
  return (
    <li className="article__item-vacancy">
      {element.name} {element.top ? "+" : ""}
      <span className="item-vacancy__repeats">{element.repeats}</span>
    </li>
  );
};

export default ItemArticleTitleRepeats;
