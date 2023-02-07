import { useState } from "react"
import { Typography, Card, CardContent } from "@mui/material"

type Review = {
  name: string
  text: string
}

type Props = {}

const Reviews = (props: Props) => {
  const arrReview: Review[] = [
    {
      name: "Ava",
      text: "I am addicted to this chair! It was pretty easy to set up. Make sure you don't accidentally nail the back pillow to the thingy that holds the butt and the back pieces together",
    },
    {
      name: "Stan Woods",
      text: "Chair looks as advertised, assembly took less than 10 min. The only drawback would be the way arm is mounted to the seat. It’s a little weak.",
    },
  ]
  const [reviews, setReviews] = useState<Review[]>(arrReview)

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        Reviews
      </Typography>

      {reviews.map(({ name, text }: Review) => (
        <Card
          sx={{
            margin: "20px 0",
          }}
        >
          <CardContent>
            <div>{name}</div>
            <div>{text}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default Reviews
