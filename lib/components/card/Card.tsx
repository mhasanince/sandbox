interface CardProps {
  title: string;
  description: string;
}

export const Card = (props: CardProps) => {
  const { title, description } = props;

  return (
    <div className='flex max-w-md flex-col gap-2 rounded-md border border-gray-200 bg-white p-4'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-sm text-gray-500'>{description}</p>
    </div>
  );
};
