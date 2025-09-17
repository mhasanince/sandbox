export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { className, ...rest } = props;
  return <button className={className} {...rest} />;
};
