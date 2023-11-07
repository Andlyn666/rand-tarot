import React, { useMemo, useState, useCallback  } from "react";
import CardBack from './resuorce/BilibiliTarot/Extra/背景.png';
import './App.css';
import StarBackground from './StarBackground.js';
import Interpretation from "./Interpretation";
import { Button, Spin } from 'antd';
import { getShuffledCards, listenToShuffleEvent } from "./contract.js";

const TarotCardSlider = ({ tarotCards }) => {
    const [chosenCards, setChosenCards] = useState([]);
    const [mouseOn, setMouseOn] = useState(null);
    const [showSets, setShowSets] = useState(true);
    const [showSelect, setShowSelect] = useState(false);
    const [cardIndex, setCardIndex] = useState([]);
    const [cardDirection, setCardDirection] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);


    const handleCardSelection = useCallback((index) => {
        if (!showSelect) {
            return;
        }

        if (
            chosenCards.length < 3 &&
            !chosenCards.some(card => card.index === Number(cardIndex[0][index]))
        ) {
            setChosenCards(prevChosenCards => [
                ...prevChosenCards,
                {index: Number(cardIndex[0][index]), name: tarotCards[index].name, direction: BigInt(cardDirection[0][index]) % BigInt(2) === BigInt(0) ? 'Upright' : 'Reversed'}
            ]);
            if (chosenCards.length === 2) {
                setShowSets(false);
            }
        }        
    }, [chosenCards, setShowSets, tarotCards, cardIndex, cardDirection, showSelect]);  // Add other dependencies if they are used inside the function
       
    const SelectedCardsDisplay = () => {
        const blankCardsCount = 3 - chosenCards.length;
    
        return (
            <div className="selected-cards-display" style={{ display: 'flex' }} >
                {chosenCards.map((card) => (
                    <div key={card.index}>
                        <div 
                            key={card.index}
                            style={{
                                boxShadow: '6px 9px 9px #6666ff',
                                borderRadius: '10px',
                                margin: '10px',
                            }} 
                        >   
                         <img 
                                src={tarotCards[card.index].image} 
                                alt={tarotCards[card.index].name}
                                height={300}
                                width={180}
                                loading="lazy"
                                style={{
                                    borderRadius: '10px',
                                    transform: card.direction === 'Reversed' ? "rotate(180deg)" : "none",
                                }}
                            />
                            
                        </div>
                        <h5 className='mysterious-text' style={{color:'gray', marginTop:'15px', fontSize:'14px'}}>{card.name + ' ' + card.direction} </h5>
                    </div>
                ))}
                {[...Array(blankCardsCount)].map((_, i) => <BlankCard key={i} />)}
            </div>
        );
    };    

    const OnClickShuffle = () => {
        setIsShuffling(true);
        getShuffledCards();
        listenToShuffleEvent()
            .then(result => {
                let newCardIndex = [...cardIndex, result.returnValues[0]];
                let newCardDirection = [...cardDirection, result.returnValues[1]];
                setCardIndex(newCardIndex);
                setCardDirection(newCardDirection);
                setShowSelect(true);
                setChosenCards([]);
                setIsShuffling(false); // move this line here
            })
            .catch(err => {
                console.error(err);
                setIsShuffling(false); // you might also want to stop spinning in the case of an error
            });
    }

    const ShowShuffle = () => {
        return (
        <div className="selected-cards-display" style={{height: '300px'}}>
            <Spin spinning={isShuffling} size="large">
                <Button  onClick={()=>{OnClickShuffle();}} disabled={isShuffling}
                    style={{marginTop: '100px', background:'Transparent', color:'white',  boxShadow: '1px 2px 9px #6666ff'}}>
                    Click here to shuffle the cards and start the tarot journey.
                </Button>
            </Spin>
        </div>
        );
    };

    const cardSet = useMemo(() =>
    <div style={{
            display: 'flex', // this way the cards will align horizontally
            position: 'relative', // relative position will allow the scrolling feature to function
        }}>
    {tarotCards.map((card, index) => (
        <div 
            key={index} 
            style={{ 
                left: `${index*20}px`, 
                zIndex: tarotCards.length - index,
                transform: mouseOn === index ? 'scale(1.1)' : 'scale(1)',
                marginLeft: "-150px" // added some horizontal margin
            }}
            onClick={() => handleCardSelection(index)}
            onMouseEnter={() => setMouseOn(index)}
            onMouseLeave={() => setMouseOn(null)}
        >
            <img
                src={CardBack}
                alt={card.name}
                height={300}
                width={180}
                loading="lazy"
                style={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    boxShadow: '1px 2px 9px #6666ff'
                }}
            />
        </div>
    ))}
    </div>,
    [tarotCards, mouseOn, handleCardSelection]);

    const BlankCard = () => (
        <img src={CardBack}
                  alt={'Card Blank'}
                  height={300}
                  width={180}
                  loading="lazy"
                  style={{
                      borderRadius: '10px',
                      margin: '10px',
                      boxShadow: '6px 9px 9px #6666ff'
                  }}
                  />
    );

    const handleBackClick = () => {
        setShowSets(true);
        setChosenCards([]);
        setShowSelect(false);
    }
    
    return(
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'}}> 
            {showSelect && <h3 className='mysterious-text'>Please focus your attention and silently ponder the question in your heart, then select three cards from below.</h3>}
            {showSelect && <SelectedCardsDisplay/>}
            {!showSelect && <ShowShuffle/>}
            {showSets && 
            <div style={{
                width: '85%',
                overflowX: 'scroll',
                overflowY: 'hidden',
                paddingLeft: '150px',
                marginTop: '30px',
            }}>
            {cardSet}
            </div>
            }
            {!showSets && <Interpretation cardsChosen={chosenCards} onBackClick={handleBackClick}/>}
            <StarBackground/>
        </div>
    );
};

export default TarotCardSlider;
