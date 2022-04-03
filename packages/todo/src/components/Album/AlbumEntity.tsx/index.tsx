import Entity from "./AlbumEntity.styles";

export interface Props {
  name: string;
  description: string;
  image: string;
  createdAt: string;
}

const AlbumEntity = (props: Props) => {
  const { name, description, image, createdAt } = props;
  return (
    <Entity role="button" {...props}>
      <div>{name}</div>
    </Entity>
  );
};

export default AlbumEntity;
