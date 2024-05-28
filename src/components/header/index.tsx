const Header = ({ title, description, background, images }: Section) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{background}</p>
      <p>{images}</p>
    </>
  )
};

export default Header;