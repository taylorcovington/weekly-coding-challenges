interface RatingButtonProps {
  children: React.ReactNode;
}

const RatingButton = ({ children }: RatingButtonProps) => {
  return (
    <button
      style={{
        borderRadius: '50%',
        border: '1px solid #ccc',
        backgroundColor: 'inherit',
        textAlign: 'center',
        padding: '20px',
        color: 'white'
      }}
    >
      {children}
    </button>
  )
}

export default RatingButton