import React from 'react'
import Card from '../components/Card'
import DirectionButton from '../components/DirectionButton'
import H3 from '../components/H3'
import Button from '../components/Button'

import styled from '@emotion/styled'

const QuestionPageContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  font: 20px Phosphate;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const H3other = styled(H3)`
  text-align: center;
  padding: 5px;
  color: #faaf1e;
`
const AddAnimeInput = styled.input`
  text-align: left;
  font-size: 1rem;
  margin-top: 15px;
  width: 250px;
  height: 40px;
  border: none;
  background-color: #615c5c;
  color: #faaf1e;
  font: 20px Phosphate;
`
const AddSynopsisInput = styled(AddAnimeInput)`
  height: 100px;
`
function Question() {
  return (
    <>
      <QuestionPageContainer>
        <Card>
          <H3other>Add your favourite anime</H3other>
          <Form>
            <AddAnimeInput type="text" placeholder=" anime name " />
            <AddAnimeInput type="text" placeholder=" anime image " />
            <AddSynopsisInput type="text" placeholder=" anime synopsis " />
            <Button>Submit</Button>
            <DirectionButton name="back to menu" destination="/" />
          </Form>
        </Card>
      </QuestionPageContainer>
    </>
  )
}

export default Question
