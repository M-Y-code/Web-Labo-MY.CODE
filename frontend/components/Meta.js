const Meta = (props) => {
  const { title, discription } = props;
  console.log(props);

  return (
    <>
      <meta discription={discription} />
      <title>{title}</title>
    </>
  );
};

export default Meta;
