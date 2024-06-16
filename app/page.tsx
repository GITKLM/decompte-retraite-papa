
import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NewTabButton from '@/components/MonBouton';

const today = new Date();
let target = new Date(today)
target.setDate(target.getDate() + 2480)

const timerLabels = ['années', 'mois', 'jours', 'heures', 'minutes', 'secondes']

export default function Home() { 

  return (
    <main className="container">
      <section>
          <h1 className=''>La retraite, c&apos;est dans: </h1>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
          <h2>C&apos;est pour bientôt !</h2>

<p className='deux-ans'>Hé oui, il y a 2 ans en plus....</p>
<div className='aller-mieux'>
<p>Si jamais ça va mal tu peux</p>
<NewTabButton url="https://www.youtube.com/watch?v=9TGlc0Fufgk">
        Cliquer ici
      </NewTabButton>
</div>
      </section>
    </main>
  );
}