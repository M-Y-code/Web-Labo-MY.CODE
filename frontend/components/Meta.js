const Meta = (props) => {
  const { title, discription } = props;

  return (
    <>
      <meta discription={discription} />
      <title>{title}</title>
    </>
  );
};

export default Meta;
