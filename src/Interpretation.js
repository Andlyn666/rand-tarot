import React, { useState, useEffect } from 'react';
import { Button, Input, Space, Spin, Card } from 'antd';

function Interpretation({cardsChosen, onBackClick}) {
  const [question, setQuestion] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInterpretation, setShowInterpretation] = useState(false);

  useEffect(() => {
    // Perform any operations when cardsChosen prop changes here
  }, [cardsChosen]);

  const handleInputChange = (event) => {
    if (event.target.name === "question") {
      setQuestion(event.target.value);
    }
  };

  const handleConfirm = () => {
    setIsLoading(true);
    const cardNames = cardsChosen.map(card => (card.name + card.direction)).join(', ');
    const inputText = `Please act as a tarot fortune teller to interpret the deck for the guests, and give some advise, the guest wants to consult about ${question}, the drawn cards are ${cardNames}`;
    const serverURL = process.env.REACT_APP_API_URL; //Replace this with your actual server URL
    fetch(serverURL, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
            prompt: inputText,
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 1500
        })
    })
    .then(response => response.json())
    .then(data => {
        setResponseText(data.content);
        setShowInterpretation(true);
        setIsLoading(false);
    });
};

  const goBack = () => {
    setQuestion('');
    setResponseText('');
    setShowInterpretation(false);
    onBackClick();
  }

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: '30px',
    }}>
        <Space.Compact style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Input type="text" style={{width:'500px'}} name="question" value={question} onChange={handleInputChange} placeholder="Enter your question you want to ask"/>
            <Button type="dashed" style={{background:'Transparent', color:'white'}} onClick={handleConfirm} >Interpreting</Button>
            <Button  onClick={goBack}>Back</Button> 
        </Space.Compact>
        <div style={{marginTop: '40px'}}>
            <Spin size="large" spinning={isLoading}>
            {showInterpretation && <Card style={{color: 'white', fontFamily: 'serif', fontWeight: 'bold',
                    background:'Transparent', fontSize:'22px', width:'80%', marginLeft: 'auto',
                    marginRight: 'auto', height:'250px', overflowY: 'scroll',}}>
                    {responseText}
                </Card>}
            </Spin>
        </div>
    </div>
  );
}

export default Interpretation;