type Props = {
  title: string;
  list: string[];
  isHorizontal?: boolean;
};
function MainItem({ list, title, isHorizontal = false }: Props) {
  return <div>
    <div>{title}</div>
  </div>;
}

export default MainItem;
