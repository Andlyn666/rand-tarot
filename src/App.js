import './App.css';
import TarotCardSlider from './tarot.js';
import TheFool from './resuorce/BilibiliTarot/MajorArcana/0-愚者.png';
import TheMagician from './resuorce/BilibiliTarot/MajorArcana/01-魔术师.png';
import TheHighPriestess from './resuorce/BilibiliTarot/MajorArcana/02-女祭司.png';
import TheEmpress from './resuorce/BilibiliTarot/MajorArcana/03-女皇.png';
import TheEmperor from './resuorce/BilibiliTarot/MajorArcana/04-皇帝.png';
import TheHierophant from './resuorce/BilibiliTarot/MajorArcana/05-教皇.png';
import TheLovers from './resuorce/BilibiliTarot/MajorArcana/06-恋人.png';
import TheChariot from './resuorce/BilibiliTarot/MajorArcana/07-战车.png';
import Strength from './resuorce/BilibiliTarot/MajorArcana/08-力量.png';
import TheHermit from './resuorce/BilibiliTarot/MajorArcana/09-隐士.png';
import WheelOfFortune from './resuorce/BilibiliTarot/MajorArcana/10-命运之轮.png';
import Justice from './resuorce/BilibiliTarot/MajorArcana/11-正义.png';
import TheHangedMan from './resuorce/BilibiliTarot/MajorArcana/12-倒吊人.png';
import Death from './resuorce/BilibiliTarot/MajorArcana/13-死神.png';
import Temperance from './resuorce/BilibiliTarot/MajorArcana/14-节制.png';
import TheDevil from './resuorce/BilibiliTarot/MajorArcana/15-恶魔.png';
import TheTower from './resuorce/BilibiliTarot/MajorArcana/16-高塔.png';
import TheStar from './resuorce/BilibiliTarot/MajorArcana/17-星星.png';
import TheMoon from './resuorce/BilibiliTarot/MajorArcana/18-月亮.png';
import TheSun from './resuorce/BilibiliTarot/MajorArcana/19-太阳.png';
import Judgement from './resuorce/BilibiliTarot/MajorArcana/20-审判.png';
import TheWorld from './resuorce/BilibiliTarot/MajorArcana/21-世界.png';
import Wand1 from './resuorce/BilibiliTarot/Wands/权杖-01.png';
import Wand2 from './resuorce/BilibiliTarot/Wands/权杖-02.png';
import Wand3 from './resuorce/BilibiliTarot/Wands/权杖-03.png';
import Wand4 from './resuorce/BilibiliTarot/Wands/权杖-04.png';
import Wand5 from './resuorce/BilibiliTarot/Wands/权杖-05.png';
import Wand6 from './resuorce/BilibiliTarot/Wands/权杖-06.png';
import Wand7 from './resuorce/BilibiliTarot/Wands/权杖-07.png';
import Wand8 from './resuorce/BilibiliTarot/Wands/权杖-08.png';
import Wand9 from './resuorce/BilibiliTarot/Wands/权杖-09.png';
import Wand10 from './resuorce/BilibiliTarot/Wands/权杖-10.png';
import WandKing from './resuorce/BilibiliTarot/Wands/权杖国王.png';
import WandQueen from './resuorce/BilibiliTarot/Wands/权杖王后.png';
import WandKnight from './resuorce/BilibiliTarot/Wands/权杖骑士.png';
import WandPage from './resuorce/BilibiliTarot/Wands/权杖侍从.png';
import Cup1 from './resuorce/BilibiliTarot/Cups/圣杯-01.png';
import Cup2 from './resuorce/BilibiliTarot/Cups/圣杯-02.png';
import Cup3 from './resuorce/BilibiliTarot/Cups/圣杯-03.png';
import Cup4 from './resuorce/BilibiliTarot/Cups/圣杯-04.png';
import Cup5 from './resuorce/BilibiliTarot/Cups/圣杯-05.png';
import Cup6 from './resuorce/BilibiliTarot/Cups/圣杯-06.png';
import Cup7 from './resuorce/BilibiliTarot/Cups/圣杯-07.png';
import Cup8 from './resuorce/BilibiliTarot/Cups/圣杯-08.png';
import Cup9 from './resuorce/BilibiliTarot/Cups/圣杯-09.png';
import Cup10 from './resuorce/BilibiliTarot/Cups/圣杯-10.png';
import CupKing from './resuorce/BilibiliTarot/Cups/圣杯国王.png';
import CupQueen from './resuorce/BilibiliTarot/Cups/圣杯王后.png';
import CupKnight from './resuorce/BilibiliTarot/Cups/圣杯骑士.png'; 
import CupPage from './resuorce/BilibiliTarot/Cups/圣杯侍从.png';
import Sword1 from './resuorce/BilibiliTarot/Swords/宝剑-01.png';
import Sword2 from './resuorce/BilibiliTarot/Swords/宝剑-02.png';
import Sword3 from './resuorce/BilibiliTarot/Swords/宝剑-03.png';
import Sword4 from './resuorce/BilibiliTarot/Swords/宝剑-04.png';
import Sword5 from './resuorce/BilibiliTarot/Swords/宝剑-05.png';
import Sword6 from './resuorce/BilibiliTarot/Swords/宝剑-06.png';
import Sword7 from './resuorce/BilibiliTarot/Swords/宝剑-07.png';
import Sword8 from './resuorce/BilibiliTarot/Swords/宝剑-08.png';
import Sword9 from './resuorce/BilibiliTarot/Swords/宝剑-09.png';
import Sword10 from './resuorce/BilibiliTarot/Swords/宝剑-10.png';
import SwordKing from './resuorce/BilibiliTarot/Swords/宝剑国王.png';
import SwordQueen from './resuorce/BilibiliTarot/Swords/宝剑王后.png';
import SwordKnight from './resuorce/BilibiliTarot/Swords/宝剑骑士.png';
import SwordPage from './resuorce/BilibiliTarot/Swords/宝剑侍从.png';
import Pentacle1 from './resuorce/BilibiliTarot/Pentacles/星币-01.png';
import Pentacle2 from './resuorce/BilibiliTarot/Pentacles/星币-02.png';
import Pentacle3 from './resuorce/BilibiliTarot/Pentacles/星币-03.png';
import Pentacle4 from './resuorce/BilibiliTarot/Pentacles/星币-04.png';
import Pentacle5 from './resuorce/BilibiliTarot/Pentacles/星币-05.png';
import Pentacle6 from './resuorce/BilibiliTarot/Pentacles/星币-06.png';
import Pentacle7 from './resuorce/BilibiliTarot/Pentacles/星币-07.png';
import Pentacle8 from './resuorce/BilibiliTarot/Pentacles/星币-08.png';
import Pentacle9 from './resuorce/BilibiliTarot/Pentacles/星币-09.png';
import Pentacle10 from './resuorce/BilibiliTarot/Pentacles/星币-10.png';
import PentacleKing from './resuorce/BilibiliTarot/Pentacles/星币国王.png';
import PentacleQueen from './resuorce/BilibiliTarot/Pentacles/星币王后.png';
import PentacleKnight from './resuorce/BilibiliTarot/Pentacles/星币骑士.png';
import PentaclePage from './resuorce/BilibiliTarot/Pentacles/星币侍从.png';


function App() {
  const tarotCards = [
    // Major Arcana
    {name: "The Fool", image: TheFool},
    {name: "The Magician", image: TheMagician},
    {name: "The High Priestess", image: TheHighPriestess},
    {name: "The Empress", image: TheEmpress},
    {name: "The Emperor", image: TheEmperor},
    {name: "The Hierophant", image: TheHierophant},
    {name: "The Lovers", image: TheLovers},
    {name: "The Chariot", image: TheChariot},
    {name: "Strength", image: Strength},
    {name: "The Hermit", image: TheHermit},
    {name: "Wheel of Fortune", image: WheelOfFortune},
    {name: "Justice", image: Justice},
    {name: "The Hanged Man", image: TheHangedMan},
    {name: "Death", image: Death},
    {name: "Temperance", image: Temperance},
    {name: "The Devil", image: TheDevil},
    {name: "The Tower", image: TheTower},
    {name: "The Star", image: TheStar},
    {name: "The Moon", image: TheMoon},
    {name: "The Sun", image: TheSun},
    {name: "Judgement", image: Judgement},
    {name: "The World", image: TheWorld},


    // Minor Arcana (Wands)
    {name: "Ace of Wands", image: Wand1},
    {name: "Two of Wands", image: Wand2},
    {name: "Three of Wands", image: Wand3},
    {name: "Four of Wands", image: Wand4},
    {name: "Five of Wands", image: Wand5},
    {name: "Six of Wands", image: Wand6},
    {name: "Seven of Wands", image: Wand7},
    {name: "Eight of Wands", image: Wand8},
    {name: "Nine of Wands", image: Wand9},
    {name: "Ten of Wands", image: Wand10},
    {name: "Page of Wands", image: WandPage},
    {name: "Knight of Wands", image: WandKnight},
    {name: "Queen of Wands", image: WandQueen},
    {name: "King of Wands", image: WandKing},
    
    // Minor Arcana (Cups)
    {name: "Ace of Cups", image: Cup1},
    {name: "Two of Cups", image: Cup2},
    {name: "Three of Cups", image: Cup3},
    {name: "Four of Cups", image: Cup4},
    {name: "Five of Cups", image: Cup5},
    {name: "Six of Cups", image: Cup6},
    {name: "Seven of Cups", image: Cup7},
    {name: "Eight of Cups", image: Cup8},
    {name: "Nine of Cups", image: Cup9},
    {name: "Ten of Cups", image: Cup10},
    {name: "Page of Cups", image: CupPage},
    {name: "Knight of Cups", image: CupKnight},
    {name: "Queen of Cups", image: CupQueen},
    {name: "King of Cups", image: CupKing},

    // Minor Arcana (Swords)
    {name: "Ace of Swords", image: Sword1},
    {name: "Two of Swords", image: Sword2},
    {name: "Three of Swords", image: Sword3},
    {name: "Four of Swords", image: Sword4},
    {name: "Five of Swords", image: Sword5},
    {name: "Six of Swords", image: Sword6},
    {name: "Seven of Swords", image: Sword7},
    {name: "Eight of Swords", image: Sword8},
    {name: "Nine of Swords", image: Sword9},
    {name: "Ten of Swords", image: Sword10},
    {name: "Page of Swords", image: SwordPage},
    {name: "Knight of Swords", image: SwordKnight},
    {name: "Queen of Swords", image: SwordQueen},
    {name: "King of Swords", image: SwordKing},

    // Minor Arcana (Pentacles)
    {name: "Ace of Pentacles", image: Pentacle1},
    {name: "Two of Pentacles", image: Pentacle2},
    {name: "Three of Pentacles", image: Pentacle3},
    {name: "Four of Pentacles", image: Pentacle4},
    {name: "Five of Pentacles", image: Pentacle5},
    {name: "Six of Pentacles", image: Pentacle6},
    {name: "Seven of Pentacles", image: Pentacle7},
    {name: "Eight of Pentacles", image: Pentacle8},
    {name: "Nine of Pentacles", image: Pentacle9},
    {name: "Ten of Pentacles", image: Pentacle10},
    {name: "Page of Pentacles", image: PentaclePage},
    {name: "Knight of Pentacles", image: PentacleKnight},
    {name: "Queen of Pentacles", image: PentacleQueen},
    {name: "King of Pentacles", image: PentacleKing},
  ];

  return (
    <div className="App">
      <TarotCardSlider tarotCards={tarotCards} />
      {/* <StarBackground/> */}
    </div>

  );
}

export default App;
