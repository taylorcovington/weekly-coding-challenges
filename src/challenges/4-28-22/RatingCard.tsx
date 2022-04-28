import Card from "../../components/Card"
import RatingButton from "../../components/RatingButton"

const RatingCard = () => {
  const numOfRatings = 5;
  return (
    <Card bgColor="#202630">
      <div style={{ color: 'white'}}>

        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </p>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {[...Array(numOfRatings)].map((_, i) => (
            <RatingButton>{i + 1}</RatingButton>
          ))}
        </div>
        <div
          style={{
            margin: '20px 0',
          
          }}
        >
          <button
            style={{
              borderRadius: '10px',
              backgroundColor: '#FA7616',
              width: '100%',
              padding: '10px',
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Card>
  )
}

export default RatingCard