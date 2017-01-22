import React from 'react'

const CourtSummary = ({ court: { name }}) => {
  return (
    <div className="court-summary">
      <h2>{name}</h2>
    </div>
  )
}

export default CourtSummary
